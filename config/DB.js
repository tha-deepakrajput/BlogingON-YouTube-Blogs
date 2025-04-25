const mongoose = require("mongoose");

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Connected");
    }
    catch (err) {
        console.error("MongoDb connection error : ", err.message);
        process.exit(1);
    }
}

module.exports = ConnectDB;


