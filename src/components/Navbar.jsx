import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between my-5">
            <div className=""></div>
            <div className="space-x-5 text-stone-500 flex justify-center items-center">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="flex items-center gap-3"> 
                <div className="icon">
                    <img src={userIcon} />
                </div>
                <button className="btn rounded-none btn-neutral text-base-100 px-10 font-semibold text-lg">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;