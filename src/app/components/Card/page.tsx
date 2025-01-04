"use client"

import { Product } from "@/data/products";
import Link from "next/link";

type cardProp = {
    product: Product
}

export default function Card({ product }: cardProp) {
    return (
        <>
            <div
                key={product.sku}
                className="flex items-center justify-evenly p-0 m-0 bg-white w-[285px] h-[375px] " >
                <div className="flex-col justify-end items-center p-0 m-0">
                    <div className="px-10 pb-12">
                        <Link href="/singleProduct"><img className="object-cover w-[285px] h-[200px]" src={product.image} alt="" /></Link>
                    </div>
                    <div className="p-0 m-0 poppins font-[400] text-[16px]">
                        <h2>
                            {product.name}
                        </h2>
                    </div>
                    <div className="poppins font-[500] text-[24px] pt-2 p-0 m-0">
                        <p className="">
                            Rs. {product.price}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}