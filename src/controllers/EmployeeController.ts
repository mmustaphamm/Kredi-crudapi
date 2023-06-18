import { Request, Response } from "express";
import { UserService } from "../services/EmployeeServices";

export class UserController {

   static async getEmployees(req: Request, res: Response) {
    try {
      const users = await UserService.getEmployees()
      res.json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async getEmployee(req: Request, res: Response) {
     const { id } = req.params;
    
    try {
      
      const user = await UserService.getEmployee(Number(id))
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({user});
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async createEmployee(req: Request, res: Response) {
    const { firstName,
        lastName,
        email,
        webStack,
         } = req.body;

    try {
    
    const user =  await UserService.createEmployee({firstName, lastName, email, webStack});
    if (!user){
       return res.status(400).json({message: 'There was an error creating a user'})
    }
    console.log(user)
     return res.status(201).json({user});
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { last_name, first_name, email, web_stack } = req.body;
    if (!email) {
      res.status(400).json({ error: "email is required" });
      return;
    }

    try {
      const user = await UserService.updateEmployee(Number(id), first_name, last_name, email, web_stack);
      if (!user) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    try {
        
      await UserService.deleteEmployee(Number(id))
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
