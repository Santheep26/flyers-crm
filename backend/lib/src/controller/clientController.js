"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClientbyId = exports.deleteClient = exports.getClients = exports.updateclientFunction = exports.createClient = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const clientModels_1 = __importDefault(require("../models/clientModels"));
function createClientFunction(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("The request Body is: ", req.body);
            // const client = req.body;
            const client = yield clientModels_1.default.create({
                companyName: req.body.companyName,
                contactPersonFirstName: req.body.contactPersonFirstName,
                contactPersonMiddleName: req.body.contactPersonMiddleName,
                contactPersonLastName: req.body.contactPersonLastName,
                contactPersonDesignation: req.body.contactPersonDesignation,
                primaryContactNumber: req.body.primaryContactNumber,
                secondaryContactNumber: req.body.secondaryContactNumber,
                contactPersonEmailId: req.body.contactPersonEmailId,
                companyEmailId: req.body.companyEmailId,
                country: req.body.country,
                state: req.body.state,
                timeZone: req.body.timeZone,
                companyDomain: req.body.companyDomain,
                companyUrl: req.body.companyUrl
            });
            console.log("client details are: ", client);
            res.status(201).json(client);
        }
        catch (error) {
            console.error(error);
            next(error);
        }
    });
}
const createClient = (0, express_async_handler_1.default)(createClientFunction);
exports.createClient = createClient;
function updateclientFunction(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getClientById = yield clientModels_1.default.findById(req.params.id);
        if (!getClientById) {
            res.status(404);
            throw new Error("Client not found");
        }
        console.log("Fectched task detail is: ", getClientById);
        const updatedclient = yield clientModels_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        console.log("updated client details are: ", updatedclient);
        res.status(200).json(updatedclient);
    });
}
exports.updateclientFunction = updateclientFunction;
;
function getClients(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getAllClients = yield clientModels_1.default.find({});
        if (!getAllClients) {
            res.status(404);
            throw new Error("Clients not found");
        }
        console.log("Fectched clients details are: ", getAllClients);
        res.status(200).json(getAllClients);
    });
}
exports.getClients = getClients;
;
function getClientbyId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getclient = yield clientModels_1.default.findById(req.params.id);
        if (!getclient) {
            res.status(404);
            throw new Error(" client not found");
        }
        console.log("Fetched client detail is: ", getclient);
        res.status(200).json(getclient);
    });
}
exports.getClientbyId = getClientbyId;
function deleteClient(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const getClientById = yield clientModels_1.default.findById(req.params.id);
        if (!getClientById) {
            res.status(404);
            throw new Error("Client not found");
        }
        console.log("Fectched client detail is: ", getClientById);
        const deletedTask = yield clientModels_1.default.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: "Client deleted successfully",
        });
    });
}
exports.deleteClient = deleteClient;
;
