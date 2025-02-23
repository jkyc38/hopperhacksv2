import express from 'express';
import cors from 'cors'
import examples from "./exampletests.js"
import QuestionGenerator from "./recommendation.js"
// import OPENAI_KEY from "../../apikeys.js"
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/cuisine-questions", async (req,res) => {
  let generator = new QuestionGenerator();

  try {
    const cuisines = req.query.cuisines;
    const resp = await generator.generateQuestions(cuisines);
    if(resp){
      console.log("Making API Call", resp);
    }
    // const resp = examples;
    res.json(resp);
  }
  // try {
  //   const cuisines = req.query.cuisines;
  //   const resp = examples;
  //   res.json(resp);
  // }
  catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate questions' });
  }
});

// New endpoint to get matching restaurants
app.post("/submit-result", (req, res) => {
  try {
    const { topCuisine, restaurants } = req.body;
    // Filter restaurants that match the top cuisine
    const matchingRestaurants = restaurants.filter(restaurant => 
      restaurant.cuisines.includes(topCuisine)
    );
    console.log(matchingRestaurants)
    res.json({ matchingRestaurants });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process results' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});