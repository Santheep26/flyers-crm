import asyncHandler from "express-async-handler";
import {Request, Response, NextFunction} from 'express'
import clientModel from "../models/clientModels";

async function createClientFunction (req : Request, res : Response, next : NextFunction) : Promise<void> {
    try{
        console.log("The request Body is: ", req.body);
       // const client = req.body;
        const client = await clientModel.create({
            companyName : req.body.companyName,
            contactPersonFirstName : req.body.contactPersonFirstName,
            contactPersonMiddleName : req.body.contactPersonMiddleName,
            contactPersonLastName : req.body.contactPersonLastName,
            contactPersonDesignation : req.body.contactPersonDesignation,
            primaryContactNumber : req.body.primaryContactNumber,
            secondaryContactNumber : req.body.secondaryContactNumber,
            contactPersonEmailId : req.body.contactPersonEmailId,
            companyEmailId : req.body.companyEmailId,
            country : req.body.country ,
            state : req.body.state,
            timeZone : req.body.timeZone,
            companyDomain : req.body.companyDomain,
            companyUrl : req.body.companyUrl
        });
        console.log("client details are: ", client);
        res.status(201).json(client);
    }
    catch (error) {
        console.error(error);
        next(error);
      }
    
    }

const createClient = asyncHandler( createClientFunction);

async function updateclientFunction ( req : Request, res : Response) : Promise<void> {
    const getClientById = await clientModel.findById(req.params.id);
    if (!getClientById) {
      res.status(404);
      throw new Error("Client not found");
    }
   
    console.log("Fectched task detail is: ", getClientById);
    const updatedclient = await clientModel.findByIdAndUpdate( 
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    console.log("updated client details are: " , updatedclient)
    res.status(200).json(updatedclient);
  };

  async function  getClients (req : Request, res : Response) : Promise<void>  {
    const getAllClients = await clientModel.find({  });
    if (!getAllClients) {
      res.status(404);
      throw new Error("Clients not found");
    }
    console.log("Fectched clients details are: ", getAllClients);
    res.status(200).json(getAllClients);
  };
  async function getClientbyId(req: Request, res : Response) : Promise<void> {
    const getclient = await clientModel.findById(req.params.id);
    if(!getclient){
        res.status(404);
        throw new Error (" client not found");
    }
    console.log("Fetched client detail is: ", getclient);
    res.status(200).json(getclient);
  }
  async function deleteClient (req : Request, res : Response) : Promise<void>  {
    const getClientById = await clientModel.findById(req.params.id);
    if (!getClientById) {
      res.status(404);
      throw new Error("Client not found");
    }
    console.log("Fectched client detail is: ", getClientById);
    const deletedTask = await clientModel.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "Client deleted successfully",
    });
  };
export{createClient,updateclientFunction,getClients,deleteClient,getClientbyId};