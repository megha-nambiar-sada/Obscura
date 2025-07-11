backend/server.js

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  const {
    firstName,
    secondName,
    lastName,
    address,
    experience,
    domain
  } = req.body;

  console.log("Received employee data:");
  console.log({ firstName, secondName, lastName, address, experience, domain });

  res.status(200).json({ message: "Employee data received successfully!" });
});

app.listen(PORT, () => {
  console.log(Server is running on http://localhost:${PORT});
});
