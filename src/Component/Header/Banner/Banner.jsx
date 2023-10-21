import { Link } from "react-router-dom";
import { FaArrowUpRightDots } from "react-icons/fa6";



const Banner = () => {
    const styles = {
        backgroundImage: 'url("/public/banner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '120vh',
        background:'cover',
        color: 'white',
        textAlign: 'center',
        paddingTop: '100px', // Adjust as needed
      };
    return (
        <div style={styles}>
            <div>
            <h2 className="lg:text-[60px] max-[445px]:text-3xl 
            max-[445px]:mt-48  lg:mt-80">Edifier W820NB Active Noise Headphone</h2>
            <p className="text-lg mt-3">Best Collection For Your best choice Go to the explore page and get Flat 60% Discount offer</p>

            <div className="flex items-center justify-center mt-4">
            <Link to={'/'}>
                <button className="flex items-center justify-center gap-2 text-xl  bg-[#000000] px-2 py-2 rounded-lg">Explore More <FaArrowUpRightDots></FaArrowUpRightDots></button>
            </Link>
            </div>
            </div>
           
        </div>
    );
};

export default Banner;