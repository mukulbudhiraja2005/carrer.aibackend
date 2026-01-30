const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // 5 sec wait
      socketTimeoutMS: 45000,
      maxPoolSize: 10,
    });

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MongoDB Connection Failed ❌");
    console.error(error.message);

    // 🔁 Retry instead of killing server immediately
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
