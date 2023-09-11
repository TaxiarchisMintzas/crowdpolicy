import { Request, Response } from "express";
import User from "../models/User"

export async function createUserController(req: Request, res: Response) {
    console.log(req.body)
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        number: req.body.number,
        email: req.body.email,
    });

    const createNewUser = await newUser.save();
    console.log(createNewUser);
    res.json(createNewUser);
}