import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import { Typography } from "@material-tailwind/react";
import { Font0, Font1, Font2, Font3 } from "../utils/Data";
import { useNavigate } from "react-router";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div
            className="h-[479px] mt-32 p-24"
            style={{ backgroundColor: Colors.Footer }}
        >
            <Container className="flex justify-around items-baseline">
                <div>
                    <Typography
                        variant="h3"
                        style={{ color: Colors.Black, fontWeight: 700, fontSize: 34 }}
                    >
                        {" "}
                        Hekto
                    </Typography>
                    <div className="w-[377px] mt-8 flex">
                        <input
                            type="text"
                            className="w-[70%] p-1 "
                            placeholder="Enter Email Address"
                        />

                        <button
                            className="hover:cursor-pointer p-3 rounded-md"
                            style={{ backgroundColor: Colors.Pink }}
                            onClick={() => navigate("/contact")}
                        >
                            <Typography className="font-medium text-white text-base">
                                Sign Up
                            </Typography>
                        </button>
                    </div>
                    <div className="mt-7 flex flex-col gap-2.5">
                        {Font0.map((font, index) => (
                            <Typography
                                key={index}
                                style={{
                                    color: Colors.FooterFont,
                                    fontWeight: 400,
                                    fontSize: 16,
                                }}
                            >
                                {font.title}
                            </Typography>
                        ))}
                    </div>
                </div>
                <div>
                    <Typography
                        variant="lead"
                        className="font-semibold "
                        style={{ color: Colors.Black, fontSize: 22 }}
                    >
                        Categories
                    </Typography>
                    <div className="mt-7 flex flex-col gap-2.5">
                        {Font1.map((font, index) => (
                            <Typography
                                key={index}
                                style={{
                                    color: Colors.FooterFont,
                                    fontWeight: 400,
                                    fontSize: 16,
                                }}
                            >
                                {font.title}
                            </Typography>
                        ))}
                    </div>
                </div>
                <div>
                    <Typography
                        variant="lead"
                        className="font-semibold "
                        style={{ color: Colors.Black, fontSize: 22 }}
                    >
                        Customer Care
                    </Typography>
                    <div className="mt-7 flex flex-col gap-2.5">
                        {Font2.map((font, index) => (
                            <Typography
                                key={index}
                                style={{
                                    color: Colors.FooterFont,
                                    fontWeight: 400,
                                    fontSize: 16,
                                }}
                            >
                                {font.title}
                            </Typography>
                        ))}
                    </div>
                </div>
                <div>
                    <Typography
                        variant="lead"
                        className="font-semibold "
                        style={{ color: Colors.Black, fontSize: 22 }}
                    >
                        Pages
                    </Typography>
                    <div className="mt-7 flex flex-col gap-2.5">
                        {Font3.map((font, index) => (
                            <Typography
                                key={index}
                                style={{
                                    color: Colors.FooterFont,
                                    fontWeight: 400,
                                    fontSize: 16,
                                }}
                            >
                                {font.title}
                            </Typography>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
