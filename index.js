
const nodemailer = require('nodemailer');
const config = require('./config.json');

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: false, // or 'STARTTLS'
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password
  }
});

// Define a function to send an email
async function sendEmail(subject, message) {
  try {
    const mailOptions = {
      from: config.fromEmail,
      to: config.toEmail,
      subject: subject,
      text: message
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
}

// Example usage
sendEmail('Hello from Mail Bot!', 'This is a test email sent from the mail bot.');

// You can also use this function to send emails based on certain conditions or events
// For example, you can use a scheduler like node-cron to send emails at regular intervals
// or use a webhook to send emails in response to certain events

// Export the sendEmail function so it can be used by other modules
module.exports = { sendEmail };