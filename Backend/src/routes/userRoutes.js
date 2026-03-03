const express = require("express");
const router = express.Router();
const userController = require("../controller/usercontroller");
const { addClient } = require('../events/birthdaySSE');

router.post("/login", userController.loginUser);
router.get('/stream', (req, res) => {
  addClient(res);
});
const { getTodaysBirthdays } = require('../utils/BirthdayChecker');
const { pushBirthdayAlert  } = require('../events/birthdaySSE');

module.exports = router;


// Frontend connects here to receive live alerts
router.get('/stream', (req, res) => {
  addClient(res);
});

// ✅ TEST ROUTE — hit this to instantly trigger birthday alert
router.get('/test', async (req, res) => {
  const birthdays = await getTodaysBirthdays();
  pushBirthdayAlert(birthdays);
  res.json({ message: 'Birthday alert pushed!', birthdays });
});

module.exports = router;
