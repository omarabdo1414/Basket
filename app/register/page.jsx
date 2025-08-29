"use client";
import Link from "next/link";
import Image from "next/image";

// Components
import Header from "../components/header";

export default function Register() {
    return (
        <>
            <div className="warn-msg">
                <p className="text-center text-sm text-white py-1 bg-[#35AFA0]">Due to current circumstances, there may be slight delays in order processing</p>
            </div>
            <Header />
            
            {/* Register Form and logo */}
            <div className="flex min-h-screen items-center justify-evenly bg-gray-50">
                <div className="flex-wrap">
                    <div className="lg:block sm:hidden xs:hidden">
                        <div className="mb-6 flex items-center">

                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/line.svg"
                                    alt="Line with Basket Logo"
                                    width={400}
                                    height={400}
                                    className="absolute"
                                    style={{ zIndex: 1 }}
                                />
                                <Image
                                    src="/images/logo.svg"
                                    alt="Basket Logo"
                                    width={400}
                                    height={400}
                                    className="relative"
                                    style={{ zIndex: 2 }}
                                />
                            </div>
                            <h2 className="relative left-10 transform -translate-x-1/2 mt-2 text-[70px] font-medium text-[#35AFA0] tracking-wide" style={{ fontFamily: "'Jersey 10', sans-serif" }}>Basket</h2>
                        </div>
                        <p className="text-sm text-gray-500 text-[30px]">Online Grocery Shopping Center</p>
                    </div>

                </div>
                <div className="lg:w-full lg:max-w-md lg:rounded-[10px] lg:bg-white lg:p-8 lg:shadow-lg xs:w-8/12 xs:mx-2 xs:my-8 xs:bg-white xs:p-2 xs:rounded-lg xs:shadow-md">
                    {/* Logo */}
                    <div className="mb-6 flex flex-col items-center ">
                        <div className="relative flex items-center justify-center">
                            <Image
                                src="/images/line.svg"
                                alt="Line with Basket Logo"
                                width={64}
                                height={64}
                                className="absolute"
                                style={{ zIndex: 1 }}
                            />
                            <Image
                                src="/images/logo.svg"
                                alt="Basket Logo"
                                width={64}
                                height={64}
                                className="relative"
                                style={{ zIndex: 2 }}
                            />
                        </div>
                        <h2 className="mt-2 text-2xl font-bold text-[#35AFA0]">Create Account</h2>
                        <p className="text-sm text-gray-500">Join Basket today</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-4 xs:px-4 lg:px-0">
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="input-field"
                            />
                        </div>

                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="enter password"
                                className="input-field"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-xl bg-[#35AFA0] px-4 py-2 text-white transition hover:bg-teal-600"
                        >
                            Register
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link href="/login" className="font-medium text-[#35AFA0] hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
