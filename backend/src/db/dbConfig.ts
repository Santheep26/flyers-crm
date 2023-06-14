import mongoose from "mongoose";

const mongooConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI as string);
    console.log(
      "Database Connected Successfully"
      // connect.connection.host,
      // connect.connection.name
    );
  } catch (err) {
    console.log("Error Message is: ", err);
    process.exit(1);
  }
};

export default mongooConnect;