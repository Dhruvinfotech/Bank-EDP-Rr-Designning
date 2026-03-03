const cron = require('node-cron');
const { getTodaysBirthdays } = require('../utils/birthdayChecker');
const { pushBirthdayAlert  } = require('../events/birthdaySSE');

function startBirthdayCron() {
  // Runs every day at midnight (00:00)
  cron.schedule('0 0 * * *', async () => {
    console.log('🎂 Checking birthdays...');

    const birthdays = await getTodaysBirthdays();

    if (birthdays.length > 0) {
      console.log(`🎉 Found ${birthdays.length} birthday(s) today!`);
      pushBirthdayAlert(birthdays);
    }
  });

  console.log('✅ Birthday cron job started');
}

module.exports = { startBirthdayCron };