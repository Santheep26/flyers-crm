import mongoose from "mongoose";

const mongooConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    console.log(
      "Database Connected Successfully"
    );
  } catch (err) {
    console.log("Error Message is: ", err);
    process.exit(1);
  }
};

export default mongooConnect;