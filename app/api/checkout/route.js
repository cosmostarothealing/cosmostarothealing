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
        const { name, email, phone, address, city, state, pincode, cartItems } = await req.json();

        // Validate required fields
        if (!name || !email || !phone || !address || !city || !state || !pincode) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Fetch product details for all cart items
        let orderItems = [];
        let orderTotal = 0;
        
        if (cartItems && cartItems.length > 0) {
            for (const item of cartItems) {
                const productRes = await fetch(`https://cosmos-admin-smoky.vercel.app/api/products/fetch/${item.slug}`, {
                    method: "GET",
                    headers: {
                      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                    },
                  });
                  
                  if (!productRes.ok) {
                    const errText = await productRes.text();
                    console.error(`Error fetching product: ${item.slug}`, errText);
                    throw new Error(`Fetch failed for ${item.slug}`);
                  }
                  
                  const product = await productRes.json();
                  
                if (product) {
                    const itemTotal = product.price * item.quantity;
                    orderItems.push({
                        name: product.name,
                        quantity: item.quantity,
                        price: product.price,
                        total: itemTotal
                    });
                    orderTotal += itemTotal;
                }
            }
        }

        
        const grandTotal = orderTotal;

        // Generate order items HTML for emails
        const orderItemsHtml = orderItems.map(item => `
            <tr>
                <td style="padding: 8px; border: 1px solid #ddd;">${item.name}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${item.quantity}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Rs. ${item.price.toFixed(2)}</td>
                <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Rs. ${item.total.toFixed(2)}</td>
            </tr>
        `).join('');

        // Admin email content
        const adminHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
                <h2 style="color: #dc2626; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Order Received</h2>
                <p>You have received a new order:</p>
                
                <h3 style="color: #333; margin-top: 25px;">Customer Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; width: 30%;"><strong>Name</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">${phone}</td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Shipping Address</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">${address}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;">
                            ${city}, ${state} - ${pincode}
                        </td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Order Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <thead>
                        <tr style="background-color: #f5f5f5;">
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Product</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">Qty</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Price</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderItemsHtml}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Subtotal</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Rs. ${orderTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Shipping</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">+ shipping charges</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Grand Total</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Rs. ${grandTotal.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        `;

        // Customer email content
        const customerHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f7f7f7;">
            <div style="max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 10px;">
                <h2 style="color: #dc2626; border-bottom: 2px solid #eee; padding-bottom: 10px;">Order Confirmation</h2>
                <p>Thank you for your order, ${name}!</p>
                
                <h3 style="color: #333; margin-top: 25px;">Shipping Details</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd; width: 30%;"><strong>Address</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">
                            ${address}<br>
                            ${city}, ${state} - ${pincode}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 8px; border: 1px solid #ddd;"><strong>Contact</strong></td>
                        <td style="padding: 8px; border: 1px solid #ddd;">
                            ${email}<br>
                            ${phone}
                        </td>
                    </tr>
                </table>

                <h3 style="color: #333; margin-top: 25px;">Order Summary</h3>
                <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                    <thead>
                        <tr style="background-color: #f5f5f5;">
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Product</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: center;">Qty</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Price</th>
                            <th style="padding: 8px; border: 1px solid #ddd; text-align: right;">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderItemsHtml}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Subtotal</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Rs. ${orderTotal.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Shipping</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">+ shipping charges</td>
                        </tr>
                        <tr>
                            <td colspan="3" style="padding: 8px; border: 1px solid #ddd; text-align: right;"><strong>Total</strong></td>
                            <td style="padding: 8px; border: 1px solid #ddd; text-align: right;">Rs. ${grandTotal.toFixed(2)}</td>
                        </tr>
                    </tfoot>
                </table>

                <p style="margin-top: 25px; color: #666;">
                    Your order is being processed and will be shipped soon. We'll send you tracking information once it's on its way.
                </p>
            </div>
        </div>
        `;

        
        // Send emails
        await transporter.sendMail({
            from: `"Order@Cosmostarot_&_Healing" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Order from ${name}`,
            html: adminHtml
        });

        await transporter.sendMail({
            from: `"Cosmostarot & Healing" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Order Confirmation`,
            html: customerHtml
        });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Checkout error:', error);
        return NextResponse.json(
            { error: 'Failed to process order' },
            { status: 500 }
        );
    }
}