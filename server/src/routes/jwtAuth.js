const router = require("express").Router();
const pool = require("../db");
// add argon2
const argon2 = require("argon2");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validinfo");
const autherization = require("../middleware/authorization");
//register
router.post("/register", validInfo, async (req, res) => {
  try {
    //1. destructure the req.body (name, email, password)
    const { name, email, password } = req.body;
    //2. check if the user exists (if user exists then throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }
    //3. hash the password with argon2
    const hash = await argon2.hash("password");

    //4. enter the user into the database
    const newUser = await pool.query(
      "INSERT INTO users (user_name, user_email, user_password) VALUES($1,$2,$3) RETURNING *",
      [name, email, hash]
    );
    //5. generate the jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// login route
router.post("/login", validInfo, async (req, res) => {
  try {
    //1. destructure req.body
    const { email, password } = req.body;
    //2. check if user does not exist (if not then throw error)
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email,
    ]);
    if (user.rows.length === 0) {
      return res.status(401).json("Password or email is incorrect");
    }
    //3. check if incoming password is the same as the database password

    // add hash later
    const validPassword = await argon2.verify(
      user.rows[0].user_password,
      password
    );
    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }

    //4. give them the jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/is-verify", autherization, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});
module.exports = router;
