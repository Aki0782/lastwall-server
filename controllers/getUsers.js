import { userList } from "../model/userModel.js";

export const getUsers = async (_req, res) => {
  const data = await userList.find();

  res.json(data);
};
