import mongoose from "mongoose";

const connectToMongoDB = async (): Promise<void> => {
    try {

        mongoose.set('strictQuery',false);
        
        const uri: string = process.env.MONGODB_CS || ''

        await mongoose.connect(uri);
    } 
    catch (error) {
        throw new Error('Cannot connect to database')
    }
}

export {
    connectToMongoDB
}