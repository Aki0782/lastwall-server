import mongoose from "mongoose";

const { Schema } = mongoose;

const userListSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

export const userList = mongoose.model("UserList", userListSchema);
