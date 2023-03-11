const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const apiRouter = require("./apiRouter");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Use the body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: "http://ase-group.org",
};

app.use(cors(corsOptions));

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
