const express = require("express");
const cors = require("cors");

const PORT = 8080;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
