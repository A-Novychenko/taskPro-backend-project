const {sendEmail} = require("../../helpers");

const support = async (req, res) => {
  const {name} = req.user;
  const {comment, email} = req.body;

  const emailTemplate = {
    subject: "Request for help from a TaskPro user",
    html: `<div><p>Registered application user, login: <strong>${name}</strong></p>
  <p>Message from user: <strong>${comment}</strong></p>
  <p>Send response to email: <strong>${email}</strong></p><div/>`,
  };

  await sendEmail(emailTemplate);

  res.json({
    status: "OK",
    code: 200,
    message: "Email sent",
  });
};

module.exports = support;
