import constants from "../constants";
import {Request, Response, NextFunction, } from 'express'
const errorHandler = (err : any, req : Request, res : Response, next: NextFunction) => {
    console.log("err.code", err) 
    if(err.code==11000) {
      res.json({
              message: err.message,
            });
    }
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: " Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.UNAUTHORIZED:
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
export default errorHandler;
