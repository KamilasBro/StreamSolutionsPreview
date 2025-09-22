const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });


const app = express();
const PORT = process.env.PORT || 3001;
// Enable CORS
app.use(
    cors({
      origin: "https://streamsolutions.pl",
      methods: "POST",
      credentials: true,
    })
  );
  

// Middleware to parse the form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport(
  smtpTransport({
    host: "ssl0.ovh.net", // OVH SMTP server
    port: 465, // OVH SMTP port
    secure: true, // Use secure connection
    auth: {
      user: process.env.EMAIL_USER, // Your OVH email address
      pass: process.env.EMAIL_PASSWORD, // Your OVH email password or App Password
    },
  })
);

// Route to handle form submissions
app.post("/submitForm", async (req, res) => {
  try {
    const { title, email, message } = req.body;
    console.log("Received title:", title);
    console.log("Received email:", email);
    console.log("Received message:", message);

    // Compose email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: title,
      text: `Email: ${email}\n\nMessage: ${message}`,
      replyTo: email, // Set the reply-to address to the user's email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // If successful, return success response
    res
      .status(200)
      .json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
