import mongoose from "mongoose";

const mongoURI = 'mongodb+srv://maste1221:1221@mernapp.i9tkkrd.mongodb.net/Songs';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log('Successfully connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1); 
    }
};

export default connectDB;