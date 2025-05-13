import { Colors } from "../utils/Color";
import { Typography } from "@material-tailwind/react";
import Container from "../utils/Container";
import { Offers } from "../utils/Data";

const Shopex = () => {
    return (
        <div>
            <Typography
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
                className="font-bold text-center mt-14"
            >
                What Shopex Offer!
            </Typography>
            <Container className="mt-14">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-7 justify-center">
                    {Offers.map((offer, index) => (
                        <div
                            key={index}
                            className="w-[270px] h-[320px] bg-white rounded-2xl shadow-lg flex flex-col items-center transition-transform hover:scale-105"
                        >
                            <div className="h-[140px] w-[140px] flex items-center justify-center mt-6 mb-2 rounded-full bg-[#F6F7FB] shadow-sm">
                                <img
                                    src={offer.icon}
                                    alt={offer.title}
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-center px-4">
                                <Typography
                                    className="font-semibold text-center mt-2"
                                    style={{ color: Colors.NavyBlue, fontSize: 22 }}
                                >
                                    {offer.title}
                                </Typography>
                                <Typography
                                    className="font-medium text-center mt-2"
                                    style={{ fontSize: 16, color: Colors.FooterFont }}
                                >
                                    {offer.description}
                                </Typography>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Shopex;
