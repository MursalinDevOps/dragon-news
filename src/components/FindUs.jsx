import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div className="mt-3">
            <h2 className="text-xl font-semibold mb-3">Find Us On</h2>
            <div className="join join-vertical flex *:bg-base-100">
                <button className="btn join-item justify-start"><FaFacebook></FaFacebook> Facebook</button>
                <button className="btn join-item justify-start"><FaInstagram></FaInstagram> Instagram</button>
                <button className="btn join-item justify-start"><FaTwitter></FaTwitter> Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;