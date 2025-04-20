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
  <div style="font-family: 'Segoe UI', sans-serif; background-color: #f8f8f8; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
      <h2 style="color: #3B1E54; border-bottom: 1px solid #eee; padding-bottom: 10px;">🔔 New Booking Alert</h2>
      <p>You have received a new booking request from the Sacred Sessions website. Here are the details:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Service</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${serviceName} reading at price:- ${servicePrice}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Full Name</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Mobile</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td>
        </tr>
        ${message ? `
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Message</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>` : ''}
      </table>

      <p style="margin-top: 30px;">Please follow up with the client to confirm the session timing.</p>
      
      <hr style="margin: 40px 0;" />
      <p style="font-size: 12px; color: #888;">This is an auto-generated email. Please do not reply to this email.</p>
    </div>
  </div>
`;



        const userHtml = `
<div style="font-family: 'Segoe UI', sans-serif; background-color: #f8f8f8; padding: 30px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
    <h2 style="color: #3B1E54; border-bottom: 1px solid #eee; padding-bottom: 10px;">🙏 Thank You for Your Booking</h2>
    <p>Hi ${name},</p>
    <p>We're grateful you've chosen <strong>Sacred Sessions</strong> for your spiritual journey.</p>
    <p>Your booking request has been received successfully. Here's what we got:</p>

    <ul style="list-style: none; padding-left: 0; margin-top: 20px;">
      <li><strong>Service:</strong> ${serviceName} reading</li>
      <li><strong>Price:</strong> ${servicePrice}</li>
      <li><strong>Contact:</strong> ${mobile}</li>
    </ul>

    <p>We'll reach out to you shortly via mobile or email to confirm your session and share further details.</p>

    <div style="margin-top: 30px; padding: 20px; background: #F4EFFC; border-left: 4px solid #9B7EBD; border-radius: 6px;">
      <p style="color: #3B1E54; font-weight: 500; margin: 0;">✨ May this session guide you toward clarity, peace, and purpose.</p>
    </div>

    <hr style="margin: 40px 0;" />
    <p style="font-size: 12px; color: #888;">This is an auto-generated email. Please do not reply to this email.</p>
  </div>
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