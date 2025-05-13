import { Typography } from "@material-tailwind/react";
import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
const Searchbar = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-5">
            <Container className="flex items-center justify-between">
                <div className="w-2/5 flex justify-between items-center">
                    <Typography
                        className="font-bold hover:cursor-pointer"
                        variant="h3"
                        onClick={() => navigate("/")}
                        style={{ color: Colors.NavyBlue, fontSize: 34 }}
                    >
                        {" "}
                        Hekto
                    </Typography>
                    <ul className="flex gap-9">
                        <NavLink
                            to="/"
                            style={({ isActive }) => ({
                                color: isActive ? Colors.Pink : "black",
                            })}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/shop"
                            style={({ isActive }) => ({
                                color: isActive ? Colors.Pink : "black",
                            })}
                        >
                            Products
                        </NavLink>
                        <NavLink
                            to="*"
                            style={({ isActive }) => ({
                                color: isActive ? Colors.Pink : "black",
                            })}
                        >
                            Pages
                        </NavLink>
                    </ul>
                </div>
                <div className="w-auto flex">
                    <input type="text" className="shadow-xl w-60" />
                    <button
                        className="p-2 rounded-sm"
                        style={{ backgroundColor: Colors.Pink }}
                    >
                        <IoIosSearch size={24} style={{ color: Colors.White }} />
                    </button>
                </div>
            </Container>
        </div>
    );
};

export default Searchbar;
