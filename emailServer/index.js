const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const apiRouter = require("./apiRouter");
const cors = require("cors");

const app = express();

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://ase-group.org",
};

app.use(cors(corsOptions));

app.use("/api", apiRouter);

// Define a route to handle POST requests to the contact form
app.post("/contact", (req, res) => {
  // Extract form data from request body
  const { name, email, message, subject } = req.body;
  console.log(req.body);

  // Create a Nodemailer transport object
  const transporter = nodemailer.createTransport({
    host: "ase-group.org",
    port: 465,
    auth: {
      user: "automail@ase-group.org",
      pass: "4x6km7D@FCWW",
    },
  });

  // Define email message options
  const mailOptions = {
    from: email,
    to: "info@ase-group.org",
    subject: subject + " From: " + name,
    text: message,
  };

  // Send email using the transporter object
  transporter.sendMail(mailOptions, (error, info) => {
    console.log(mailOptions);
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.send("Email sent successfully");
    }
  });
});

// Start the server
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
