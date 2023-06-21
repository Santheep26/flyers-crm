"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __importDefault(require("../constants"));
const errorHandler = (err, req, res, next) => {
    console.log("err.code", err);
    if (err.code == 11000) {
        res.json({
            message: err.message,
        });
    }
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants_1.default.NOT_FOUND:
            res.json({
                title: "Not Found",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
        case constants_1.default.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.message,
                stackTrace: err.stack,
            });
        case constants_1.default.FORBIDDEN:
            res.json({
                title: " Forbidden",
                message: err.message,
                stackTrace: err.stack,
            });
        case constants_1.default.UNAUTHORIZED:
            res.json({
                title: "UnAuthorized",
                message: err.message,
                stackTrace: err.stack,
            });
        default:
            res.json({
                title: "Server Error",
                message: err.message,
                stackTrace: err.stack,
            });
            break;
    }
};
exports.default = errorHandler;
