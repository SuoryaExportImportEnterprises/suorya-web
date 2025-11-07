// api/contact.js
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const {
      name,
      company,
      designation,
      email,
      phone,
      inquiry,
      message,
      countryIso,
      dialCode,
    } = req.body || {};

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const fullPhone = `${dialCode ?? ''}${phone ?? ''}`;

    // HTML email body
    const html = `
      <div style="font-family: system-ui, Arial, sans-serif; line-height: 1.5;">
        <h2 style="color: #f97316;">New Contact Form Submission</h2>
        <p>You have received a new inquiry from the Suorya website.</p>
        <table cellpadding="8" cellspacing="0" border="1" style="border-collapse: collapse; border: 1px solid #ddd;">
          <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
          <tr><td><strong>Designation</strong></td><td>${escapeHtml(designation)}</td></tr>
          <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${escapeHtml(fullPhone)}</td></tr>
          <tr><td><strong>Inquiry Type</strong></td><td>${escapeHtml(inquiry)}</td></tr>
          <tr><td><strong>Country</strong></td><td>${escapeHtml(countryIso?.toUpperCase() ?? '')}</td></tr>
          <tr><td><strong>Message</strong></td><td>${nl2br(escapeHtml(message))}</td></tr>
        </table>
        <p style="font-size: 12px; color: #888;">Sent automatically from suorya.co.in</p>
      </div>
    `;

    // Send email to all three recipients
    await resend.emails.send({
      from: 'Suorya <info@suorya.co.in>',
      to: [
        // 'sanjay@suorya.com',
        // 'aarushi.mittal@suorya.com',
        'info@suorya.co.in',
      ],
      reply_to: email, // allows you to directly reply to the visitor
      subject: `New Contact Form Submission: ${inquiry || 'General Inquiry'}`,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ ok: false, error: 'Email failed to send' });
  }
}

// Helpers for safe HTML
function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function nl2br(s = '') {
  return String(s).replace(/\n/g, '<br/>');
}