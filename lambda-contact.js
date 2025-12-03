import { Resend } from "resend";
import countries from "country-telephone-data";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email regex unchanged
const EMAIL_RE =
  /^(?=.{1,254}$)(?=.{1,64}@)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function isValidEmail(email = "") {
  const e = String(email).trim();
  return EMAIL_RE.test(e);
}

// AWS Lambda handler
export const handler = async (event) => {
  try {
    // Only POST allowed
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        headers: CORSED_HEADERS,
        body: JSON.stringify({ ok: false, error: "Method not allowed" }),
      };
    }

    let body;
    try {
      body = JSON.parse(event.body || "{}");
    } catch (err) {
      return {
        statusCode: 400,
        headers: CORSED_HEADERS,
        body: JSON.stringify({ ok: false, error: "Invalid JSON" }),
      };
    }

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

    // Country lookup EXACT same logic
    let countryName = "";
    try {
      const found = (countries.allCountries || []).find(
        (c) => c.iso2.toLowerCase() === (countryIso || "").toLowerCase()
      );
      if (found) {
        countryName = `${found.name} (${countryIso?.toUpperCase() || ""})`;
      }
    } catch (e) {
      console.error("Country lookup failed:", e);
    }

    // Required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers: CORSED_HEADERS,
        body: JSON.stringify({ ok: false, error: "Missing required fields" }),
      };
    }

    // Email format validation
    const emailNormalized = String(email).trim();
    if (!isValidEmail(emailNormalized)) {
      return {
        statusCode: 400,
        headers: CORSED_HEADERS,
        body: JSON.stringify({ ok: false, error: "Invalid email address format" }),
      };
    }

    const fullPhone = `${dialCode ?? ""}${phone ?? ""}`;

    // EXACT SAME EMAIL HTML
    const html = `
      <div style="font-family: system-ui, Arial, sans-serif; line-height: 1.5;">
        <h2 style="color: #f97316;">New Contact Form Submission</h2>
        <p>You have received a new inquiry from the Suorya website.</p>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; border: 1px solid #ddd;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
          <tr><td><strong>Company Category</strong></td><td>${escapeHtml(companyCategory)}</td></tr>
          <tr><td><strong>Designation</strong></td><td>${escapeHtml(designation)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(emailNormalized)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(fullPhone)}</td></tr>
          <tr><td><strong>Inquiry Type</strong></td><td>${escapeHtml(inquiry)}</td></tr>
          <tr><td><strong>Country</strong></td><td>${escapeHtml(countryName || (countryIso?.toUpperCase() ?? ""))}</td></tr>
          <tr><td><strong>Message</strong></td><td>${nl2br(escapeHtml(message))}</td></tr>
        </table>
        <p style="font-size: 12px; color: #888;">Sent automatically from suorya.co.in</p>
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
      subject: `New Contact Form Submission: ${inquiry || "General Inquiry"}`,
      html,
    });

    return {
      statusCode: 200,
      headers: CORSED_HEADERS,
      body: JSON.stringify({ ok: true }),
    };
  } catch (err) {
    console.error("Resend error:", err);
    return {
      statusCode: 500,
      headers: CORSED_HEADERS,
      body: JSON.stringify({ ok: false, error: "Email failed to send" }),
    };
  }
};

// Helpers — UNCHANGED
function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function nl2br(s = "") {
  return String(s).replace(/\n/g, "<br/>");
}

// Required CORS headers
const CORSED_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
