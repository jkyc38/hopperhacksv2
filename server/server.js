import express from 'express';
import cors from 'cors'
import examples from "./exampletests.js"
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/cuisine-questions", async (req,res) => {
  try {
    const cuisines = req.query.cuisines;
    const resp = examples;
    res.json(resp);
  }
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

    res.json({ matchingRestaurants });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process results' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});