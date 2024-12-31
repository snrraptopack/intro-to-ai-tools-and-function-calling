
export const userLocationFunctionDeclaration = {
    name:"getLocation",
    description:"get users location",
}

export const userWeatherFunctionDec={
    name:"getWeather",
   description: "get the users weather ",
  parameters:{
    type:"OBJECT",
    description:"get the weather for that location",
    properties:{
      location:{
        type:"STRING",
        description:"The location"
      }
    },
    required: ["location"]
  }
}