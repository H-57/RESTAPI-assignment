import { Router } from "express";
import {getUsers,setUsers,updateUsers,deleteUsers} from '../controllers/User';
const routes=Router();

routes.get("/",getUsers)
.post("/",setUsers)
.put("/:id",updateUsers)
.delete("/:id",deleteUsers)



export default routes