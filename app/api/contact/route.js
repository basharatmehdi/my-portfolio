"use strict";
// const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (req) => {
  // console.log(req);
  const { email, name, message } = await req.json();
  if (!email || !name || !message) {
    return NextResponse.json(
      { msg: "All fields are required!" },
      { status: 400 }
    );
  }
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });
  try {
    const mail = await transporter.sendMail({
      from: `"${name} 👻" <${process.env.USER_EMAIL}>`,
      to: "getready141@gmail.com",
      replyTo: email,
      subject: "From ✔ Portfolio",
      html: `<!DOCTYPE html>
      <html>
        <head>
          <style>
          .main {
            background-color: black;
            color: white;
            font-size: 1.2em;
            padding: 2.5em 1.2em;
          }
          .from{
            color: yellow;
            font-weight: bold;
          }
          .name{
            color: white;
            text-transform: capitalize;
          }
          .footer{
            text-align: center;
            margin-top: 5em;
            font-weight: bold;
            text-size: 1.3em
          }
          </style>
        </head>
      <body>
        <div class="main">
          <div>
            <span class="from">Name: </span>
            <span class="name">${name}</span>
          </div>
          <div>
            <span class="from">From: </span>
            <span>${email}</span>
          </div>
          <div>
            <span class="from">Message: </span>
            <span>${message}</span>
          </div>
          <p class="footer">
            Basharat Mehdi
          </p>
        </div>
        
      </body>
      </html>`,
    });

    // console.log("Message sent: %s", mail.messageId);
    return NextResponse.json(
      { msg: "Message Sent Successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Something went wrong.", error },
      { status: 400 }
    );
  }
};
