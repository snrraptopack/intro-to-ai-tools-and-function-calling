import {model} from "./aiConfig.js";
import { tools} from "./tools.js";

const messageHistory = []



const chat = model.startChat({
    history:messageHistory
})

async function toolCalled(response){
    const responseArray = response.split('\n')
    const getAction = responseArray.find(it=>it.includes("Action:"))

    let action = null

    if(getAction){
        action = getAction.split(":")[1].trim()

        if(tools.has(action)){
            return[true,await tools.get(action)]
        }

    }
    const answerResponseArr = response.split('Answer:') ?? null

    if(answerResponseArr)
        return [false,answerResponseArr[1]]

    return [false,`Invalid action Called ${action}`]
}

export const manualAgent = async query =>{
    let userQuery = query
    for(let i =0; i<4;i++){
        const modelResponse = await chat.sendMessage(userQuery)
        const response =  modelResponse.response.text()
        const [isValidAction,actionResponse] = await toolCalled(response)

        if(isValidAction){
            userQuery = `Observation: ${actionResponse}`
        }else{
            console.log(actionResponse)
            break
        }
    }
}
