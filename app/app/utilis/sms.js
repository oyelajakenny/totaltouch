// app/utils/sms.js
import axios from "axios";

export async function sendSMS(phoneNumber, message) {
  if (!process.env.TERMII_API_KEY) {
    console.error("TERMII_API_KEY not configured");
    return { success: false, error: "SMS service not configured" };
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
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error sending SMS:", error.response?.data || error.message);
    return { success: false, error: error.message };
  }
}

export function formatBookingSMS(formData) {
  return `🔔 NEW BOOKING ALERT!

Name: ${formData.name}
Service: ${formData.service}
Date: ${formData.date}
Phone: ${formData.phoneNumber.match(/Phone: (.+)/)?.[1] || "N/A"}
Address: ${formData.message.match(/Address: (.+)/)?.[1] || "N/A"}

Check email for full details.`;
}
