import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email templates
    const adminHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8f8f8;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px;">
          <h2 style="color: #800505;">New Contact Form Submission</h2>
          <table style="width: 100%; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; font-weight: bold;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Email:</td>
              <td style="padding: 8px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold;">Message:</td>
              <td style="padding: 8px;">${message}</td>
            </tr>
          </table>
        </div>
      </div>
    `;

    const userHtml = `
      <div style="font-family: 'Segoe UI', sans-serif; padding: 20px; background: #f8f8f8;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 30px; border-radius: 10px; text-align: center;">
          <h2 style="color: #800505;">Thank You for Reaching Out! 🌙</h2>
          <p style="margin-top: 20px;">Dear ${name},</p>
          <p>Your message has been received successfully. I'll respond within 24 hours.</p>
          <div style="margin: 30px 0; padding: 20px; background: #fff5f5; border-radius: 8px;">
            <p style="color: #800505; font-style: italic;">
              "May the stars guide our conversation to meaningful insights"
            </p>
          </div>
          <p>Warm regards,<br/>Chitrangdaa Shany</p>
        </div>
      </div>
    `;

    // Send emails
    await transporter.sendMail({
      from: `"Cosmostarot & Healing" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Form Submission',
      html: adminHtml
    });

    await transporter.sendMail({
      from: `"Cosmostarot & Healing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Message Received - Cosmostarot & Healing',
      html: userHtml
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}