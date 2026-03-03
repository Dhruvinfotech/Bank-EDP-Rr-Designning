const app = require("./app");
const db = require("./config/db");

const PORT = 5000;

db.query("SELECT 1")
  .then(() => {
    console.log("MySQL connected");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  });

const birthdayRoutes = require('./routes/userRoutes');
const { startBirthdayCron } = require('./jobs/birthdayCron');

// Add birthday SSE route
app.use('/api/birthday', birthdayRoutes);

// Start the midnight birthday cron job
startBirthdayCron();