"use client"

import Gallery from './components/Gallery'
import PurchaseCard from './components/PurchaseCard'
import RelatedProducts from './components/RelatedProducts'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

const PurchasePage = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-center mb-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center justify-center font-medium text-sm sm:text-base h-12 px-6">
                            Open Purchase Page
                        </button>
                    </DialogTrigger>
                    <DialogContent className="w-[98vw] sm:w-[95vw]  p-0 sm:p-6 overflow-hidden">
                        <div className="w-full mx-auto overflow-y-auto max-h-[85vh] px-4 sm:px-0">
                            <div className='flex flex-col lg:flex-row gap-6 mb-8'>
                                <div className="w-full lg:w-3/5">
                                    <Gallery />
                                </div>
                                <div className="w-full lg:w-2/5">
                                    <PurchaseCard />
                                </div>
                            </div>
                            <RelatedProducts />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default PurchasePage;

