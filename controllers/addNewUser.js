import { userList } from "../model/userModel.js";

export const addNewUser = async (req, res) => {
  try {
    const payload = req.body;

    console.log(payload);
    const response = await userList.insertMany([payload]);

    res.json(response);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};
