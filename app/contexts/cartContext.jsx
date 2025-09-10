"use client";
import { useEffect, useState, createContext, useContext } from "react";
import supabase from "../lib/subabase-client";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [products, setProducts] = useState([]); // fetched from DB
    const [cart, setCart] = useState([]);

    // Fetch products from Supabase on mount
    useEffect(() => {
        const fetchProducts = async () => {
            let { data, error } = await supabase.from("products").select("*");
            if (error) {
                console.error("Error fetching products:", error);
            } else {
                console.log("Fetched products:", data);
                setProducts(data);
            }
        };

        fetchProducts();
    }, []);

    // Load cart from localStorage
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Sync cart to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Cart logic
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

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                products, // fetched products from DB
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    console.log(context);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
