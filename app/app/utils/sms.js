import axios from "axios";

export async function sendSMS(phoneNumber, message) {
  if (!process.env.TERMII_API_KEY) {
    console.error("TERMII_API_KEY not configured");
    return { success: false, error: "SMS service not configured" };
  }

  // Validate phone number format
  if (!phoneNumber || !phoneNumber.startsWith("+234")) {
    console.error("Invalid phone number format:", phoneNumber);
    return { success: false, error: "Invalid phone number format" };
  }

  try {
    const response = await axios.post(
      "https://api.ng.termii.com/api/sms/send",
      {
        to: phoneNumber,
        from: process.env.TERMII_SENDER_ID || "TotalTouch",
        sms: message,
        type: "plain",
        channel: "generic",
        api_key: process.env.TERMII_API_KEY,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("SMS sent successfully:", response.data);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error sending SMS:", error.response?.data || error.message);
    return {
      success: false,
      error: error.response?.data?.message || error.message,
    };
  }
}

export function formatBookingSMS(formData) {
  // Extract phone from message field
  const phoneMatch = formData.message?.match(/Phone: (.+)/);
  const phone = phoneMatch ? phoneMatch[1].split("\n")[0].trim() : "N/A";

  // Extract address from message field
  const addressMatch = formData.message?.match(/Address: (.+)/);
  const address = addressMatch ? addressMatch[1].split("\n")[0].trim() : "N/A";

  return `🔔 NEW BOOKING ALERT!

Name: ${formData.name}
Service: ${formData.service}
Date: ${formData.date}
Phone: ${phone}

Check email for full details.`;
}

export function formatContactSMS(formData) {
  return `📧 NEW ENQUIRY!
From: ${formData.name}
Subject: ${formData.subject}
Email: ${formData.email}

Check email for full message.`;
}
