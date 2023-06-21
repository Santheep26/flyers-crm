"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const clientController_1 = require("../controller/clientController");
const clientRouter = express_1.default.Router();
clientRouter.post("/create", clientController_1.createClient);
clientRouter.put("/update/:id", clientController_1.updateclientFunction);
clientRouter.get("/getall", clientController_1.getClients);
clientRouter.get("/get/:id", clientController_1.getClientbyId);
clientRouter.delete("/delete/:id", clientController_1.deleteClient);
exports.default = clientRouter;
