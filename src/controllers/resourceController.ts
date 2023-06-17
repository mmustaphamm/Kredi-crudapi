import { Request, Response } from "express";
import { UserService } from "../services/resourceService";
import axios from "axios"

export class UserController {

//    static async getUsers(req: Request, res: Response) {
//     try {
//     //   const response = await axios.get("https://jsonplaceholder.typicode.com/todos'")
//     //   const data = response.data;
//     //   console.log('data')
//       const users = await UserService.getUsers()
//       res.json(users);
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }

//   static async getOneUser(req: Request, res: Response) {
//      const { id } = req.params;
    
//     try {
      
//       const user = await UserService.getUser(Number(id))
//       if (!user) {
//         res.status(404).json({ error: "User not found" });
//       } else {
//         res.json({user});
//       }
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }

//   static async createUser(req: Request, res: Response) {
//     const { api,
//         description,
//         auth,
//         https,
//         cors,
//         link,
//         category } = req.body;

//     try {
    
//     const user =  await UserService.createUser({api, description,auth, https, cors, link, category});
//     if (!user){
//        return res.status(400).json({message: 'There was an error creating a user'})
//     }
//     console.log(user)
//      return res.status(201).json({message: "user created"});
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }

//   static async updateUser(req: Request, res: Response) {
//     const { id } = req.params;
//     const { api, description,auth, https, cors, link, category } = req.body;
//     // if (!name || !email) {
//     //   res.status(400).json({ error: "Name and email are required" });
//     //   return;
//     // }

//     try {
//       const user = await UserService.updateUser(Number(id), api, description,auth, https, cors, link, category);
//       if (!user) {
//         res.status(404).json({ error: "User not found" });
//       } else {
//         res.json(user);
//       }
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }

//   static async deleteUser(req: Request, res: Response) {
//     const { id } = req.params;
//     try {
        
//       await UserService.deleteUser(Number(id))
//       res.status(204).send();
//     } catch (error) {
//       res.status(500).json({ error });
//     }
//   }

  static async getExternalData(req: Request, res: Response) {
    try {
      const response = await axios.get("https://api.publicapis.org/entries");
      const data = response.data;
      console.log('good')
      res.json(data.entries);

    } catch (error) {
      res.status(500).json({ error: "External API request failed" });
    }
  }

//   static async deleteUser(req: Request, res: Response) {
//     const id = req.params.id;
   
//     try {
//     const userRepository = AppDataSource.getRepository(Resource);
//     const user = await userRepository.findOne({where:{id}});
//       if (!user) {
//         res.status(404).json({ error: "User not found" });
//       } else {
//         await userRepository.remove(user);
//         res.status(204).json({message: 'user deleted'});
//       }
//     } catch (error) {
//       res.status(500).json({ error: "Internal server error" });
//     }
//   }
}