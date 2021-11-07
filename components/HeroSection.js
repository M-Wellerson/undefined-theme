import React from "react";
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <div className="grid grid-cols-2 justify-items-center align-items h-full w-full text-white">
            <div className="grid items-center justify-items-center">
                <div className="w-5/6">
                    <h3 className="text-2xl font-extrabold">Nós fazemos o que queremos</h3>
                    <h1 className="text-9xl font-semibold my-4 gradient-glitch">User <br/>Changes</h1>
                    <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean metus mi, feugiat nec felis eget, iaculis accumsan arcu. Praesent dignissim eros augue, a ornare lorem placerat a. 
                    </p>
                    <Link href="">
                        <a className="btn-undefined my-4">Entre em Contato</a>
                    </Link>
                </div>
            </div>
            <div className="grid justify-items-center">
                <Image
                    className="object-scale-down"
                    src="/../public/images/ex.png"
                    alt="Picture of the author"
                    width={500}
                    height={500}
                />
            </div>
        </div>
    )
}