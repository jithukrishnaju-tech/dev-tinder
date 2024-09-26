const express = require("express");
const app = express();
const port = 8081;
// app.use("/test/james", (req, res) => {
//   res.send("james in test");
// });
// app.use("/test", (req, res) => {
//   res.send("Test is working");
// });
app.get("/test", (req, res) => {
  res.send("hi get");
});
app.post("/test", (req, res) => {
  console.log(req.query);
  //localhost:8081/test?employeeId=1
  res.send("get post");
});
app.delete("/test/:id", (req, res) => {
  console.log(req.params);
  //localhost:8081/test/1
  res.send("delete end point");
});
app.put("/test", (req, res) => {
  res.send("Update test");
});
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
