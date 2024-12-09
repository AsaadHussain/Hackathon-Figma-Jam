import Card from "@/app/components/Card/page";

export default function Home() {
    return (
        <>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center p-0 m-0" style={{ backgroundColor: "#fbebb5" }}>
                <div className="flex flex-col items-center lg:items-start lg:w-[35%] px-4 py-6">
                    <h1 className="poppins font-[500] text-[32px] lg:text-[64px] text-center lg:text-left">
                        Rocket Single Seater
                    </h1>
                    <div className="poppins font-[500] text-[16px] lg:text-[24px] pt-6">
                        <button className="border-b-[3px] border-black pb-2">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div>
                    <img className="w-full max-w-[300px] md:max-w-[400px] lg:w-[600px] lg:h-[850px]" src="./Rocket single seater 1.png" alt="" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-evenly py-8 lg:py-16 bg-[#faf4f4]">
                {[
                    { src: "./Granite square side table 1.png", title: "Side Table" },
                    { src: "./Cloud sofa three seater + ottoman_3 1.png", title: "Cloud Sofa" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-4">
                        <img className="w-[200px] md:w-[300px] lg:w-[390px] h-auto" src={item.src} alt={item.title} />
                        <h1 className="poppins font-[500] text-[24px] lg:text-[36px] pt-4">{item.title}</h1>
                        <button className="poppins font-[500] text-[16px] lg:text-[24px] pt-4 border-b-[3px] border-black pb-2">
                            View More
                        </button>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center py-12 lg:py-16 bg-white w-full">
                <h1 className="poppins font-[500] text-[24px] lg:text-[36px] text-center">Top Picks For You</h1>
                <p className="poppins font-[400] text-[14px] lg:text-[16px] pt-4 text-center text-[#9f9f9f]">
                    Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-12 pb-3">
                    {Array(4)
                        .fill()
                        .map((_, index) => (
                            <Card key={index} />
                        ))}
                </div>
                <button className="poppins font-[500] text-[16px] lg:text-[24px] pt-6 border-b-[3px] border-black pb-3">
                    View More
                </button>
            </div>

            <div className=" flex items-center justify-center p-0 m-0" style={{ backgroundColor: "#fff9ef" }}>
                <div className="">
                    <img className="md:w-[450px] md:h-auto sm:w-[100px] sm:h-auto lg:w-[900px] lg:h-[700px] w-[100px] h-auto" src="./Asgaard sofa 1.png" alt="" />
                </div>
                <div className="flex flex-col justify-center items-center p-0 m-0 w-[35%]">
                    <div className="p-0 m-0 poppins font-[500] text-[24px]">
                        <h1>
                            New Arrivals
                        </h1>
                    </div>
                    <div className="poppins xl:font-[700] xl:text-[48px] lg:font-[700] lg:text-[48px] md:text-[36px] sm-[24px]">
                        <h2 className="">
                            Asgaard Sofa
                        </h2>
                    </div>
                    <div className="poppins font-[400] text-[10px] sm:text-[12px] md:text-[16px] lg:text-[20px] xl:text-[20px] pt-6 ">
                        <button className="border border-black  xl:py-3 xl:px-16 lg:py-3 lg:px-16 md:px-10 sm:px-6">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center py-12 lg:py-16 bg-white w-full">
                <h1 className="poppins font-[500] text-[24px] lg:text-[36px] text-center">Our Blogs</h1>
                <p className="poppins font-[400] text-[14px] lg:text-[16px] pt-4 text-center text-[#9f9f9f]">
                    Find a bright idea to suit your taste with our great selection.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12 pb-3">
                    {Array(3)
                        .fill()
                        .map((_, index) => (
                            <div key={index} className="flex flex-col items-center text-center bg-white shadow-lg p-4 rounded-lg">
                                <img className="w-full h-[200px] object-cover rounded-t-lg" src={`./Rectangle 1${3 + index}.png`} alt="Blog" />
                                <h2 className="poppins font-[400] text-[16px] lg:text-[20px] pt-4">
                                    Going all-in with millennial design
                                </h2>
                                <button className="poppins font-[500] text-[16px] lg:text-[24px] pt-4 border-b-[3px] border-black pb-2">
                                    Read More
                                </button>
                            </div>
                        ))}
                </div>
                <button className="poppins font-[500] text-[16px] lg:text-[24px] pt-6 border-b-[3px] border-black pb-3">
                    View All Posts
                </button>
            </div>

            <div className="relative flex items-center justify-center py-12 lg:py-16 bg-[#faf4f4]">
                <img
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    src="./Rectangle 17.png"
                    alt="Background"
                />
                <div className="flex flex-col items-center text-center">
                    <h2 className="poppins font-[700] text-[36px] lg:text-[60px]">Our Instagram</h2>
                    <h1 className="poppins font-[400] text-[16px] lg:text-[20px] pt-4">Follow our store on Instagram</h1>
                    <button
                        className="poppins font-[400] text-[16px] lg:text-[20px] border py-2 lg:py-3 px-8 lg:px-16 rounded-full mt-6"
                        style={{ backgroundColor: "#faf4f4" }}
                    >
                        Follow Us
                    </button>
                </div>
            </div>
        </>
    );
}
