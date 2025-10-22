import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactForm } from "@/components/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function verifyRecaptcha(token) {
  try {
    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) return false;
    const params = new URLSearchParams();
    params.append("secret", secret);
    params.append("response", token);
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params,
      }
    );
    const data = await response.json();
    return Boolean(data?.success);
  } catch {
    return false;
  }
}

function validateFormData(formData) {
  if (!formData || typeof formData !== "object") {
    return {
      errors: { form: "Invalid form payload" },
      data: null,
    };
  }

  const trimmed = {
    name: String(formData.name || "").trim(),
    email: String(formData.email || "").trim(),
    subject: String(formData.subject || "").trim(),
    message: String(formData.message || "").trim(),
  };

  const errors = {};

  if (!trimmed.name) errors.name = "Name is required";
  if (!trimmed.email) errors.email = "Email is required";
  else if (!emailRegex.test(trimmed.email))
    errors.email = "Enter a valid email";
  if (!trimmed.subject) errors.subject = "Subject is required";
  if (!trimmed.message) errors.message = "Message is required";

  return { errors, data: trimmed };
}

async function sendEmail(formData) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "New Enquiry <send@totaltouchcleaning.com.ng>",
      to: ["totaltouchservices@gmail.com"],
      subject: `Enquiry From Website: ${formData.subject}`,
      react: ContactForm(formData),
      reply_to: formData.email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 502 });
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error.message || "Failed to send email",
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const tokenOk = await verifyRecaptcha(body?.recaptchaToken);
    if (!tokenOk) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }
    const { errors, data } = validateFormData(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    return sendEmail(data);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Invalid request body",
      },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      message: "This endpoint only accepts POST requests for sending emails",
    },
    { status: 405 }
  );
}
