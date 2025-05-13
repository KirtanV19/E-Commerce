import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import { Typography } from "@material-tailwind/react";
import { FaCircle } from "react-icons/fa";
import { Images } from "../utils/Images";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUS = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: (values, { resetForm }) => {
            // You can handle form submission here (e.g., send to API)
            alert("Message sent!");
            resetForm();
        },
    });

    return (
        <>
            <Container className="w-full h-[245px] flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-1/2 flex flex-col mb-8 md:mb-0">
                    <Typography
                        className="font-bold"
                        style={{ color: Colors.NavyBlue, fontSize: 36 }}
                    >
                        Information About us
                    </Typography>
                    <Typography
                        className="font-semibold mt-3"
                        style={{ fontSize: 16, color: Colors.FooterFont }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                        neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
                        tristique amet erat vitae eget dolor lobortis. Accumsan faucibus
                        vitae lobortis quis bibendum quam.
                    </Typography>
                    <div className="flex gap-3 mt-8">
                        <FaCircle size={25} color={Colors.Purple} />
                        <FaCircle size={25} color={Colors.Pink} />
                        <FaCircle size={25} color={Colors.BlueDiamond} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <Typography
                        className="font-bold"
                        style={{ color: Colors.NavyBlue, fontSize: 36 }}
                    >
                        Contact Way
                    </Typography>
                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-3">
                            <FaCircle size={45} color={Colors.Purple} />
                            <div>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    Tel: 877-67-88-99
                                </Typography>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    E-Mail: shop@store.com
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCircle size={45} color={Colors.Pink} />
                            <div>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    Support Forum
                                </Typography>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    For over 24 hr
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCircle size={45} color={Colors.Apricot} />
                            <div>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    20 Margaret st, London
                                </Typography>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    Great britain, 3NM98-LK
                                </Typography>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaCircle size={45} color={Colors.Green} />
                            <div>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    Free standard shipping
                                </Typography>
                                <Typography
                                    className="font-semibold"
                                    style={{ color: Colors.FooterFont, fontSize: 16 }}
                                >
                                    on all orders.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="flex flex-col md:flex-row justify-between mt-36 gap-8">
                <div className="w-full md:w-3/5">
                    <Typography
                        className="font-bold"
                        style={{ color: Colors.NavyBlue, fontSize: 36 }}
                    >
                        Get In Touch
                    </Typography>
                    <Typography
                        className="font-semibold mt-3"
                        style={{ fontSize: 16, color: Colors.FooterFont }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
                        neque ultrices tristique amet erat vitae eget dolor los vitae
                        lobortis quis bibendum quam.
                    </Typography>
                    <form
                        className="w-full h-auto flex flex-col gap-4 mt-6"
                        onSubmit={formik.handleSubmit}
                    >
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex flex-col w-full sm:w-1/2">
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                                    placeholder="Your Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <span className="text-pink-600 text-xs mt-1">{formik.errors.name}</span>
                                )}
                            </div>
                            <div className="flex flex-col w-full sm:w-1/2">
                                <input
                                    type="text"
                                    name="email"
                                    className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                                    placeholder="Your Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <span className="text-pink-600 text-xs mt-1">{formik.errors.email}</span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <input
                                name="subject"
                                placeholder="Subject"
                                className="w-full h-12 px-3 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                                value={formik.values.subject}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.subject && formik.errors.subject && (
                                <span className="text-pink-600 text-xs mt-1">{formik.errors.subject}</span>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <textarea
                                name="message"
                                placeholder="Type Your Message"
                                className="w-full h-32 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition resize-none"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.message && formik.errors.message && (
                                <span className="text-pink-600 text-xs mt-1">{formik.errors.message}</span>
                            )}
                        </div>
                        <div className="flex">
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: Colors.Pink,
                                    color: Colors.White,
                                    fontWeight: 500,
                                    fontSize: 16,
                                }}
                                className="p-3 w-40 mt-6 rounded-sm hover:bg-pink-600 transition"
                            >
                                Send Mail
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-full md:w-2/5 flex justify-center items-center">
                    <img
                        src={Images.ContactImg}
                        className="bg-cover bg-center bg-no-repeat w-full max-w-[400px] rounded-lg shadow"
                        alt="Contact"
                    />
                </div>
            </Container>
        </>
    );
};

export default ContactUS;
