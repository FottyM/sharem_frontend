export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
  user_id: number;
  // updated_at:{
  //   date: any,
  //   timezone_type: number,
  //   timezone: string
  // }
  images:Array<string>;
}
