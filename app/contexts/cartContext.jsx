"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

    const items = [
        {
            id: 1,
            name: "All Natural Italian-Style Chicken Meatballs",
            description: "Juicy and flavorful chicken meatballs made with all-natural ingredients.",
            price: 7.25,
            image: "/assets/item_1.svg", // replace with your image path
            count: 2 
        },
        {
            id: 2,
            name: "Coca-Cola – 2 L Bottle",
            description: "Refreshing cola beverage in a 2-liter bottle.",
            price: 3.85,
            image: "/assets/item_2.svg",
            count: 3
        },
        {
            id: 3,
            name: "Fairlife Lactose-Free 2% Milk",
            description: "Creamy and delicious lactose-free milk.",
            price: 3.69,
            image: "/assets/item_3.svg",
            count: 1
        },
    ];

    const [cart, setCart] = useState(items);

    const addToCart = (item) => {
        setCart((prev) => {
            const exists = prev.find((p) => p.id === item.id);
            if (exists) {
                return prev.map((p) =>
                    p.id === item.id ? { ...p, count: p.count + 1 } : p
                );
            }
            return [...prev, { ...item, count: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((p) => p.id !== id));
    };

    const updateQuantity = (id, amount) => {
        setCart((prev) =>
            prev.map((p) =>
                p.id === id ? { ...p, count: Math.max(1, p.count + amount) } : p
            )
        );
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
