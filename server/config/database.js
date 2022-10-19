const mongoose = require('mongoose')


const connectDatabase=()=>{
    mongoose.connect(process.env.DB_URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true,
      
        
       
    }).then((db)=>{
        console.log(`Database is conencted `)
    })
    .catch((err)=>{
        console.log(err)
    })

}
module.exports=connectDatabase;
