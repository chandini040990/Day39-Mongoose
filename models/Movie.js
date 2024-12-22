import mongoose from "mongoose";

// define schema

const movieSchema = new mongoose.Schema({
    name: { type: String, required: true, min: 1, max: 10 },
    ratings: { type: Number, required: true, min: 1, max: 10 },
    genre: { type: Array },
    isActive: { type: Boolean }
});

// creating the model
const MovieModel = mongoose.model("Chand", movieSchema);

const createDoc = async () => {
    try {
        //creating new document
        const m1 = new MovieModel({
            name: "bahubali",
            ratings: 5,
            genre: ["action"],
            isActive: false
        });

        const m2 = new MovieModel({
            name: "bahubali 2",
            ratings: 5,
            genre: ["action", "adventure"],
            isActive: false
        });

        // saving the doucment
        const result = await MovieModel.insertMany([m1, m2])
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export { createDoc }