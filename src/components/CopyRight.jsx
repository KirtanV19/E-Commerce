import { Colors } from "../utils/Color";
import Container from "../utils/Container";
import { Typography } from "@material-tailwind/react";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const CopyRight = () => {
    return (
        <div className="h-[53px]" style={{ backgroundColor: Colors.Copyright }}>
            <Container maxWidth="md" className="flex justify-between">
                <Typography
                    className="font-semibold"
                    style={{ fontWeight: 16, color: Colors.CopyrightFont }}
                >
                    ©Webecy - All Rights Reserved
                </Typography>
                <div className="flex gap-2.5">
                    <div
                        className="w-5 h-5 rounded-xl relative"
                        style={{ backgroundColor: Colors.NavyBlue }}
                    >
                        {" "}
                        <FaFacebookF className="absolute top-1" color={Colors.White} size={18} />{" "}
                    </div>
                    <div
                        className="w-5 h-5 rounded-xl relative"
                        style={{ backgroundColor: Colors.NavyBlue }}
                    >
                        {" "}
                        <BsInstagram className="absolute top-0.5 left-0.5" color={Colors.White} size={14} />
                    </div>
                    <div
                        className="w-5 h-5 rounded-xl relative"
                        style={{ backgroundColor: Colors.NavyBlue }}
                    >
                        <FaTwitter className="absolute top-0.5 left-0.5" color={Colors.White} size={16} />{" "}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CopyRight;
