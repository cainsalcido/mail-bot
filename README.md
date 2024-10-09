# Mail Bot

A basic mail bot template using [Node.js](https://github.com/nodejs/node) and [Nodemailer](https://github.com/nodemailer/nodemailer)

## Getting Started

1. Clone this repository to your local machine.
2. Install the dependencies by running `npm install`.
3. Create a `config.json` file with your SMTP credentials and email addresses.
4. Use the `sendEmail` function to send emails from your application.

## Usage

You can use the `sendEmail` function to send emails from your application. For example:
```javascript
const mailBot = require('./mail-bot');

mailBot.sendEmail('Hello from Mail Bot!', 'This is a test email sent from the mail bot.');
