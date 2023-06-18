export interface ResourceAttributes {
    Api:string;
    Description:string;
    Auth:string;
    HTTPS:boolean;
    Cors:string;
    Link:string;
    Category:string;
}

export interface EmployeeData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    webStack: string;
  };

  export interface CreateEmployee {
    firstName: string;
    lastName: string;
    email: string;
    webStack: string;
  };