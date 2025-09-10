import Image from "next/image";
import { useCart } from "../../contexts/cartContext";

export default function CartSummary( { products } ) {
    const { cart } = useCart();


    const subtotal = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="bg-white rounded-xl p-4 w-full max-w-sm">
            <div className="space-y-4 mt-15">
                {cart.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center justify-between border-b pb-3"
                    >
                        <div className="flex items-center gap-3 relative">
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={50}
                                height={50}
                                className="rounded-md"
                            />
                            <span className="text-sm text-white absolute -top-2 left-10 bg-gray-500 px-[6px] rounded-[50%]">{item.count}</span>
                            <span className="text-sm">{item.name}</span>
                        </div>
                        <span className="text-sm font-medium">${(item.price * item.count).toFixed(2)}</span>
                    </div>
                ))}
            </div>

            <div className="mt-4 space-y-1 text-sm">
                <div className="flex justify-between">
                    <span>Subtotal · {cart.length} items</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
                </div>
            </div>

            <div className="mt-4 border-t pt-3 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span className="text-[#35B3A5]">${total.toFixed(2)}</span>
            </div>
        </div>
    );
}
