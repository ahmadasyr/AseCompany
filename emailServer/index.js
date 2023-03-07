const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to handle POST requests to the contact form
app.post("/contact", (req, res) => {
  // Extract form data from request body
  const { name, email, message, subject } = req.body;

  // Create a Nodemailer transport object
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "your_email@gmail.com",
      pass: "your_email_password",
    },
  });

  // Define email message options
  const mailOptions = {
    from: email,
    to: "Info@Ase-Group.Org",
    subject: subject + "From: " + name,
    text: message,
  };

  // Send email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
