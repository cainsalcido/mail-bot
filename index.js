
const nodemailer = require('nodemailer');

// Configuration
const SMTP_HOST = 'your-smtp-host';
const SMTP_PORT = 587;
const SMTP_USER = 'your-smtp-username';
const SMTP_PASSWORD = 'your-smtp-password';
const FROM_EMAIL = 'your-from-email';
const TO_EMAIL = 'your-to-email';

// Create a transporter object
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: false, // or 'STARTTLS'
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD
  }
});

// Define a function to send an email
async function sendEmail(subject, message) {
  try {
    const mailOptions = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
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
