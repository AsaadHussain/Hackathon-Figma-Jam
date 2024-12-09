export default function Account() {
    return (
        <>
            <div className="relative flex items-center justify-center w-full h-[315px]">
                <div className="absolute inset-0 -z-10">
                    <img className="w-full h-full object-cover" src="./Rectangle 1.png" alt="Background" />
                </div>

                <div className="flex flex-col justify-center items-center p-0 m-0 w-full sm:w-[35%]">
                    <img className="" src="./Meubel House_Logos-05.png" alt="Logo" />
                    <div className="poppins font-[500] text-[48px] text-center">
                        <h2>My Account</h2>
                    </div>
                    <div className="w-full sm:w-[40%] flex items-center justify-evenly p-0 m-0 poppins text-center">
                        <h3 className="font-[500] text-[16px]">Home</h3>
                        <i className="fa-solid fa-angle-right"></i>
                        <h3 className="font-[300] text-[16px]">My account</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-start items-start px-6 md:px-10 sm:px-36 py-24 m-0 w-full poppins">
                {/* Left Section (Login) */}
                <div className="flex flex-col justify-center items-start p-0 m-0 w-full sm:w-1/2 gap-12">
                    <div className="font-[600] text-[36px]">
                        <h2>Log In</h2>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">Username or email address</p>
                        <div className="font-[500] text-[16px] h-[75px] w-full md:w-[250px] sm:w-[420px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>

                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">Password</p>
                        <div className="font-[500] text-[16px] h-[75px] w-full md:w-[250px] sm:w-[420px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-center font-[400] text-[16px] space-x-2">
                        <input type="checkbox" className="w-6 h-6" />
                        <p>Remember me</p>
                    </div>

                    <div className="flex items-center justify-start w-full gap-4">
                        <button className="flex items-center justify-around border-[1px] border-[#000000]
                         rounded-[12px] py-[15px] px-[80px] poppins font-[400] text-[20px] md:py-[10px] md:px-[40px] sm:py-[10px] sm:px-[40px]">
                            Log In
                        </button>
                        <button className="flex items-center justify-around py-[15px] px-[20px] poppins font-[300] text-[16px]">
                            Lost Your Password?
                        </button>
                    </div>
                </div>

                {/* Right Section (Register) */}
                <div className="flex flex-col justify-center items-start p-0 m-0 w-full sm:w-1/2 gap-12">
                    <div className="font-[600] text-[36px]">
                        <h2>Register</h2>
                    </div>
                    <div className="font-[500] text-[16px]">
                        <p className="pb-6">Email address</p>
                        <div className="font-[500] text-[16px] h-[75px] md:w-[250px] w-full sm:w-[420px] border-[2px] border-[#9f9f9f] rounded-xl">
                            <input
                                type="text"
                                placeholder=""
                                className="w-full h-full p-4 rounded-xl outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 font-[300] text-[16px] w-full sm:w-4/5 text-justify pb-6">
                        <p>
                            A link to set a new password will be sent to your email address.
                        </p>
                        <p>
                            Your personal data will be used to support your experience throughout
                            this website, to manage access to your account, and for other purposes
                            described in our <button className="font-[600] text-[16px]">privacy policy</button>.
                        </p>
                    </div>

                    <div>
                        <button className="flex items-center justify-around border-[1px] border-[#000000] rounded-[12px] py-[15px] px-[68.5px] mt-[6px] poppins font-[400] text-[20px]">
                            Register
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Section (Free Delivery, Return, Payment) */}
            <div className="flex flex-col sm:flex-row items-center justify-evenly py-28 px-6 sm:px-20 m-0" style={{ backgroundColor: "#faf4f4" }}>
                <div className="flex flex-col justify-center items-start p-0 m-0 text-center sm:text-left">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>Free Delivery</h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            For all orders over $50, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start p-0 m-0 text-center sm:text-left">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>90 Days Return</h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            If goods have problems, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start p-0 m-0 text-center sm:text-left">
                    <div className="p-0 m-0 poppins font-[500] text-[32px]">
                        <h1>Secure Payment</h1>
                    </div>
                    <div>
                        <p className="p-0 m-0 poppins font-[400] text-[20px] text-[#9f9f9f]">
                            100% secure payment, consectetur adipim scing elit.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
