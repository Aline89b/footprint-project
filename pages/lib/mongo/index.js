import { mongoose } from "mongoose"


// const DB_URL = "mongodb+srv://AGproject:Ayx9DdFPyMK459wf@cluster0.xgfg89j.mongodb.net/MAILDB?retryWrites=true&w=majority"


const connectMongo = async () => {
    try{
const { connection } = await mongoose.connect(process.env.DB_URL)
    if(connection.readyState == 1){
        console.log("database connected")
    }

}catch(errors){
    return Promise.reject(errors)
    }
}

export default connectMongo;