import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className=""> 
            <h2 className="text-xl font-semibold">Login with</h2>
            <div className="*:w-full mt-3 space-y-3">
                <button className="btn"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn"><FaGithub></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;