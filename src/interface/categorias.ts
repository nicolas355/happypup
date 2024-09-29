export interface Category{
    id:string,
    nombre:string
}

export interface Information extends Category {}


export interface MyAccount extends Category {}

export interface CategoryAnimals{
    id:string,
    nombre:string,
    img:string
}