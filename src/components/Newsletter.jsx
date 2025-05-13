import { Images } from "../utils/Images";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";

const Newsletter = () => {
    return (
        <div
            className="h-[462px]  flex items-center justify-center"
            style={{
                backgroundImage: `url(${Images.NewsletterImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="h-[40%] w-[35%] flex flex-col justify-between  ">
                <div>
                    <Typography
                        className="font-bold"
                        style={{ color: Colors.NavyBlue, fontSize: 35 }}
                    >
                        Get Leatest Update By Subscribe{" "}
                        <span
                            className="font-bold "
                            style={{ color: Colors.NavyBlue, fontSize: 35 }}
                        >
                            Our Newslater
                        </span>
                    </Typography>
                </div>
                <div>
                    <button
                        style={{ backgroundColor: Colors.Pink }}
                        className="p-3 w-[30%] rounded-sm place-self-center"
                    >
                        <Typography
                            style={{ color: Colors.White, fontWeight: 500, fontSize: 16 }}
                            className="place-self-center"
                        >
                            Shop Now
                        </Typography>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
