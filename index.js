const mongoose = require("mongoose");
const initData  = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL= "mongodb://127.0.0.1:27017/wanderlust"

main() // calling main function
  .then(() => {
    console.log("connected to db");
})
  .catch((err) => {
    console.log(err);
 });

async function main() { // for database
    await mongoose.connect(MONGO_URL);
} 

const initDB = async () => { //initialising DB
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
};

initDB();