import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const requestData = await req.json();

    const { SENDER_EMAIL, SENDER_PASSWORD, RECEIVER_EMAIL } = process.env;

    // Create a transporter using SMTP details
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SENDER_EMAIL,
        pass: SENDER_PASSWORD,
      },
    });

    // Create an email message
    const mailOptions = {
      from: SENDER_EMAIL,
      to: RECEIVER_EMAIL,
      subject: "New Inquiry",
      text: `
        User Name: ${requestData.firstName + " " + requestData.lastName}
        User Contact number: ${requestData.number}
        User Mail: ${requestData.email}
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.response);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return Response.json(
      {
        success: false,
        message: "Internal server error, please try again",
      },
      {
        status: 500,
      }
    );
  }
}
