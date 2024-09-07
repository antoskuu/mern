const EmailService = require('../services/emailService');

exports.scheduleEmail = async (req, res) => {
  const { email, subject, body, sendAt } = req.body;
  try {
    console.log('Received request to schedule email:', { email, subject, body, sendAt });
    await EmailService.scheduleEmail(email, subject, body, sendAt);
    res.status(200).send('Email scheduled successfully');
  } catch (error) {
    console.error('Error scheduling email:', error);
    res.status(500).send('Error scheduling email');
  }
};