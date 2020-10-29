const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  provider: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "xsaber64@gmail.com",
  },
});
