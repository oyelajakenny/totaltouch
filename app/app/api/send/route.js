export const runtime = "nodejs";

import { EmailTemplate } from "@/components/email-template";
import { BookingConfirmationEmail } from "@/components/booking-confirmation-email";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { sendSMS, formatBookingSMS } from "@/app/utils/sms";
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmail(formData) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Error creating booking" },
      { status: 500 }
    );
  }

  const { name, email } = formData || {};
  if (!name || !email) {
    return NextResponse.json(
      { error: "Missing required fields: name or email" },
      { status: 400 }
    );
  }

  try {
    // 1) Notify internal team
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: "New Booking <send@totaltouchcleaning.com.ng>",
      to: ["totaltouchservices@gmail.com"],
      subject: `New Booking Request from ${formData.name}`,
      react: EmailTemplate(formData),
      reply_to: email,
    });

    if (adminError) {
      console.error("Error sending admin email:", adminError);
      return NextResponse.json({ error: adminError.message }, { status: 500 });
    }

    // 2) Send SMS to client
    if (process.env.ADMIN_PHONE_NUMBER) {
      const smsMessage = formatBookingSMS(formData);
      const smsResult = await sendSMS(
        process.env.ADMIN_PHONE_NUMBER,
        smsMessage
      );

      if (!smsResult.success) {
        console.error("Error sending SMS notification:", smsResult.error);
        // Don't fail the whole request if SMS fails
      } else {
        console.log("SMS notification sent successfully");
      }
    }

    // 2) Send confirmation to client
    const { data: clientData, error: clientError } = await resend.emails.send({
      from: "TotalTouch Cleaning <send@totaltouchcleaning.com.ng>",
      to: [email],
      subject: "We received your booking – TotalTouch Cleaning",
      react: BookingConfirmationEmail(formData),
      reply_to: "totaltouchservices@gmail.com",
    });

    if (clientError) {
      console.error("Error sending client confirmation:", clientError);
      // Return success for the admin mail but include a warning
      return NextResponse.json(
        {
          message:
            "Booking email sent to team, but failed to send client confirmation.",
          data: { adminData },
          warning: clientError.message,
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        message: "Emails sent successfully (team + client confirmation).",
        data: { adminData, clientData },
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
