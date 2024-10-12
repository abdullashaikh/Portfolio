import logo from "../assets/AbdullaShaikhLogo.webp"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
const Navbar = () => {
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img src={logo} alt="Logo"  className="mx-2 w-20 rounded-2xl"/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4  text-2xl">
                <FaLinkedin />
                <FaGithub />
                <FaSquareXTwitter />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar
