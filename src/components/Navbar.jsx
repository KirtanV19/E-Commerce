import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import { MdOutlineMail } from "react-icons/md";
import { LuPhoneCall } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Typography, Badge } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
    const navigate = useNavigate();
    const { cart, wishlist } = useSelector((state) => state.products);
    const user = useSelector(state => state.auth.user)
    // console.log(user);

    return (
        <div
            className="h-14 sticky top-0 z-50 shadow-md"
            style={{ backgroundColor: Colors.Purple }}
        >
            <Container className="flex justify-between items-center h-full px-4">
                {/* Left: Contact Info */}
                <div className="flex gap-8">
                    <div className="flex gap-2 items-center">
                        <MdOutlineMail size={18} style={{ color: Colors.White }} />
                        <Typography
                            variant="paragraph"
                            style={{ color: Colors.White, fontWeight: 600, fontSize: 15 }}
                            className="hidden sm:block"
                        >
                            {user.email}
                        </Typography>
                    </div>
                    <div className="flex gap-2 items-center">
                        <LuPhoneCall size={18} color={Colors.White} />
                        <Typography
                            variant="paragraph"
                            style={{ color: Colors.White, fontWeight: 600, fontSize: 15 }}
                            className="hidden sm:block"
                        >
                            (12345)67890
                        </Typography>
                    </div>
                </div>
                {/* Right: User, Wishlist, Cart */}
                <div className="flex gap-6 items-center">
                    <div
                        className="flex gap-1 items-center px-3 py-1 rounded hover:bg-pink-500/20 transition cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        <FiUser size={18} color={Colors.White} />
                        <Typography
                            variant="paragraph"
                            style={{ color: Colors.White, fontWeight: 600, fontSize: 15 }}
                        >
                            Login
                        </Typography>
                    </div>
                    <div className="flex gap-1 items-center px-3 py-1 rounded hover:bg-pink-500/20 transition cursor-pointer" onClick={() => navigate('/wishlist')}>
                        <Badge content={wishlist.length} color="blue" placement="top-end">
                            <MdFavoriteBorder size={20} color={Colors.White} />
                        </Badge>
                    </div>
                    <div
                        className="flex items-center px-3 py-1 rounded hover:bg-pink-500/20 transition cursor-pointer"
                        onClick={() => navigate("/cart")}
                    >
                        <Badge content={cart.length} color="blue" placement="top-end">
                            <BsCart2 size={20} color={Colors.White} />
                        </Badge>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
