export interface ICar {
    _id: string;
    title: string;
    brand: string;
    price: number;
    age: number;
}

export interface ValidateCarDTO {
    _id?: string;
    title: string;
    brand: string;
    price: string;
    age: string;
}
export interface PostError {
    title: string;
    brand: string;
    price: string;
    age: string;
}
