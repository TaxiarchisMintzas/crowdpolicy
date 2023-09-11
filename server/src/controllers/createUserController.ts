import { Request, Response } from "express";
import User from "../models/User"

export async function createUserController(req: Request, res: Response) {
    
    const existingUser = User.findOne({email: req.body.user.email})
    if (existingUser) {
        console.log(existingUser)
        res.redirect('/failed')
    }
    else{    
        console.log(req.body)
        const newUser = new User({
            firstName: req.body.user.firstName,
            lastName: req.body.user.lastName,
            number: req.body.user.number,
            email: req.body.user.email,
            date: req.body.user.date
        });

        const createNewUser = await newUser.save();
        res.redirect('/success')

        res.json(createNewUser);
    }
}