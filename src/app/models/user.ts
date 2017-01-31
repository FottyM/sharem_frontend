export interface User {

  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  id_code: string;
  phone: string;
  status: number;
  date_of_birth: any;
  address: {
    street: string,
    city: string,
    postal:string,
    country: string;
  }
  password: string;

}
