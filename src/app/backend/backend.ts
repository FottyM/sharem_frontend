import {Product} from "../models/product";
export const backendUrl = 'https://test.sharem.eu/api';
export const PRODUCTS: Product[] = [

  {
    id: 1,
    name: 'Sony MDR 1000x',
    price: 20,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    images: ['https://i.imgsafe.org/2fdf28d611.jpg','http://imgur.com/BsVJlNO'],
    user_id: 2
  }
  ,{
    id: 2,
    name: 'Batman Suite',
    price: 30,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["http://i.imgur.com/abjJ7h4.jpg", "http://i.imgur.com/abjJ7h4.jpg"],
    user_id: 2
  },
  {
    id: 3,
    name: 'Camera',
    price: 40,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["https://image.ibb.co/cojadv/man_1283513_1280.jpg","https://ibb.co/nhsiWF"],
    user_id: 1
  },
  {
    id: 4,
    name: "Hiking Backpack",
    price: 25,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["https://i.imgsafe.org/493115000b.jpg","https://i.imgsafe.org/493115000b.jpg"],
    user_id: 1
  },
  {
    id: 4,
    name: "Hiking Backpack",
    price: 25.5,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["https://i.imgsafe.org/493115000b.jpg","https://pixabay.com/en/camera-helmet-cameras-go-pro-415142/"],
    user_id: 4
  }];
