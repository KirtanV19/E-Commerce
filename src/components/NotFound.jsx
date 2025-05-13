import { Images } from "../utils/Images";
import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router";
import { Typography } from "@material-tailwind/react";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Container
            maxWidth="md"
            className="flex flex-col items-center justify-center h-[677px] p-2"
        >
            <div
                className="w-full h-[400px] rounded-lg shadow-md mb-8"
                style={{
                    backgroundImage: `url(${Images.ErrorImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <Typography
                className="font-bold mb-4 text-center"
                style={{ color: Colors.NavyBlue, fontSize: 24 }}
            >
                oops! The page you requested was not found!
            </Typography>

            <button
                className="px-8 py-3 rounded bg-pink-500 hover:bg-pink-600 transition font-semibold text-white text-lg"
                style={{ backgroundColor: Colors.Pink }}
                onClick={() => navigate("/")}
            >
                Back To Home
            </button>
        </Container>
    );
};

export default NotFound;
