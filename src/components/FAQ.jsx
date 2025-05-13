import { Typography } from "@material-tailwind/react";
import { FAQs } from "../utils/Data";
import { Colors } from "../utils/Color";
import Container from "../utils/Container";

const FAQ = () => {
    return (
        <div>
            <Container className="w-2/5 mt-28">
                <Typography
                    className="font-bold"
                    style={{ color: Colors.NavyBlue, fontSize: 36 }}
                >
                    Generel Information
                </Typography>
                <div className="mt-16 w-2/3">
                    {FAQs.map((faq, index) => (
                        <div key={index}>
                            <Typography
                                className="font-bold mt-16"
                                style={{ color: Colors.NavyBlue, fontSize: 17 }}
                            >
                                {faq.title}
                            </Typography>
                            <Typography
                                className="font-normal mt-4"
                                style={{ color: Colors.DiscountFont, fontSize: 16 }}
                            >
                                {faq.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default FAQ;
