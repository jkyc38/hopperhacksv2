import express from 'express';  // Use import for express
import QuestionGenerator from './recommendation.js';  //
import cors from 'cors'
import examples from "./exampletests.js"
const app = express();

const PORT = process.env.PORT || 8000;
// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Basic Route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.get("/cuisine-questions", async (req,res)=>{
  // const generator = new QuestionGenerator();

  try{
    const cuisines = req.query.cuisines;
    // const resp = await generator.generateQuestions(cuisines); //this makes api call
    // if(resp){
    //   console.log("making api call");
    //   console.log(resp);
    // }
    const resp = examples;
    
    res.json(resp);
  }
  catch(err){
    console.error(err);  // Log the error for debugging
    res.status(500).json({ error: 'Failed to generate questions' });
  }
  // res.send("hello");
})


// app.get("/").