export default function Footer() {
    return (
        <>
            <div className="flex flex-col justify-between items-center pt-24 pb-10 h-auto bg-white w-full">

                <div className="flex flex-col sm:flex-row justify-evenly items-center w-11/12">

                    <div className="flex flex-col justify-center items-start sm:w-[23%] w-full font-[400] text-[16px]" style={{ color: '#9f9f9f' }}>
                        <p>400 University Drive Suite 200 Coral Gables,</p>
                        <p>FL 33134 USA</p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-evenly items-start sm:w-[77%] w-full">
                        <div className="poppins font-[500] text-[16px] flex flex-col justify-center items-start sm:w-1/3 w-full">
                            <h3 className="pb-10" style={{ color: '#9f9f9f' }}>Links</h3>
                            <ul className=" flex flex-col font-[500] text-[16px] text-black">
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">Home</li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">Shop</li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">About</li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">Contact</li>
                            </ul>
                        </div>

                        <div className="font-[500] text-[16px] poppins flex flex-col justify-center items-start sm:w-1/3 w-full">
                            <h3 className="pb-10" style={{ color: '#9f9f9f' }}>Help</h3>
                            <ul className="flex flex-col justify-end text-black">
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">Payment Options</li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">Returns</li>
                                <li className="pb-8 hover:text-gray-300 cursor-pointer">Privacy Policy</li>
                            </ul>
                        </div>

                        <div className="poppins flex flex-col justify-center items-start sm:w-1/3 w-full">
                            <h3 className="pb-10 font-[500] text-[16px]" style={{ color: '#9f9f9f' }}>Newsletter</h3>
                            <div className="flex justify-center text-black">
                                <input className="w-full sm:w-[200px] pb-1 border-b-[2px] border-black font-[400] text-[14px]" type="text" placeholder="Enter Your Email Address" />
                                <div className="pl-4 poppins font-[500] text-[14px]">
                                    <button className="border-b-[2px] border-black pb-1">
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <hr className="bg-gray-300 w-11/12 pb-[2px] my-10" />

                <div className="poppins font-[400] text-[16px] w-11/12 flex justify-start items-center pb-10">
                    <p>2022 Meubel House. All rights reserved</p>
                </div>

            </div>
        </>
    );
}
