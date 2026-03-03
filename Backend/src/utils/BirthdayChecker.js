const db = require('../config/db');
const { nameToColor } = require('./colorHelper');

async function getTodaysBirthdays() {
  const today = new Date();
  const month = today.getMonth() + 1; // JS months are 0-based
  const day   = today.getDate();

  // Match only month and day — not year
  const [rows] = await db.query(
    `SELECT id, name, birthday_color 
     FROM customers 
     WHERE MONTH(dob) = ? AND DAY(dob) = ?`,
    [month, day]
  );

  // If no custom color in DB, auto-generate from name
  return rows.map(customer => ({
    id:    customer.id,
    name:  customer.name,
    color: customer.birthday_color || nameToColor(customer.name)
  }));
}

module.exports = { getTodaysBirthdays };