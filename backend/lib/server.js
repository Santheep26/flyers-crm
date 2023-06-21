"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const dbConfig_1 = __importDefault(require("./src/db/dbConfig"));
const clientRoutes_1 = __importDefault(require("./src/routes/clientRoutes"));
const errorHandler_1 = __importDefault(require("./src/middleware/errorHandler"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/client", clientRoutes_1.default);
const port = 5000;
app.listen(port, () => {
    console.log("Server running on port: ", port);
});
app.use(errorHandler_1.default);
(0, dbConfig_1.default)();
