const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.get("/greet", (req, res) => {
  const name = req.query.name || "World";
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
