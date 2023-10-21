
import { Link} from "react-router-dom";

const Brands = () => {
    return (
        <div className="w-11/12 mx-auto">
        <div  className="flex justify-between items-center w-full rounded-lg bg-white my-12 p-5 shadow-sm">
    
            <Link to={'/samsung'}>
                <img src="https://i.ibb.co/pdfGkgx/download.png" alt="" />
            </Link>
            <Link to={'/apple'}>
                <img src="https://i.ibb.co/G3fz1W5/download-2.png" alt="" />
            </Link>
            <Link to={'/amazon'}>
                <img src="https://i.ibb.co/CwqF9Yc/download-4.png" alt="" />
            </Link>
            <Link to={'/logitech'}>
                <img src="https://i.ibb.co/ysz7R7B/download-3.png" alt="" />
            </Link>
            <Link to={'/microsoft'}>
                <img src="https://i.ibb.co/TB36K4B/download-5.png" alt="" />
            </Link>
            <Link to={'/dell'}>
                <img src="https://i.ibb.co/J7yqjwY/download-6.png" alt="" />
            </Link>
            
        
    </div>
    </div>
    );
};

export default Brands;