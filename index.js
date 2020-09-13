const express = require("express");
const app = express();
const port = 8000;

app.get("/home", (req, res) => {
  res.send({ error: false, message: "This is working great" });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//OCI TOKEN: -.Rr6H_VRfAe29bxQARK
