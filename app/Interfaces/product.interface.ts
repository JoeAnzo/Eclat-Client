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
    price: number;
}

export interface CartItem extends Product {
    quantity:number;
}

export interface CartState {
    cart:CartItem[];
    totalItems:number;
    totalPrice:number;
    addToCart: (product:Product) => void;
    removeFromCart:(productId:string) => void;
    updateQuantity:(productId:string,quantity:number) => void;
    clearCart:() => void;
}
