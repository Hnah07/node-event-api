import { Request, Response } from "express";
import { Event } from "../models/EventModel";
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
    const { name, date, location, description, isFree } = req.body;
    const event = await Event.create({ name, date, location, description, isFree });
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
    const { id } = req.params;
    const event = await Event.findById(id);
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
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body, {
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
    const { id } = req.params;
    const event = await Event.findByIdAndDelete(id);
    res.status(200).json(event);
  } catch (error: unknown) {
    if (error instanceof Error){
      res.status(500).json({message: error.message});
    } else {
      res.status(500).json({message: "Something went wrong"});
    }
  }  
};