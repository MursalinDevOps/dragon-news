import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex bg-base-200 py-3 px-3">
            <p className="bg-[#D72050] text-base-100 px-10 py-2">Latest</p>
            <Marquee pauseOnHover={true} speed={75}>
                <div className="">
                <Link to='/news' className="hover:text-[#D72050] px-16">
                Sports
                </Link>
                <Link to='/news' className="hover:text-[#D72050] px-16">
                Entertainment
                </Link>
                <Link to='/news' className="hover:text-[#D72050] px-16">
                Economy
                </Link>
                <Link to='/news' className="hover:text-[#D72050] px-16">
                Politics
                </Link>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;