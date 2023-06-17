import { DeepPartial, getRepository } from "typeorm";
import { Resource } from "../entity/Resource";
import { ResourceAttributes } from "../interface/resourceInterface";
import { AppDataSource } from "../data-source";

export class UserService {

    
  static async getUsers() {
    const userRepository = AppDataSource.getRepository(Resource);
    const users = await userRepository.find({});
    return users;
  }

  static async getUser(id: number) {
    const userRepository = AppDataSource.getRepository(Resource);
    const user = await userRepository.find({where:{id}})
    if (user){
        return user;
    } else {
        return "User does not exist"
    }
  }

  static async createUser(info) {
    const userRepository = AppDataSource.getRepository(Resource);
    const user = userRepository.create(info);
    await userRepository.save(user);
    return user;
  }

  
    static async updateUser(id: number, api:string, description:string ,auth:string, https:boolean, cors:string, link:string, category :string) {
      const userRepository = AppDataSource.getRepository(Resource);
      const user = await userRepository.find({where:{id}});
      if (!user) {
        return null;
      }
      await userRepository.update({id}, {api, description,auth, https, cors, link, category})
      return user;
    }

  static async deleteUser(id: number) {
    const userRepository = AppDataSource.getRepository(Resource);
    const user = await userRepository.find({where:{id}});
    if (user) {
     return await userRepository.remove(user);
    } 
  }
}
