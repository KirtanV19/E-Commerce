import { Blogs } from "../utils/Data";
import Container from "../utils/Container";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { FaPenNib } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

const LatestBlog = () => {
    return (
        <div className="mt-24">
            <Typography
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
                className="font-bold text-center mt-14"
            >
                Latest Blog
            </Typography>
            <Container className="mt-20">
                <div className="grid grid-cols-3  gap-14">
                    {Blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="w-[370px] h-[493px]  bg-white rounded-2xl shadow-lg flex flex-col  transition-transform"
                        >
                            <div className="w-[370px] h-[255px] flex items-center justify-center mt-6 mb-2 rounded-full bg-[#F6F7FB] shadow-sm">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex-1 flex flex-col align-top ">
                                <div className="flex gap-7 ">
                                    <div className="flex gap-1 items-center">
                                        <FaPenNib size={12} color={Colors.Pink} />
                                        <Typography
                                            className="font-normal"
                                            style={{ color: Colors.NavyBlue, fontSize: 14 }}
                                        >
                                            {blog.author}
                                        </Typography>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                        <FaRegCalendarAlt size={12} color={Colors.Goldish} />
                                        <Typography
                                            className="font-normal"
                                            style={{ color: Colors.NavyBlue, fontSize: 14 }}
                                        >
                                            {blog.date}
                                        </Typography>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-3.5">
                                    <Typography
                                        className="font-semibold  mt-2"
                                        style={{ color: Colors.NavyBlue, fontSize: 22 }}
                                    >
                                        {blog.title}
                                    </Typography>
                                    <Typography
                                        className="font-normal  mt-2"
                                        style={{ fontSize: 16, color: Colors.FooterFont }}
                                    >
                                        {blog.description}
                                    </Typography>
                                    <Typography
                                        className="font-semibold hover:underline hover:cursor-pointer "
                                        style={{ color: Colors.NavyBlue, fontSize: 16 }}
                                    >
                                        Shop Now
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default LatestBlog;
