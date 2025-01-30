import { Request, Response } from "express";
import { Event } from "../models/eventModel";
import { Error as MongooseError } from "mongoose";
const { ValidationError } = MongooseError;

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json({message: error.message});
    } else {
      res.status(500).json({message: "Something went wrong"});
    }
  }  
};

export const addEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error: unknown) {
    if (error instanceof ValidationError){
      res.status(400).json({message: error.message});
    } else {
      res.status(500).json({message: "Something went wrong"});
    }
  }  
};
export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json({message: error.message});
    } else {
      res.status(500).json({message: "Something went wrong"});
    }
  }  
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(event);
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json({message: error.message});
    } else {
      res.status(500).json({message: "Something went wrong"});
    }
  }  
};
export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json(event);
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json({message: error.message});
    } else {
      res.status(500).json({message: "Something went wrong"});
    }
  }  
};