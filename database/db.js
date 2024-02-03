import mongoose from "mongoose";
const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@ruchitha.mqrkpth.mongodb.net/?retryWrites=true&w=majority`;
    
    try {
        
        await mongoose.connect(URL);
        
            
        
        console.log("mongoDB is connected");
    } catch (error) {
        console.log("error while connecting to mongodb",error);
    }
};

export default Connection;