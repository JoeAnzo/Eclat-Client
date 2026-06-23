import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '../Interfaces/product.interface'

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (item: Product, quantity?: number) => void
  removeFromCart: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const parsePrice = (price: string) => {
  const numericString = price.replace(/[^0-9.-]+/g, '')
  return Number(numericString) || 0
}

export const useCartState = create<CartState>()(
    persist(
        (set,get) => ({
            cart:[],

            addToCart: (item, quantity = 1) => {
                const currentCart = get().cart;
                const existingItem = currentCart.find((i) => i.id === item.id);
                if (existingItem) {
                    set({
                        cart: currentCart.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
                        )
                    })
                } else {
                    set({
                        cart: [...currentCart, { ...item, quantity }]
                    })
                }
            },
            removeFromCart: (id) => set({ cart: get().cart.filter((item) => item.id !== id) }),
            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeFromCart(id);
                    return
                }
                set({
                    cart: get().cart.map((item) =>
                        item.id === id ? { ...item, quantity } : item
                    )
                });
            },
            clearCart: () => set({ cart: [] }),
            getTotalPrice: () => get().cart.reduce((total, item) => total + parsePrice(item.price) * item.quantity, 0),
            getTotalItems: () => get().cart.reduce((total, item) => total + item.quantity, 0)
            
        })
        ,{
            name:'shopping-cart-storage',
        }
    )
)