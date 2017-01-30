export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
  updated_at:{
    date: any,
    timezone_type: number,
    timezone: string
  }
  images:Array<string>;
}
