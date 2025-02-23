import OpenAI from "openai";
import { OPENAI_KEY } from "../../apikeys.js";

// const openai = new OpenAI({
//     apiKey: OPENAI_KEY
// })


// function generateQuestions(cuisine){
//     cuisine.join(",")
//     let prompt = `I need you to generate 5 questions for each cuisine`
// }
// console.log(`APIKEY: ${OPENAI_KEY}`)
// class CuisineRecommendation{
//     constructor(cuisines){
        
//     }
// }

// const OpenAI = require('openai');
const generatePrompt = (cuisines) => {
    return {
        systemPrompt: `You are a culinary expert AI that helps people decide what to eat based on their current cravings and mood. 
Create questions that tap into immediate food desires and cravings, focusing on specific textures, flavors, and eating experiences.
Each question should:
- Be answerable with Yes/No/Probably/Probably Not
- Focus on immediate cravings and current mood
- Use sensory and evocative language to help identify cravings
- Be specific about textures, temperatures, and eating experiences
- Help surface subconscious food desires`,

        userPrompt: `I want you to generate 5 craving-focused questions for EACH cuisine in the available cuisines that would help determine what someone wants to eat right now from these available cuisines: ${cuisines.join(', ')}.
The amount of questions generated should be 5 times the amount of cuisines. The questions should make people think about specific food experiences and help surface what they're actually craving. 
Format the response as a JSON array where each question object has:
- id: A unique identifier for the question
- text: The actual question text
- relatedCuisines: Array of cuisines this craving might suggest

Example questions:
- "Are you craving something warm and soupy right now?"
- "Do you feel like something crispy and crunchy?"
- "Are you in the mood for fresh, zingy flavors?"
- "Would you enjoy something rich and comforting?"

Example format:
{
    "questions": [
        {
            "id": "warm_soupy",
            "text": "Are you craving something warm and soupy right now?",
            "relatedCuisines": ["japanese", "vietnamese", "chinese"]
        }
    ]
}`
    };
};

class QuestionGenerator {
    constructor() {
        this.openai = new OpenAI({
            apiKey: OPENAI_KEY
        });
    }

    async generateQuestions(cuisines) {
        const { systemPrompt, userPrompt } = generatePrompt(cuisines);

        try {
            const completion = await this.openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: systemPrompt
                    },
                    {
                        role: "user",
                        content: userPrompt
                    }
                ],
                response_format: { type: "json_object" }
            });

            const questions = JSON.parse(completion.choices[0].message.content).questions;
            
            // Add standard options to each question
            return questions.map(question => ({
                ...question,
                options: [
                    { value: 'yes', label: 'Yes', weight: 1.0 },
                    { value: 'probably', label: 'Probably', weight: 0.7 },
                    { value: 'probably_not', label: 'Probably Not', weight: 0.3 },
                    { value: 'no', label: 'No', weight: 0.0 }
                ]
            }));

        } catch (error) {
            console.error('Error generating questions:', error);
            throw error;
        }
    }
}
export default QuestionGenerator;
// Example usage:

// const generator = new QuestionGenerator();
// const cuisines = ['japanese', 'thai', 'indian', 'italian', 'chinese', 'korean'];

// try {
//     const questions = await generator.generateQuestions(cuisines);
//     console.log(questions);
// } catch (error) {
//     console.error('Failed to generate questions:', error);
// }
