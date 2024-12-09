import Card from "../components/Card/page";


export default function Shop() {
    return (
        <>
            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <img className="w-full h-full object-cover" src="./Rectangle 1.png" alt="Background" />
                </div>

                <div className="flex flex-col justify-center items-center p-0 m-0 w-[35%]">
                    <img className="" src="./Meubel House_Logos-05.png" alt="Background" />
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>Shop</h2>
                    </div>
                    <div className="w-[30%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">Shop</h3>
                    </div>
                </div>
            </div>

            <div className="w-full h-[100px] flex items-center justify-center" style={{ backgroundColor: "#faf4f4" }}>
                <div className="w-[90%] flex items-center justify-between" >
                    <div className="w-[45%] flex items-center justify-evenly">
                        <i className="fa-solid fa-sliders"></i>
                        <p className="poppins font-[400] text-[20px]">Filter</p>
                        <i className="fa-solid fa-list"></i>
                        <i className="fa-regular fa-square"></i>
                        <div className="h-[40px] w-[3px] bg-gray-400"></div>
                        <p className="poppins font-[400] text-[16px]">Showing 1–16 of 32 results</p>
                    </div>
                    <div className="w-[45%] flex items-center justify-evenly poppins font-[400] text-[20px]">
                        <p>Show</p>
                        <input className="p-4 w-[55px] h-[55px]" type="text" name="" id="" placeholder="16" />
                        <p>Sort by</p>
                        <input className="pl-8 w-[185px] h-[55px]" type="text" name="" id="" placeholder="Default" />
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center w-full">
                <div className="py-11 grid grid-cols-4 gap-5 w-[88%]">
                    {Array(16).fill(null).map((_, index) => (
                        <Card key={index} />
                    ))}
                </div>
            </div>

            <div className="w-full flex items-center justify-center py-12" >
                <div className="w-2/5 flex items-center justify-evenly poppins font-[400] text-[20px]" >
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#ffe788]">
                            1
                        </button>
                    </div>
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#d4bf6e]">
                            2
                        </button>
                    </div>
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#d4bf6e]">
                            3
                        </button>
                    </div>
                    <div>
                        <button className="px-[31.7px] py-[20px] rounded-[12px] bg-[#FFF9e5] hover:bg-[#fbebb5] active:bg-[#d4bf6e]">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-evenly py-28 px-20 m-0" style={{ backgroundColor: "#faf4f4" }}>
                <div className="flex flex-col justify-center items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>
                            Free Delivery
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            For all oders over $50, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>
                            90 Days Return
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            If goods have problems, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start p-0 m-0">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>
                            Secure Payment
                        </h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            100% secure payment, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
            </div>


        </>
    )
}