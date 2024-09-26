const express = require("express");
const app = express();
const port = 8081;
app.use("/test", (req, res) => {
  res.send("Test is working");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
