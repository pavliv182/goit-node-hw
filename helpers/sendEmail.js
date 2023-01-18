const sgMail = require("@sendgrid/mail");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const mail = { ...data, from: "uptn182@gmail.com" };
    await sgMail.send(mail);
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;

// const data = {
//   to: "test123@gmail.com",
//   subject: "Verify email",
//   html: `<p>Verify email</p>`,
// };
