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

const parseMessageDetails = (message) => {
  if (!message || typeof message !== "string") {
    return {};
  }

  return message
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((acc, line) => {
      const [label, ...rest] = line.split(":");
      if (!label || rest.length === 0) {
        return acc;
      }

      acc[label.trim().toLowerCase()] = rest.join(":").trim();
      return acc;
    }, {});
};
export function EmailTemplate({ name, email, service, date, message }) {
  // Format the service name
  const serviceName = serviceNames[service] || service;

  const messageDetails = parseMessageDetails(message);
  const phone = messageDetails["phone"] || "";
  const address = messageDetails["address"] || "";
  const serviceDetail = messageDetails["service detail"] || "";
  const instructions = messageDetails["special instructions"] || "";

  return (
    <Html>
      <Head />
      <Preview>New Booking Request from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Booking Request</Heading>

          <Section style={section}>
            <Text style={text}>
              <strong>Customer Details</strong>
            </Text>
            <Text style={text}>
              {" "}
              <span style={span}>Name:</span> {name}
            </Text>
            <Text style={text}>
              <span style={span}>Email:</span> {email}
            </Text>
            <Text style={text}>
              <span style={span}>Phone:</span> {phone}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              <strong>Booking Details</strong>
            </Text>
            <Text style={text}>
              <span style={span}>Service:</span> {serviceName}
            </Text>
            {serviceDetail && (
              <Text style={text}>
                <span style={span}>Service Detail:</span> {serviceDetail}
              </Text>
            )}
            <Text style={text}>
              {" "}
              <span style={span}>Date & Time:</span> {date}
            </Text>
            <Text style={text}>
              <span style={span}>Address:</span> {address}
            </Text>
          </Section>

          {instructions && instructions !== "None" && (
            <Section style={section}>
              <Text style={text}>
                <strong>Special Instructions</strong>
              </Text>
              <Text style={text}>{instructions}</Text>
            </Section>
          )}
          {/* Footer Section */}
          <Section style={footerSection}>
            <Text style={footerText}>
              {new Date().getFullYear} 2025 TotalTouch Cleaning. All rights
              reserved.
            </Text>
            <Text style={footerText}>
              Follow us:{" "}
              <a
                href="https://facebook.com/totaltouchcleaning"
                style={linkStyle}
              >
                Facebook
              </a>
              {" | "}
              <a href="https://twitter.com/totaltouchclean" style={linkStyle}>
                Twitter
              </a>
              {" | "}
              <a
                href="https://instagram.com/totaltouchcleaning"
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
  backgroundColor: " #0A58A2 ",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#f6f9fc",
  margin: "0 auto",
  padding: "20px",
  borderTop: "5px solid blue",
};

const heading = {
  fontSize: "1.5rem",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#0A58A2",
  padding: "17px 0 0",
};

const section = {
  backgroundColor: "white",
  padding: "24px",
  border: "solid 1px #dedede",
  borderBottom: "2px solid grey",
  margin: "15px 0",
};

const text = {
  margin: "0 0 10px 0",
  color: "#484848",
  fontSize: "16px",
  lineHeight: "24px",
};

const span = {
  color: "black",
  fontWeight: "600",
};

const footerSection = {
  backgroundColor: "#f6f9fc",
  padding: "16px 0 0 0",
  borderTop: "1px solid #dedede",
  textAlign: "center",
  marginTop: "24px",
};

const footerText = {
  color: "#888",
  fontSize: "14px",
  margin: "4px 0",
};

const linkStyle = {
  color: "#0A58A2",
  textDecoration: "none",
  margin: "0 4px",
};


