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

export function ContactForm({ name, email, subject, message }) {
  const fallbackMessage = message?.trim() ? message : "No message provided.";

  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Contact Form Submission</Heading>

          <Section style={section}>
            <Text style={text}>
              <strong>Sender Details</strong>
            </Text>
            <Text style={text}>
              <span style={span}>Name:</span> {name}
            </Text>
            <Text style={text}>
              <span style={span}>Email:</span> {email}
            </Text>
            <Text style={text}>
              <span style={span}>Subject:</span> {subject}
            </Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              <strong>Message</strong>
            </Text>
            <Text style={messageText}>{fallbackMessage}</Text>
          </Section>

          <Section style={footerSection}>
            <Text style={footerText}>
              Copyright {new Date().getFullYear()} TotalTouch Cleaning. All rights reserved.
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

const messageText = {
  ...text,
  whiteSpace: "pre-line",
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
