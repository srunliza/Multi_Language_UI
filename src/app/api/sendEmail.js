// pages/api/sendEmail.js

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your email password or app-specific password
      },
    });

    // Set email options
    const mailOptions = {
      from: email,
      to: "sokheng.tey03@gmail.com", // Hardcoded recipient email
      subject: `New message from ${name}`,
      text: message,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
