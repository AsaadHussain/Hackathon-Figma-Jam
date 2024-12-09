import Link from "next/link";

export default function Card() {
    return (
        <>
            <div className="flex items-center justify-evenly p-0 m-0 bg-white w-[285px] h-[375px] " >
                <div className="flex-col justify-end items-center p-0 m-0">
                    <div className="px-10 pb-12">
                        <Link href="/singleProduct"><img className="w-[285px] h-[200px]" src="./Mask group.png" alt="" /></Link>
                    </div>
                    <div className="p-0 m-0 poppins font-[400] text-[16px]">
                        <h2>
                            Trenton modular sofa_3
                        </h2>
                    </div>
                    <div className="poppins font-[500] text-[24px] pt-2 p-0 m-0">
                        <p className="">
                            Rs. 25,000.00
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}