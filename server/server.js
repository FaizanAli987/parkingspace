const app=require("./app")
const dotenv=require("dotenv")
const connectDatabase=require("./config/database");



// Handling Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error :${err.message}`);
    console.log("Uncaught Error exception")
    process.exit(1);
})
//config of env
dotenv.config({path:'./config/config.env'})
// Database connectDatabase
connectDatabase()



 const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is Running at http://localhost:${process.env.PORT}`);
})
//unhandled Promises

process.on('unhandledRejection', (err) => {
    console.log(`Error:${err.message}`)
    console.log('Shutdown the server due to Unhandled Rejection at: Promise');
    server.close(()=>{
        process.exit(1)
    });
});

//connectDatabase()
