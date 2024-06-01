import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ryowu0329:fURnps2UujaW4dr2@mern.v8k6yif.mongodb.net/mern-auth?retryWrites=true&w=majority"
    )
    .then(() => console.log("DB Connected"));
};
