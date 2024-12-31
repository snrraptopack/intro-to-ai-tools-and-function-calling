# AI Tools and Function Calling App

## Overview

This app demonstrates the usage of AI-powered function calling and integrates tools to fetch location and weather data. The app utilizes Google's Generative AI API to make function calls based on user queries, and then fetches the respective data using custom functions.

## Features

- **Location and Weather Retrieval**: The app retrieves the user's location and provides weather details based on that location.
- **Function Calling**: It interacts with custom functions (`getLocation` and `getWeather`) and handles asynchronous requests for data.
- **API Integration**: Integrates with a Google API to handle generative function calls.

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/snrraptopack/intro-to-ai-tools-and-function-calling.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd intro-to-ai-tools-and-function-calling
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the server**:

    ```bash
    npm start
    ```

    The server will run on port `8001`.

## Usage

### Function Calls

- **getLocation**: This function fetches the current location of the user (in this case, "Tarkwa Ghana").
- **getWeather**: This function retrieves the weather based on the provided location. It supports locations like `Tarkwa` and `Accra`.

### Example:

When you query the app with a message like "What is the current weather at Tarkwa and Accra?", the app will perform the following steps:

1. Send a query to the AI model to extract location and weather information.
2. Use the `getLocation` function to retrieve the location (e.g., Tarkwa or Accra).
3. Use the `getWeather` function to fetch the weather data for the specified location.
4. Return the weather response, such as:
   - **Tarkwa**: "The weather is sunny and 72°F."
   - **Accra**: "The weather is sunny and 55°F."

### Example Response:

```json
{
  "location": "Tarkwa",
  "weather": {
    "temperature": 72,
    "unit": "F",
    "forecast": "sunny"
  }
}
