const express = require("express");
const path = require("path");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

// app.get("/api", (req, res) => {
//   res.json({ message: "HAI I'M PAUL" });
// });

app.listen(PORT, () => {
  console.log(`tell me something good, ${PORT}`);
});