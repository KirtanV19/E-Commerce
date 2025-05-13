import React from "react";
import { Images } from "../utils/Images";

const Hero = () => {
    return (
        <div
            className="mt-5 h-[764px]"
            style={{
                backgroundImage: `url(${Images.CarouselImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        />
    );
};

export default Hero;
