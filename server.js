import "dotenv/config.js"
import {app} from "./app.js"


const port = process.env.PORT || 3000

app.listen(port, (e) => {
    if(e){
        console.log("An error occurred" , e)
    }
    console.log(`server is running on port ${port}`)
})