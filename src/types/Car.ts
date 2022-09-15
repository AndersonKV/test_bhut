export interface ICar {
    _id: string;
    title: string;
    brand: string;
    price: number;
    age: number;
    __v: number;
}

export interface CreatedPostDTO {
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
