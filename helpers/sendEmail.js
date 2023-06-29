const nodemailer = require("nodemailer");

const {UKR_NET_EMAIL, UKR_NET_PASSWORD, MAIL_SUPPORT} = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  // const email = {
  //   to: MAIL_SUPPORT,
  //   from: UKR_NET_EMAIL,
  //   subject: "Request for help from a TaskPro user",
  //   html: `<div><p>Registered application user, login: <strong>${name}</strong></p>
  // <p>Message from user: <strong>${comment}</strong></p>
  // <p>Send response to email: <strong>${feedBackEmail}</strong></p><div/>`,
  // };

  const email = {...data, from: UKR_NET_EMAIL, to: MAIL_SUPPORT};

  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
