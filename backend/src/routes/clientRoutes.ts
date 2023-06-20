import Express from "express";
import { createClient,updateclientFunction,getClients,getClientbyId,deleteClient} from "../controller/clientController";


const clientRouter = Express.Router();
clientRouter.post("/create", createClient);
clientRouter.put("/update/:id",updateclientFunction);
clientRouter.get("/getall",getClients);
clientRouter.get("/get/:id",getClientbyId);
clientRouter.delete("/delete/:id",deleteClient);

export default clientRouter;