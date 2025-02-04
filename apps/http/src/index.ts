import express from "express";
const client = require("@repo/db/client");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "hello there " });
});
app.post("/signUp", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await client.user.create({
      data: { username, email, password },
    });
    res.json({ message: "user created successfully", user });
  } catch (error) {
    res.json({ error: error, message: "error in signUp" });
  }
  res.json({ message: "hello there " });
});

app.listen(3002, () => {
  console.log("listengn on port 3000");
});
