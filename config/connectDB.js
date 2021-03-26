//require mongoose
const mongoose = require("mongoose");

//connection to database
const connectDB = (async) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(`connection database failed !${erro}`);
  }
};

module.exports = connectDB;
