const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/", authorization, async (req, res) => {
  try {
    // all user info is being returned, should not include password
    const user = await pool.query(
      "SELECT user_name, user_email, user_id FROM users WHERE user_id = $1",
      [req.user]
    );
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// all my routes for article crud

// create an article item
router.post("/articles", authorization, async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const newArticle = await pool.query(
      "INSERT INTO articles (title, description, image) VALUES($1, $2, $3) RETURNING *",
      [title, description, image]
    );
    res.json(newArticle.rows[0]);
  } catch (err) {
    console.error(err);
  }
});

// get all articles
router.get("/articles", async (req, res) => {
  try {
    const allArticles = await pool.query("SELECT * FROM articles");
    res.json(allArticles.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get an artcle item
router.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await pool.query(
      "SELECT * FROM articles WHERE article_id = $1",
      [id]
    );
    res.json(article.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update an artcle
router.put("/articles/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const updateArticle = await pool.query(
      "UPDATE articles SET title = $1, description = $2, image = $3 WHERE article_id= $4",
      [title, description, image, id]
    );
    res.json("Article was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

// delete an article
router.delete("/articles/:id", authorization, async (req, res) => {
  try {
    const { id } = req.params;
    const deleteArticle = await pool.query(
      "DELETE FROM articles WHERE article_id = $1",
      [id]
    );
    res.json("Article item was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
