const EmailModel = require('../models/emailModel');
const Scheduler = require('../utils/scheduler');

exports.scheduleEmail = async (email, subject, body, sendAt) => {
  try {
    console.log('Scheduling email:', { email, subject, body, sendAt });
    const emailData = new EmailModel({ email, subject, body, sendAt });
    await emailData.save();
    Scheduler.scheduleEmail(emailData);
  } catch (error) {
    console.error('Error in email service:', error);
    throw error;
  }
};