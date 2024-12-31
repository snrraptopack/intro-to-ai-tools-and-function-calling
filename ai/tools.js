
export const getCurrentWeather = async ({location}) =>{
    let weather
    switch (location){

        case "Tarkwa":
            weather = {
                temperature: 72,
                unit:"F",
                forecast:"sunny"
            }
            break
        case "Accra":
            weather = {
                temperature: 55,
                unit:"F",
                forecast:"sunny"
            }
            break
        default:
            weather = {
                temperature: 80,
                unit:"F",
                forecast:"sunny"
            }

    }

    return weather
}


export const getCurrentLocation = async _ =>{
    return {location: "Tarkwa Ghana"}
}


export const tools = new Map()
tools.set("getLocation", getCurrentLocation)
tools.set("getWeather", getCurrentWeather)