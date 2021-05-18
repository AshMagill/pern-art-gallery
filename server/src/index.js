const express = require("express");
const app = express();
const cors = require("cors");
const authorization = require("./middleware/authorization");

//middleware

app.use(express.json()); //req.body
app.use(cors());

//ROUTES
//register and login routes
app.use("/auth", require("./routes/jwtAuth"));

//dashboard routes
app.use("/dashboard", require("./routes/dashboard"));

//app.use("/articles", require("./routes/articles"));

app.listen(5000, () => {
  console.log("listening on port 5000");
});
