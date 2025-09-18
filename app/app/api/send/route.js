import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Resend API key is not configured" },
      { status: 500 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "TotalTouch Cleaning <onboarding@resend.dev>",
      to: ["premiumitng@gmail.com"],
      subject: `New Booking Request from ${formData.name}`,
      react: EmailTemplate(formData),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Caught error:", error);
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
    const formData = await request.json();
    return sendEmail(formData);
  } catch (error) {
    console.error("Error processing request:", error);
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
