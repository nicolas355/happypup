import randomId from "../utils/RandomUUID";
import { Blog } from "../interface/blog";

const blog:Blog[] = [
  {
    id: randomId,
    img: "https://res.cloudinary.com/dy7qlqell/image/upload/v1727195152/blog_1_zzz0sz.png",
    title: "Easy Tricks to Teach Your Dog",
    dia: "Saturday",
    fecha: "October 19, 2019",
    nombre: "Mr Sandman",
    comentarios: 0,
    descripcion: `Besides, you are welcome to evaluate a great choice of birthday cakes, delicious treats, charming toys, carriers of all types, gifts for pet lovers and their little friends, and even more goods and brilliant ideas to make your pets happy.
Let us be your assistants in making a nice present for your beloved pet.
Your little friend is worth some original and creative gifts which you will find among a big variety of our products.
A charming animal world is already waiting for you!`,
    tags: ["Clothing", "Feeding", "Fish", "Saddlebags"]
  },
  {
    id: randomId,
    img: "https://res.cloudinary.com/dy7qlqell/image/upload/v1727195152/blog_2_rsfwup.png",
    title: "Deciphering Your Cat’s Language",
    dia: "Saturday",
    fecha: "October 19, 2019",
    nombre: "Mr Robot",
    comentarios: 2,
    descripcion: `They may be small and fearful or big and brave, obedient or self-willed, they may differ in color and shape, but all they have is love in their hearts which we can easily discover just looking into their eyes.
    
Let us be your assistants in making a nice present for your beloved pet. Your little friend is worth some original and creative gifts which you will find among a big variety of our products. A charming animal world is already waiting for you!`,
    tags: ["Birds", "Cats", "Dogs"]
  },
  {
    id: randomId,
    img: "https://res.cloudinary.com/dy7qlqell/image/upload/v1727195152/blog_3_xcpspv.png",
    title: "Bark Collars: Do They Work?",
    dia: "Saturday",
    fecha: "October 19, 2019",
    nombre: "Mr Michel",
    comentarios: 0,
    descripcion: `We tried to foresee your wishes and are ready to offer you a wide range of various pets clothes and accessories which are of premium quality and are in line with today's pets fashion and design. Besides, you are welcome to evaluate a great choice of birthday cakes, delicious treats, charming toys, carriers of all types, gifts for pet lovers and their little friends, and even more goods and brilliant ideas to make your pets happy.`,
    tags: ["Cat Supplies", "Dog Supplies", "Universal Pet Supplies"]
  }
];


const tags=[
  {tag:['birds,Cat,Supplies,Cats,Clothing,Dog,Supplies,Dogs,Feeding,fish,Saddlebags,Universal,Pet Supplies']}
]

export  {blog,tags};