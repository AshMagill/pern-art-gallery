const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");
const path = require("path");
const multer = require("multer");

// Create multer object
const imageUpload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "images/");
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + "_" + file.originalname);
    },
  }),
});

// get user info (once logged in)
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

//article crud

// create an article
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

// get all image data
router.get("/articles", async (req, res) => {
  try {
    const allArticles = await pool.query("SELECT * FROM images");
    res.json(allArticles.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get an image object
router.get("/articles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const article = await pool.query("SELECT * FROM images WHERE id = $1", [
      id,
    ]);
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

// create an image
router.post("/image", imageUpload.single("image"), async (req, res) => {
  try {
    const { filename, mimetype, size } = req.file;
    const { title, description } = req.body;
    const filepath = req.file.path;
    const newImage = await pool.query(
      "INSERT INTO images (filename,filepath,mimetype,size,title,description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [filename, filepath, mimetype, size, title, description]
    );
    res.json(newImage.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get image by filename
router.get("/image/:filename", async (req, res) => {
  try {
    const { filename } = req.params;
    const images = await pool.query(
      "SELECT * FROM images WHERE filename = $1",
      [filename]
    );
    if (images.rows[0]) {
      const dirname = path.resolve();
      const fullfilepath = path.join(dirname, images.rows[0].filepath);
      return res.type(images.rows[0].mimetype).sendFile(fullfilepath);
    }
    res.json(images.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
