const mongoose = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://laraibb:laraib@cluster0.rxlypdw.mongodb.net/Laraib-Vehicles', {
        useNewUrlParser: true,         // Corrected typo in option name
        useUnifiedTopology: true      // Corrected typo in option name
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
        console.log("Mongo DB connection successful");
    });
    
    connection.on("error", () => {
        console.log("Mongo DB Connection Error");
    });
}

connectDB();

module.exports = mongoose
