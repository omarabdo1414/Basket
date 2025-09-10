"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"
import { useRouter } from "next/navigation";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const router = useRouter();
    
    const handleLogin = async (e) => {
        e.preventDefault()
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })

        if (error) {
        setMessage(error.message);
        setIsError(true);
        } else {
        console.log("User:", data.user);
        console.log("Session:", data.session);
        setMessage("Login successful!");
        setIsError(false);
        router.push("/");
        setTimeout(() => {
            router.push("/");
        }, 500);
        }
    }

    return (
        <>
            <div className="flex min-h-screen items-center justify-evenly bg-gray-50 flex-wrap">
                <div className="md:block hidden">
                    <div className="">
                        <div className="mb-6 flex items-center">
                            <div className="relative flex items-center justify-center w-[200px] lg:w-[400px]">
                                <Image
                                    src="/assets/line.svg"
                                    alt="Line with Basket Logo"
                                    width={400}
                                    height={400}
                                    className="absolute"
                                    style={{ zIndex: 1 }}
                                />
                                <Image
                                    src="/assets/logo_.svg"
                                    alt="Basket Logo"
                                    width={400}
                                    height={400}
                                    className="relative"
                                    style={{ zIndex: 2 }}
                                />
                            </div>
                            <h2 className="relative left-10 transform -translate-x-1/2 mt-2 lg:text-[70px] text-[50px] font-medium text-[#35AFA0] tracking-wide" style={{ fontFamily: "'Jersey 10', sans-serif" }}>Basket</h2>
                        </div>
                        <p className="text-sm text-gray-500 lg:text-[30px] text-[20px]">Online Grocery Shopping Center</p>
                    </div>

                </div>
                <div className="lg:w-full lg:max-w-md lg:rounded-[10px] bg-white p-8 shadow-lg xs:w-8/12 xs:mx-2 xs:my-8 xs:bg-white xs:p-2 rounded-lg xs:shadow-md">
                    {/* Logo */}
                    <div className="mb-6 flex flex-col items-center">
                        <div className="relative flex items-center justify-center">
                            <Image
                                src="/assets/line.svg"
                                alt="Line with Basket Logo"
                                width={64}
                                height={64}
                                className="absolute"
                                style={{ zIndex: 1 }}
                            />
                            <Image
                                src="/assets/logo_.svg"
                                alt="Basket Logo"
                                width={64}
                                height={64}
                                className="relative"
                                style={{ zIndex: 2 }}
                            />
                        </div>
                        <h2 className="mt-2 text-2xl font-bold text-[#35AFA0]" >Create Account</h2>
                        <p className="text-sm text-gray-500">Join Basket today</p>
                    </div>

                    {/* Social Auth Buttons */}
                    <div className="mb-4 flex flex-col gap-2">
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        >
                            <Image src="/assets/google.png" alt="Google" width={20} height={20} />
                            Continue with Google
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                        >
                            <Image src="/assets/facebook.png" alt="Facebook" width={20} height={20} />
                            Continue with Facebook
                        </button>
                    </div>

                    <form className="space-y-4" onSubmit={handleLogin}>
                        <div>
                            <label className="mb-1 block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="input-field"
                                value={email}
                                onChange={(e)=>(setEmail(e.target.value))}
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
                                value={password}
                                onChange={(e)=>(setPassword(e.target.value))}
                            />
                        </div>
                        <p className={`message ${isError ? "text-red-500" : "text-green-500"}`}>
                            {message}
                        </p>
                        <button
                            className="w-full rounded-xl bg-[#35AFA0] px-4 py-2 text-white transition hover:bg-teal-600"
                        >
                            Login
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="font-medium text-[#35AFA0] hover:underline">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login