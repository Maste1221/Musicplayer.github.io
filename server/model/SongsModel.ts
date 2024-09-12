import mongoose from "mongoose";

// Define schema for song model
const songsSchema = new mongoose.Schema(
    {
        song: {
            type: String,
           required:true,
          },
        title: {
            type: String,
            required: true,
        },
        artist: {
            type: String,
            required: true,
            default:'Unknown Artist'

        },
        album: {
            type: String,
            required: true,
        },
        genre: {  
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, 
    }
);

// Create and export the model
const Song = mongoose.model('Song', songsSchema);
export default Song;