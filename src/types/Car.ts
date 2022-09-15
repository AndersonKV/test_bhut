/* eslint-disable prettier/prettier */
export interface DataCar {
    _id: string;
    title: string;
    brand: string;
    price: number;
    age: number;
}

export interface CarDTO {
    _id?: string;
    title: string;
    brand: string;
    price: string;
    age: string;
}
export interface DataErrorCar {
    title: string;
    brand: string;
    price: string;
    age: string;
}
