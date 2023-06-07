import { userList } from "../model/userModel.js";

export const searchuser = async (req, res) => {
  const { name } = req.query;

  console.log(name);
  const result = await userList.find({ name: new RegExp(name, "i") });

  res.json(result);
};
