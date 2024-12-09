
export default function Shop() {
    return (
        <>
            <div className="bg-white flex items-center justify-start w-full h-[110px]">
                <div className="mx-24 py-4 w-[25%] flex items-center justify-between poppins font-[400] text-[16px]">
                    <h3 className="text-[#9f9f9f]">Home</h3>
                    <i className="fa-solid fa-angle-right"></i>
                    <h3 className="text-[#9f9f9f]">Shop</h3>
                    <i className="fa-solid fa-angle-right"></i>
                    <div className="h-[40px] w-[3px] bg-gray-400"></div>
                    <p className="text-black">Asgaard Sofa</p>
                </div>
            </div>

            <div className="flex items-center justify-evenly w-full border-[1px] border-blue-500">
                <div className="flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                        <div className="bg-[#fff9e5] py-1 px-0 m-0"><img src="./Outdoor sofa set 2.png" alt="" /></div>
                        <div className="bg-[#fff9e5] py-1 px-0 m-0"><img src="./Outdoor sofa set_2 1.png" alt="" /></div>
                        <div className="bg-[#fff9e5] py-1 px-0 m-0"><img src="./Stuart sofa 1.png" alt="" /></div>
                        <div className="bg-[#fff9e5] py-1 px-0 m-0"><img src="./Maya sofa three seater (1) 1.png" alt="" /></div>
                    </div>
                    <div>
                        <div className="bg-[#fff9e5] py-1 px-0 m-0">
                            <img src="./Asgaard sofa 1.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start ">
                    <div>
                        <h1 className=" poppins font-[400] text-[42px]"> Asgaard sofa</h1>
                        <h3 className=" poppins font-[500] text-[24px] text-[#9f9f9f]"> Rs. 250,000.00</h3>
                    </div>

                    <div className="w-full flex items-center justify-evenly">
                        <div className="flex items-center justify-center text-[#ffda5b]">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half"></i>
                        </div>
                        <div className="h-[40px] w-[1px] bg-gray-400"></div>
                        <p className="text-[#9f9f9f] poppins text-[13px] font-[400]">5 Customer Review</p>
                    </div>
                    <div className="text-[#000] poppins text-[13px] font-[400]">
                        <p>
                            Setting the bar as one of the loudest speakers in its class,
                            the Kilburn is a compact, stout-hearted hero with a well-balanced
                            audio which boasts a clear midrange and extended highs for a sound.
                        </p>
                    </div>
                    <div>
                        <div>
                            <p className=" poppins font-[400] text-[14px] text-[#9f9f9f]">Size</p>
                            <div className="w-2/5 flex items-center justify-evenly poppins font-[400] text-[20px]" >
                                <div>
                                    <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#Faf4f4] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                                        L
                                    </button>
                                </div>
                                <div>
                                    <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#Faf4f4] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                                        XL
                                    </button>
                                </div>
                                <div>
                                    <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#Faf4f4] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                                        XS
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className=" poppins font-[400] text-[14px] text-[#9f9f9f]">Color</p>
                            <div className="flex items-center justify-center">
                                <i className="text-[#816dfa] fa-solid fa-circle"></i>
                                <i className="text-[#000000] fa-solid fa-circle"></i>
                                <i className=" text-[#cdba7b] fa-solid fa-circle"></i>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[70%] p-0">
                        <div className="
                        flex items-center justify-around border-[1px] border-[#9f9f9f]
                        rounded-lg py-5 px-0 poppins font-[500] text-[16px] w-[22%]">
                            <button>-</button>
                            <button>1</button>
                            <button>+</button>
                        </div>

                        <button className="flex items-center justify-around border-[1px]
                         border-[#000000] rounded-[12px] py-4 px-1 ml-4 w-[40%] poppins font-[400]
                          text-[20px]">
                            Add To Cart
                        </button>
                    </div>
                    <hr className="bg-[#d9d9d9] w-full h-[1.5px]" />
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center justify-around poppins font-[400]
                          text-[16px] text-[#9f9f9f]">
                            <div className="flex items-center justify-center">
                                <p className="">SKU</p>
                                <p className="">:</p>
                                <p className="">SS001</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="">Category</p>
                                <p className="">:</p>
                                <p className="">Sofas</p>
                            </div>
                            <div className="flex items-center justify-center">
                                <p className="">Tags</p>
                                <p className="">:</p>
                                <p className="">Sofa, Chair, Home, Shop</p>
                            </div>
                        </div>
                        <div><i className="text-red-500 fa-regular fa-heart"></i></div>
                    </div>
                </div>
            </div>
        </>
    )
}