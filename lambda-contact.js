import { Resend } from "resend";
import countries from "country-telephone-data";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation regex
const EMAIL_RE = /^(?=.{1,254}$)(?=.{1,64}@)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function isValidEmail(email = "") {
  return EMAIL_RE.test(String(email).trim());
}

// Lambda handler
export const handler = async (event) => {
  // Enable CORS for suorya.com + www.suorya.com
  const headers = {
    "Access-Control-Allow-Origin": "https://www.suorya.com",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Preflight CORS
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ ok: false, error: "Method not allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const {
      name,
      company,
      companyCategory,
      designation,
      email,
      phone,
      inquiry,
      message,
      countryIso,
      dialCode,
    } = body;

    // Look up country name
    let countryName = "";
    try {
      const found = (countries.allCountries || []).find(
        (c) => c.iso2.toLowerCase() === (countryIso || "").toLowerCase()
      );
      if (found) {
        countryName = `${found.name} (${countryIso?.toUpperCase()})`;
      }
    } catch (e) {}

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    const emailNormalized = String(email).trim();
    if (!isValidEmail(emailNormalized)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ ok: false, error: "Invalid email format" }),
      };
    }

    // Build phone number
    const fullPhone = `${dialCode ?? ""}${phone ?? ""}`;

    // HTML email
    const html = `
      <div style="font-family: system-ui, Arial, sans-serif; line-height: 1.5;">
        <h2 style="color: #f97316;">New Contact Form Submission</h2>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Company</strong></td><td>${company}</td></tr>
          <tr><td><strong>Company Category</strong></td><td>${companyCategory}</td></tr>
          <tr><td><strong>Designation</strong></td><td>${designation}</td></tr>
          <tr><td><strong>Email</strong></td><td>${emailNormalized}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${fullPhone}</td></tr>
          <tr><td><strong>Inquiry Type</strong></td><td>${inquiry}</td></tr>
          <tr><td><strong>Country</strong></td><td>${countryName}</td></tr>
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>
      </div>
    `;

    await resend.emails.send({
      from: "Suorya <info@suorya.co.in>",
      to: [
        "sanjay@suorya.com",
        "aarushi.mittal@suorya.com",
        "info@suorya.co.in",
      ],
      reply_to: emailNormalized,
      subject: `New Contact Form: ${inquiry || "General Inquiry"}`,
      html,
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.log("Lambda Error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ ok: false, error: "Mail send failed" }),
    };
  }
};
