import Image from "next/image";

export default function CartSummary() {
    const items = [
        {
            id: 1,
            name: "All Natural Italian-Style Chicken Meatballs",
            price: 7.25,
            image: "/assets/item_1.svg", // replace with your image path
            count: 1
        },
        {
            id: 2,
            name: "Coca-Cola – 2 L Bottle",
            price: 3.85,
            image: "/assets/item_2.svg",
            count: 3
        },
        {
            id: 3,
            name: "Fairlife Lactose-Free 2% Milk",
            price: 3.69,
            image: "/assets/item_3.svg",
            count: 1
        },
    ];

    const subtotal = items.reduce((sum, item) => sum + item.price * item.count, 0);
    const shipping = 0;
    const total = subtotal + shipping;

    return (
        <div className="bg-white rounded-xl p-4 w-full max-w-sm">
            <div className="space-y-4 mt-15">
                {items.map((item) => (
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
                    <span>Subtotal · {items.length} items</span>
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
