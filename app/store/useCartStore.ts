import {create} from 'zustand'
import {persist} from 'zustand/middleware'
import { CartState,Product,CartItem } from '../Interfaces/product.interface'

export const useCartStore = create<CartState>()(
    persist(
        (set,get) => ({
            cart:[],
            totalItems:0,
            totalPrice:0,

            addToCart: (product:Product) => {
                const currentCart = get().cart
                const existingItem = currentCart.find((item) => item.id === product.id);
                let updatedCart:CartItem[];

                if (existingItem){
                    updatedCart = currentCart.map((item) => {
                        return item.id === product.id ? {...item, quantity:item.quantity + 1} : item
                    })
                } else {
                    updatedCart = [...currentCart,{...product,quantity: 1}];
                }
                set({
                    cart: updatedCart,
                    totalItems:get().totalItems + 1,
                    totalPrice:get().totalPrice + product.price
                });
            },

            removeFromCart: (productId:string) => {
                const currentCart = get().cart;
                const itemToRemove = currentCart.find((item) => item.id === productId);

                if (!itemToRemove) return;

                const updatedCart = currentCart.filter((item) => item.id !== productId)

                set({
                    cart:updatedCart,
                    totalItems:get().totalItems - itemToRemove.quantity,
                    totalPrice:get().totalPrice - (itemToRemove.price * itemToRemove.quantity)
                })
            },
            updateQuantity:(productId:string,quantity:number) => {

                if (quantity <= 0) {
                    get().removeFromCart(productId)
                    return;
                }

                const currentCart = get().cart;
                const updatedCart = currentCart.map((item) => item.id === productId ? {...item, quantity} : item)

                const totalItems = updatedCart.reduce((acc,item) => acc + item.quantity, 0);
                const totalPrice = updatedCart.reduce((acc,item) => acc + item.price * item.quantity, 0);

                set({cart: updatedCart, totalItems, totalPrice})
            },

            clearCart:() => set({cart:[],totalItems:0,totalPrice:0})
        }),
        {
            name:'shopping-cart-storage'
        }
    )
)