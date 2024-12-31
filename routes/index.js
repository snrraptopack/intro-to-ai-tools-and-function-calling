import express from "express";
import {model} from "../ai/aiConfig.js";
import {tools} from "../ai/tools.js";


export const indexRouter = express.Router()

const messageHistory = []


const chatModel = model.startChat({
        history:messageHistory
})

async function agent(){

        const MAX = 5
        let modelResponse = await chatModel.sendMessage("what my current location")
        let  responseText = modelResponse.response.text()
        let call = modelResponse.response.functionCalls()


        if(call && call.length>0){
                const functionResponses = []

                for(let i = 0; i<call.length; i++){
                        const {name,args} = call[i]
                        let toolResponse;
                        console.log(name)
                        if(Object.keys(args).length > 0){
                                 const tool = tools.get(name)
                                 toolResponse = await tool(args)

                        }else{
                                const tool = tools.get(name)
                                toolResponse = await tool()
                        }

                        console.log(toolResponse)

                        functionResponses.push({
                                functionResponse:{
                                        name,
                                        response:toolResponse
                                }
                        })

                }
                modelResponse = await  chatModel.sendMessage(functionResponses)
                responseText =  modelResponse.response.text()

        }

        console.log("****************here*************")
        console.log(responseText)
}
agent()


indexRouter.route("/")
    .get((req, res) => {
        res.send("Hello this is from the index routes")})