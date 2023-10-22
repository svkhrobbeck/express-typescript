import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const result = await connect(process.env.MONGO_URI as string);
    console.log(result.connection.host);
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
