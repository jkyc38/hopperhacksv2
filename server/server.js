
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/cuisine-questions", (req,res)=>{
  try{
    const cuisines = req.query.cuisines;
    console.log("cuisines: ", cuisines);
  }
  catch(err){
    res.status(500).send("Error 404");
  }
  res.send("hello");
})