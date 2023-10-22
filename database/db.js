import mongoose from 'mongoose';

async function dbConnection(){
    const DB_URI="mongodb+srv://abbaszaidi:12345@job-portal.14uoucj.mongodb.net/";
    try{
        await mongoose.connect(DB_URI,{useUnifiedTopology:true});
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting with the database",error.message);
    }
}
export default dbConnection;