

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

            <div className="w-full h-[100px] flex items-center justify-between" style={{ backgroundColor: "#faf4f4" }}>

                    <div className="w-1/2 flex items-center justify-evenly">
                        <i className="fa-solid fa-sliders"></i>
                        <p className="poppins font-[400] text-[20px]">Filter</p>
                        <i className="fa-solid fa-list"></i>
                        <i className="fa-regular fa-square"></i>
                        <div className="h-[50%] bg-gray-400"></div>
                        <p className="poppins font-[400] text-[16px]">Showing 1–16 of 32 results</p>
                    </div>
                    <div className="w-1/2 flex items-center justify-evenly">
                        <p>Show</p>
                        <input type="text" name="" id="" placeholder="16" />
                        <p>Sort by</p>
                        <input type="text" name="" id="" placeholder="Default" />
                    </div>
            </div>

        </>
    )
}