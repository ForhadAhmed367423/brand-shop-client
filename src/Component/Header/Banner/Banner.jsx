import { Link } from "react-router-dom";
import { FaArrowUpRightDots } from "react-icons/fa6";



const Banner = () => {
    return (
        <div>
            <div className="position">
                <img className="w-full" src="./banner.png" alt="" />
                <div className="absolute top-[20%] left-[15%] text-center">
                    <h2 className=" text-white lg:text-[60px] max-[445px]:text-3xl 
                    max-[445px]:mt-48  lg:mt-80">Edifier W820NB Active Noise Headphone</h2>
                    <p  className="text-white text-lg mt-3">Best Collection For Your best choice Go to the explore page and get Flat 60% Discount offer</p>

                    <div className="flex items-center justify-center mt-4">
                        <Link to={'/'}>
                            <button className="text-white flex items-center justify-center gap-2 text-xl  bg-[#000000] px-2 py-2 rounded-lg">Explore More <FaArrowUpRightDots></FaArrowUpRightDots></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;