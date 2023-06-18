import { Employee } from "../entity/Employee";
import { CreateEmployee, EmployeeData } from "../interface/resourceInterface";
import { AppDataSource } from "../data-source";


export class UserService {

    
  static async getEmployees() {
    const userRepository = AppDataSource.getRepository(Employee);
    const employees = await userRepository.find({});
    if (!employees) throw Error('users not found');
    return employees;
  }

  static async getEmployee(id: number): Promise <EmployeeData[]> {
    const userRepository = AppDataSource.getRepository(Employee);
    const user = await userRepository.find({where:{id}})
    if (!user) { 
      throw new Error('user not found')
    } else {
        return user
    }
  }

  static async createEmployee(info:CreateEmployee) {

    const userRepository = AppDataSource.getRepository(Employee);
    const user = userRepository.create(info)
    if(!user) throw new Error("Try again, user not created");
    await userRepository.save(user);
    return user;
  }
  
    static async updateEmployee(id: number, firstName:string, lastName:string, email:string, webStack:string) {
      const userRepository = AppDataSource.getRepository(Employee);
      const user = await userRepository.find({where:{id}});
      if (!user) {
        return null;
      }
      await userRepository.update({id}, { firstName, lastName, email, webStack})
      return user;
    }

  static async deleteEmployee(id: number) {
    const userRepository = AppDataSource.getRepository(Employee);
    const user = await userRepository.find({where:{id}});
    if (user) {
     return await userRepository.remove(user);
    } 
  }
}
