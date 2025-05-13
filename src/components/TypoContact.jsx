import { Colors } from "../utils/Color";
import { Typography } from "@material-tailwind/react";
import Container from "../utils/Container";
const TypoContact = () => {
    return (
        <Container className="mt-10">
            <Typography
                className="font-bold"
                style={{ color: Colors.NavyBlue, fontSize: 36 }}
            >
                Contact Us
            </Typography>
            <div className="flex gap-1 mt-2">
                <Typography
                    className="font-medium"
                    style={{ fontSize: 16, color: Colors.Black }}
                >
                    Home
                </Typography>
                <Typography
                    className="font-medium"
                    style={{ fontSize: 16, color: Colors.Black }}
                >
                    .
                </Typography>
                <Typography
                    className="font-medium"
                    style={{ fontSize: 16, color: Colors.Black }}
                >
                    Pages
                </Typography>
                <Typography
                    className="font-medium"
                    style={{ fontSize: 16, color: Colors.Black }}
                >
                    .
                </Typography>
                <Typography
                    className="font-medium"
                    style={{ fontSize: 16, color: Colors.Pink }}
                >
                    Contact Us
                </Typography>
            </div>
        </Container>
    );
};

export default TypoContact;
