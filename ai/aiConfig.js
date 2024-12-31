
import {GoogleGenerativeAI} from "@google/generative-ai";
import {userLocationFunctionDeclaration, userWeatherFunctionDec} from "./functionDecs.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)


// const systemPrompt = `
// You cycle through Thought, Action, PAUSE, Observation. At the end of the loop you output a final Answer. Your final answer should be highly specific to the observations you have from running
// the actions.
// 1. Thought: Describe your thoughts about the question you have been asked.
// 2. Action: run one of the actions available to you - then return PAUSE.
// 3. PAUSE
// 4. Observation: will be the result of running those actions.
//
// note: if Action isn't required just provide Action: null
// and also if the question doesn't require you to call an action just produce an answer Answer:
//
// Available actions:
// - getCurrentWeather:
//     E.g. getCurrentWeather: Salt Lake City
//     Returns the current weather of the location specified.
// - getLocation:
//     E.g. getLocation: null
//     Returns user's location details. No arguments needed.
//
// Example session:
// Question: Please give me some ideas for activities to do this afternoon.
// Thought: I should look up the user's location so I can give location-specific activity ideas.
// Action: getLocation: null
// PAUSE
//
// You will be called again with something like this:
// Observation: "New York City, NY"
//
// Then you loop again:
// Thought: To get even more specific activity ideas, I should get the current weather at the user's location.
// Action: getCurrentWeather: New York City
// PAUSE
//
// You'll then be called again with something like this:
// Observation: { location: "New York City, NY", forecast: ["sunny"] }
//
// You then output:
// Answer: <Suggested activities based on sunny weather that are highly specific to New York City and surrounding areas.>
// `

// if you want to test the manual agent please use the lengthy system prompt in place  of the current one

const systemPrompt = "" +
    "You are a helpful AI agent. Give highly specific answers based on the information you're provided." +
    "Prefer to gather information with the tools provided to you rather than giving basic, generic answers."

export const model = genAI.getGenerativeModel({
    model:"gemini-1.5-flash",
    systemInstruction:systemPrompt,
    tools : {
        functionDeclarations: [
            userLocationFunctionDeclaration,
            userWeatherFunctionDec
        ]
    }
})

