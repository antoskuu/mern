const nodeSchedule = require('node-schedule');
const EmailModel = require('../models/emailModel');
const nodemailer = require('nodemailer');

exports.scheduleEmail = (emailData) => {
  const job = nodeSchedule.scheduleJob(new Date(emailData.sendAt), async () => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'antoning.antonin@gmail.com',
        pass: 'cezbxhsoqyhggion'
      }
    });

    const mailOptions = {
      from: 'antoning.antonin@gmail.com',
      to: emailData.email,
      subject: emailData.subject,
      text: emailData.body
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  });
};