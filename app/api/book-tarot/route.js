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
    const { name, email, mobile, message, serviceName, servicePrice } = await req.json();

    // Validate input
    if (!name || !email || !mobile || !serviceName || !servicePrice) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const adminHtml = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2 style="color: #800505;">🔮 New Booking Received</h2>
      <p>You’ve received a new session booking on <strong>Sacred Sessions</strong>.</p>
  
      <table style="margin-top: 20px; border-collapse: collapse; width: 100%;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Service</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${serviceName} Reading for (${servicePrice})</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Full Name</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Email</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;"><strong>Mobile</strong></td>
          <td style="padding: 8px; border: 1px solid #ccc;">${mobile}</td>
        </tr>
        ${message ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ccc;"><strong>Message</strong></td>
            <td style="padding: 8px; border: 1px solid #ccc;">${message}</td>
          </tr>
        ` : ''}
      </table>
  
      <p style="margin-top: 30px; font-size: 14px; color: #888;">Please follow up with the client as soon as possible to confirm the booking.</p>
    </div>
  `;
  

  const userHtml = `
  <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
    <h2 style="color: #800505;">🌟 Booking Request Received</h2>

    <p>Hi ${name},</p>

    <p>Thank you for choosing <strong>Sacred Sessions</strong>. We've received your booking request for:</p>

    <ul style="list-style: none; padding-left: 0;">
      <li><strong>Service:</strong> ${serviceName} Reading</li>
      <li><strong>Price:</strong> ${servicePrice}</li>
    </ul>

    <p>We'll reach out to you shortly on <strong>${mobile}</strong> to confirm your session timing and details.</p>

   

    <div style="margin-top: 30px; text-align: center;">
      <p style="color: #800505; font-weight: bold;">✨ May this session bring you clarity, peace, and purpose. ✨</p>
    </div>

    <hr style="margin: 40px 0;" />

    <p style="font-size: 12px; color: #aaa;">This is an automated confirmation from Sacred Sessions.</p>
  </div>
`;


    // Send emails
    await transporter.sendMail({
      from: `"Sacred Sessions" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Booking: ${serviceName}`,
      html: adminHtml
    });

    await transporter.sendMail({
      from: `"Sacred Sessions" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Booking Request Received: ${serviceName}`,
      html: userHtml
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}