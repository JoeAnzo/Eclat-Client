export interface Product {
    id?: string;
    name: string;
    slug?:string;
    gender:string;
    description?: string;
    isAvailable?:boolean;
    inventory?:number;
    scentFamily?:string;
    thumbnailUrl: string;
    price: string;
}

