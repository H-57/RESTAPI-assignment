import { Response, Request } from "express";
import User from "../models/User";
import { UserData } from "../types/UserData";
import isEmail from "validator/lib/isEmail";


// for get all users
export async function getUsers(req: Request, res: Response) {
  try {
    const Users = await User.find().select("-password");
    res.send({ data: Users, success: true });
  } catch (error) {
    res.status(500).send({ data: "something went wrong", success: false });
  }
}
// for add new user
export async function setUsers(req: Request, res: Response) {

  const { name, email, age, country, password }: UserData = req.body;
  try {
    if (!name || !email || !age || !country || !password) {
      return res
        .status(400)
        .send({ data: "all fields are required", success: false });
    }
    const validEmail = isEmail(email);
    if (validEmail) {
      const UserExist = await User.findOne({ email }).select("-password");
      if (UserExist) {
        res.send({ message: "user allready exists", success: true });
      } else {
      
        // create new user
        const newUser = await User.create({name,email,age,country,password,});
        res.status(201).json({ data: newUser, success: true });
      }
    } else {
      return res.status(400).send({ data: "invalid email", success: false });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({ data: "something went wrong", success: false });
  }
}

// for update user
export async function updateUsers(req: Request, res: Response) {
  const id: string = req.params.id;
  const data = req.body;
  try {
    
      const result=await User.findByIdAndUpdate(id,data).select("-password")
      res.status(204).json({ data: result, success: true });
  } catch (error) {
    res.status(500).send({ data: "something went wrong", success: false });
  }

}
// for delete user
export async function deleteUsers(req: Request, res: Response) {
  const id: string = req.params.id;
  try {
    
    const result=await User.findByIdAndDelete(id).select("-password")
    res.status(204).json({ data: result, success: true });
} catch (error) {
  res.status(500).send({ data: "something went wrong", success: false });
}
}
