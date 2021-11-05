import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function Menu() {
    return (
        <nav className="grid items-center justify-items-center w-full h-14">
            <div className="flex items-center justify-items-center h-10 space-x-4">
                <Link href="/">
                    <a className="text-white">Home</a>
                </Link>
                <Link href="/">
                    <a className="text-white">Portfolio</a>
                </Link>
                <Link href="/">
                    <a className="text-white">About us</a>
                </Link>
            </div>
        </nav>
    )
}