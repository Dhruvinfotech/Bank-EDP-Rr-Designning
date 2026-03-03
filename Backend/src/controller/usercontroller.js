const db = require("../config/db");
const jwt = require("jsonwebtoken");
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const [rows] = await db.query(
      "SELECT * FROM users WHERE username=? AND password=?",
      [username, password]
    );

    if (rows.length === 0) {
      return res.json({
        status: "fail",
        message: "Invalid username or password"
      });
    }

    res.json({
      status: "success",
      message: "Login successful",
      data: rows[0]
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
};
