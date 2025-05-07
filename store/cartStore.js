import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Helper function to calculate total
const calculateTotal = (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const useCartStore = create(
    persist(
        (set, get) => ({
            // State
            cart: [],
            cartTotal: 0,

            // Actions
            addToCart: (item) => {
                const cart = get().cart;
                const existingItem = cart.find(cartItem => cartItem.id === item.id);

                if (existingItem) {
                    const updatedCart = cart.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );

                    set({
                        cart: updatedCart,
                        cartTotal: calculateTotal(updatedCart)
                    });
                } else {
                    const updatedCart = [...cart, { ...item, quantity: 1 }];

                    set({
                        cart: updatedCart,
                        cartTotal: calculateTotal(updatedCart)
                    });
                }
            },

            removeFromCart: (itemId) => {
                const cart = get().cart;
                const updatedCart = cart.filter(item => item.id !== itemId);

                set({
                    cart: updatedCart,
                    cartTotal: calculateTotal(updatedCart)
                });
            },

            updateQuantity: (itemId, quantity) => {
                if (quantity < 1) return;

                const cart = get().cart;
                const updatedCart = cart.map(item =>
                    item.id === itemId ? { ...item, quantity } : item
                );

                set({
                    cart: updatedCart,
                    cartTotal: calculateTotal(updatedCart)
                });
            },

            clearCart: () => {
                set({ cart: [], cartTotal: 0 });
            }
        }),
        {
            name: 'food-cart', // name of the item in local storage
        }
    )
);