import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const serviceNames = {
  home: "Home Cleaning",
  regular: "Regular Cleaning",
  office: "Office Cleaning",
  move: "Move In/Out Cleaning",
  laundry: "Laundry Pick Up",
  fumigation: "Fumigation Service",
  deep: "Deep Cleaning",
};

export function BookingConfirmationEmail({ name, email, service, date }) {
  const serviceName = serviceNames[service] || service;

  return (
    <Html>
      <Head />
      <Preview>Your booking request has been received</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>
            Thanks, {name}! We got your booking.
          </Heading>

          <Section style={section}>
            <Text style={text}>
              We’re excited to help. Our team will review your request and reach
              out shortly to confirm the schedule and any details.
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              <strong>Booking Summary</strong>
            </Text>
            <Text style={text}>
              <span style={label}>Name:</span> {name}
            </Text>
            <Text style={text}>
              <span style={label}>Email:</span> {email}
            </Text>
            <Text style={text}>
              <span style={label}>Service:</span> {serviceName}
            </Text>
            <Text style={text}>
              <span style={label}>Preferred Date & Time:</span> {date}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              If anything looks off, reply to this email or contact us at
              totaltouchservices@gmail.com. Call or WhatsApp 08125629484
            </Text>
          </Section>

          <Section style={footerSection}>
            <Text style={footerText}>
              © {new Date().getFullYear()} TotalTouch Cleaning. All rights
              reserved.
            </Text>
            <Text style={footerText}>
              Follow us:{" "}
              <a
                href="https://instagram.com/totaltouch_ng"
                style={linkStyle}
              >
                Instagram
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};
const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px",
  borderTop: "5px solid #0A58A2",
};
const heading = {
  fontSize: "1.5rem",
  fontWeight: 700,
  color: "#0A58A2",
  padding: "8px 0 0",
};
const section = {
  backgroundColor: "white",
  padding: "16px",
  border: "1px solid #dedede",
  margin: "14px 0",
};
const text = {
  margin: "0 0 10px 0",
  color: "#484848",
  fontSize: 16,
  lineHeight: "24px",
};
const label = { color: "black", fontWeight: 600 };
const footerSection = {
  backgroundColor: "#f6f9fc",
  padding: "12px 0 0",
  borderTop: "1px solid #dedede",
  textAlign: "center",
  marginTop: 16,
};
const footerText = { color: "#888", fontSize: 14, margin: "4px 0" };
const linkStyle = { color: "#0A58A2", textDecoration: "none" };
