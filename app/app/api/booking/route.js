// app/api/booking/route.ts
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs"; // important: googleapis needs Node runtime (not Edge)

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, date, service, address, notes } = body;

    const rawPrivateKey = process.env.GOOGLE_PRIVATE_KEY ?? "";
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL ?? "";
    if (!rawPrivateKey || !clientEmail) {
      return NextResponse.json(
        { error: "Missing GOOGLE_PRIVATE_KEY or GOOGLE_CLIENT_EMAIL env var" },
        { status: 500 }
      );
    }

    // Normalize multiline private key from env
    const privateKey = rawPrivateKey
      .replace(/\\n/g, "\n")
      .replace(/^"|"$/g, "");

    let sheets;
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: clientEmail,
          private_key: privateKey,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      sheets = google.sheets({ version: "v4", auth });
    } catch (authErr) {
      if (
        authErr &&
        (authErr.code === "ERR_OSSL_EVP_UNSUPPORTED" ||
          authErr.code === "ERR_OSSL_UNSUPPORTED")
      ) {
        return NextResponse.json(
          {
            error:
              "OpenSSL unsupported: enable legacy provider or convert the private key to PKCS8. For local dev, set NODE_OPTIONS=--openssl-legacy-provider.",
          },
          { status: 500 }
        );
      }
      throw authErr;
    }

    const values = [
      [
        new Date().toISOString(), // Timestamp
        name,
        email,
        phone || "",
        date || "",
        service || "",
        address || "",
        notes || "",

      ],
    ];

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Booking",
        valueInputOption: "USER_ENTERED",
        requestBody: { values },
      });
    } catch (sheetsErr) {
      if (
        sheetsErr &&
        (sheetsErr.code === "ERR_OSSL_EVP_UNSUPPORTED" ||
          sheetsErr.code === "ERR_OSSL_UNSUPPORTED")
      ) {
        return NextResponse.json(
          {
            error:
              "OpenSSL unsupported while writing to Sheets. Enable legacy provider or convert the private key to PKCS8.",
          },
          { status: 500 }
        );
      }
      throw sheetsErr;
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: err.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}

