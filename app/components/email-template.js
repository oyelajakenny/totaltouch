import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  span,
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

export function EmailTemplate({ name, email, service, date, message }) {
  // Format the service name
  const serviceName = serviceNames[service] || service;

  // Parse the message to extract phone, address, and instructions
  const messageLines = message.split("\n");
  const phone = messageLines[0].replace("Phone:", "").trim();
  const address = messageLines[1].replace("Address:", "").trim();
  const instructions = messageLines[2]
    .replace("Special Instructions:", "")
    .trim();

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
            <Text style={text}> <span style={span}>Name:</span> {name}</Text>
            <Text style={text}>Email: {email}</Text>
            <Text style={text}>Phone: {phone}</Text>
          </Section>

          <Section style={section}>
            <Text style={text}>
              <strong>Booking Details</strong>
            </Text>
            <Text style={text}>Service: {serviceName}</Text>
            <Text style={text}>Date & Time: {date}</Text>
            <Text style={text}>Address: {address}</Text>
          </Section>

          {instructions && instructions !== "None" && (
            <Section style={section}>
              <Text style={text}>
                <strong>Special Instructions</strong>
              </Text>
              <Text style={text}>{instructions}</Text>
            </Section>
          )}
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
  backgroundColor: "white",
  margin: "0 auto",
  padding: "20px",
  borderTop:"5px solid blue"
  
};

const heading = {
  fontSize: "1.5rem",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "blue",
  padding: "17px 0 0",
};

const section = {
    backgroundColor:"white",
  padding: "24px",
  border: "solid 1px #dedede",
  borderBottom:"2px solid grey",
  margin: "15px 0",
};

const text = {
  margin: "0 0 10px 0",
  color: "#484848",
  fontSize: "16px",
  lineHeight: "24px",
};

const span ={
    color: "blue",
    fontWeight:"600",
};