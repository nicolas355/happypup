import { Category, CategoryAnimals } from "../interface/categorias";
import randomId from "../utils/RandomUUID";

const categorias: Category[] = [
  { id: randomId, nombre: "Accessories" },
  { id: randomId, nombre: "Care" },
  { id: randomId, nombre: "Clothing" },
  { id: randomId, nombre: "Decor" },
  { id: randomId, nombre: "Food" },
  { id: randomId, nombre: "Grooming Supplies" },
  { id: randomId, nombre: "Others" },
  { id: randomId, nombre: "Uncategorized" }
];

const information=[
  { id: randomId, nombre: "About Us" },
  { id: randomId, nombre: "Collections" },
  { id: randomId, nombre: "Contact Us" },
  { id: randomId, nombre: "Catalog" },
  { id: randomId, nombre: "Password page" },
  { id: randomId, nombre: "Privacy Policy" },
  { id: randomId, nombre: "Blog" },

];

const myAccount=[
  { id: randomId, nombre: "My Account" },
  { id: randomId, nombre: "Log in" },
  { id: randomId, nombre: "My Addresses" },
  { id: randomId, nombre: "My Orders" },
  { id: randomId, nombre: "Password page" },
  { id: randomId, nombre: "Contact Us" },
  { id: randomId, nombre: "Latest News" },

];



const categoriasAnimals: CategoryAnimals[] = [
  { id: randomId, nombre: "Dogs",img:'https://res.cloudinary.com/dy7qlqell/image/upload/v1727022224/dog_ox6xgf.png' },
  { id: randomId, nombre: "Cats",img:'https://res.cloudinary.com/dy7qlqell/image/upload/v1727022224/cat_xvh5pz.png' },
  { id: randomId, nombre: "Birds",img:'https://res.cloudinary.com/dy7qlqell/image/upload/v1727022248/birds_lir901.png' },
  { id: randomId, nombre: "Fish",img:'https://res.cloudinary.com/dy7qlqell/image/upload/v1727022224/fish_urmrqa.png' },
  { id: randomId, nombre: "Small Pets",img:'https://res.cloudinary.com/dy7qlqell/image/upload/v1727022224/small_pets_tsg1yu.png' },
  { id: randomId, nombre: "Reptiles",img:'https://res.cloudinary.com/dy7qlqell/image/upload/v1727022224/reptiles_bwg79y.png' },
 
];



export { categorias, categoriasAnimals,information,myAccount };