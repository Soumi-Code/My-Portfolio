const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
contactEmail.verify((error) => {
  if (error) {
    console.log("Email verification failed:",error);
  } else {
    console.log("Ready to Send");
  }
});
router.post("/contact", (req, res) => {
  const name = `${req.body.firstName} ${req.body.lastName}`;
  const message = req.body.message;
  const phone = req.body.phone;  const email = req.body.email;

  const mail = {
    from: email,
    to:process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      return res.status(500).json({ code: 500, status: "Message could not be sent." });
    } else {
      console.log("Email sent successfully!");
      return res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});