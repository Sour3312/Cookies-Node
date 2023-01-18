const express = require("express");
const uuid = require("uuid"); // it generate the cookies
const parseCookie = require("cookie-parser"); //call the generated cookie

const app = express();
app.use(parseCookie());

app.get("/generate-cookie", async (req, res) => {
  const id = uuid.v4();
  res.cookie("key", id).json({
    status: "cookie generated",
    cookie: id,
  });
});

app.get("/parse-cookie", async (req, res) => {
  const cookie = req.cookies;
  res.status(200).json({
    your_id: cookie,
  });
});

app.listen("1000", () => {
    console.log("Server Started");
  });

// every time you will get a new cookie
//chrome >> application >> cookies
// http://localhost:1000/generate-cookie
// http://localhost:1000/parse-cookie
