
"use client"

import Link from "next/link"
import styles from '@/app/header.module.css';

type home = {
    isHome: boolean
}

export default function Navbar({isHome}:home) {


    return (
        <>
            <div className={`flex justify-between items-center pt-12 pb-10 h-16 ${isHome ? styles.homeHeader : styles.defaultHeader}`}>
                <div className="px-10 w-1/3"></div>
                <div className="p-10 w-1/3 ">
                    <ul className="poppins flex space-x-14 font-[500] text-[16px] text-black">
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/">Home</Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/shop">Shop</Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/about">About</Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className="pr-20 w-1/3">
                    <ul className="flex justify-end space-x-8 text-black">
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/account"><i className="fa-solid fa-user-plus"></i></Link></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><i className="fa-solid fa-magnifying-glass"></i></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><i className="fa-regular fa-heart"></i></li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer"><Link href="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                    </ul>
                </div>

            </div>

        </>
    )
}



