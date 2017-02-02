import {Product} from "../models/product";
export const backendUrl = 'https://test.sharem.eu/api';
export const products = [

  {
    id: 1,
    name: 'Sony MDR 1000x',
    price: 20,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    images: ['https://i.imgsafe.org/2fdf28d611.jpg','https://pixabay.com/en/headphone-headset-music-audio-159569/'],
    user_id: 2
  }
  ,{
    id: 2,
    name: 'Batman Suite',
    price: 30,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_1280.png", "https://pixabay.com/en/cosplay-anime-manga-panel-1676464/"],
    user_id: 2
  },
  {
    id: 3,
    name: 'Camera',
    price: 40,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["https://pixabay.com/en/camera-photo-camera-sony-alpha-7-275007/","https://pixabay.com/en/man-camera-photographer-sony-hobby-1283513/"],
    user_id: 1
  },
  {
    id: 4,
    name: "Hiking Backpack",
    price: 25,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["https://pixabay.com/en/hiking-map-orientation-hiking-shoes-1312226/","https://pixabay.com/en/wanderer-backpack-hike-away-path-455338/"],
    user_id: 1
  },
  {
    id: 4,
    name: "Hiking Backpack",
    price: 25.5,
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    images: ["http://lorempixel.com/400/400","https://pixabay.com/en/camera-helmet-cameras-go-pro-415142/"],
    user_id: 4
  }];
