"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center pt-12 pb-10 h-16" style={{ backgroundColor: "#fbebb5" }}>
               
                <div className="px-10 w-1/3"></div>

                <div className="p-10 md:p-2 w-full lg:w-1/3">
                    <ul className="poppins hidden lg:flex sm:flex md:flex md:space-x-0 lg:space-x-12 s font-[500] text-[16px] text-black lg:justify-center">
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <Link href="/shop">Shop</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <Link href='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>

               
                <div className="pr-20 w-full lg:w-1/3">
                    <ul className="flex lg:justify-end lg:items-center sm:justify-center md:space-x-2 lg:space-x-7 text-black">
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <Link href="/account"><i className="fa-solid fa-user-plus"></i></Link>
                        </li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <i className="fa-regular fa-heart"></i>
                        </li>
                        <li className="px-2 py-1 hover:text-gray-300 cursor-pointer">
                            <Link href="/checkout"><i className="fa-solid fa-cart-shopping"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
