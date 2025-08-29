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
        </>
    );
}
