const express= require("express")
const app=express()
const errorMiddleware= require('./middleware/error')
const cors= require('cors')
const user=require("./routes/userRoute")

const cookieParser= require('cookie-parser')

app.use(express.json())
app.use(cookieParser())
app.use(cors())

//Routes imports

app.use("/api/v1",user)
//middleware imports
app.use(errorMiddleware)



module.exports =app