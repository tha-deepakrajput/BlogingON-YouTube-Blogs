const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL);
        console.log("MongoDb Connected");
    }
    catch (err) {
        console.error("MongoDb connection error : ", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;