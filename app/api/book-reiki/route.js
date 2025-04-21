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
      <h2 style="color: #3B1E54; border-bottom: 1px solid #eee; padding-bottom: 10px;">🔔 New Healing Session Alert</h2>
      <p>You have received a new energy healing request from the Cosmostarot & Healing website. Here are the details:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>Service</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${serviceName} healing at price:- ${servicePrice}</td>
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
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Healing Intentions</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${message}</td>
          </tr>` : ''}
      </table>

      <p style="margin-top: 30px;">Please contact the client to schedule the energy healing session.</p>
      
      <hr style="margin: 40px 0;" />
      <p style="font-size: 12px; color: #888;">This is an auto-generated email. Please do not reply to this email.</p>
    </div>
  </div>
`;

        const userHtml = `
<div style="font-family: 'Segoe UI', sans-serif; background-color: #f8f8f8; padding: 30px;">
  <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 30px; border-radius: 8px; box-shadow: 0 0 8px rgba(0,0,0,0.05);">
    <h2 style="color: #3B1E54; border-bottom: 1px solid #eee; padding-bottom: 10px;">🌿 Thank You for Choosing Healing</h2>
    <p>Dear ${name},</p>
    <p>We're honored you've chosen <strong>Cosmostarot & Healing</strong> for your energy work. Your healing request has been received!</p>

    <ul style="list-style: none; padding-left: 0; margin-top: 20px;">
      <li><strong>Service:</strong> ${serviceName} healing</li>
      <li><strong>Service cost:</strong> ${servicePrice}</li>
      <li><strong>Contact:</strong> ${mobile}</li>
    </ul>

    <p>Our energy healer will connect with you within 24 hours to:</p>
    <ul style="margin-top: 15px; padding-left: 20px;">
      <li>Confirm your session timing</li>
      <li>Discuss preparation guidelines</li>
      <li>Answer any questions</li>
    </ul>

    <div style="margin-top: 30px; padding: 20px; background: #F4EFFC; border-left: 4px solid #9B7EBD; border-radius: 6px;">
      <p style="color: #3B1E54; font-weight: 500; margin: 0;">💫 May this session bring you balanced energy, deep relaxation, and spiritual renewal.</p>
    </div>

    <hr style="margin: 40px 0;" />
    <p style="font-size: 12px; color: #888;">This is an auto-generated email. Please do not reply to this email.</p>
  </div>
</div>
`;

        // Send emails
        await transporter.sendMail({
            from: `"Cosmostarot & Healing" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Healing Request: ${serviceName}`,
            html: adminHtml
        });

        await transporter.sendMail({
            from: `"Cosmostarot & Healing" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Healing Session Confirmation: ${serviceName}`,
            html: userHtml
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Healing booking error:', error);
        return NextResponse.json(
            { error: 'Failed to process healing request' },
            { status: 500 }
        );
    }
}