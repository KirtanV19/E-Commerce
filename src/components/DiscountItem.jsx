import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Colors } from "../utils/Color";
import {
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { fetchProducts } from "../redux/slices/productSlice";
import Container from "../utils/Container";
import { MdDone } from "react-icons/md";
import { useNavigate } from "react-router";

const DiscountItem = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading, error, data } = useSelector(
        (state) => state.products.discountItem
    );

    const [activeTab, setActiveTab] = useState(data.map((item) => item.brand)[0]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    useEffect(() => {
        if (data && data.length > 0) {
            setActiveTab(data[0].brand);
        }
    }, [data]);

    return (
        <div>
            <Typography
                style={{ color: Colors.NavyBlue, fontSize: 42 }}
                className="font-bold text-center mt-14"
            >
                Discount Item
            </Typography>
            <Container maxWidth="md" className="mt-8">
                <Tabs value={activeTab}>
                    <TabsHeader
                        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                        indicatorProps={{
                            className:
                                "bg-transparent border-b-2 border-pink-700 shadow-none rounded-none",
                        }}
                    >
                        {data.map((item) => (
                            <Tab
                                key={item.id}
                                value={item.brand}
                                onClick={() => setActiveTab(item.brand)}
                                className={activeTab === item.brand ? "text-pink-500" : ""}
                            >
                                {item.brand}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map((item) => (
                            <TabPanel key={item.id} value={item.brand}>
                                <div className="w-full h-[575px] flex justify-between items-center">
                                    <div className="w-1/2 h-full flex flex-col justify-center items-start">
                                        <Typography
                                            className="font-bold"
                                            style={{ fontSize: 35, color: Colors.NavyBlue }}
                                        >
                                            {item.discount}% Discount Of All Products
                                        </Typography>
                                        <Typography
                                            className="font-normal"
                                            style={{ fontSize: 21, color: Colors.Pink }}
                                        >
                                            {item.model}
                                        </Typography>
                                        <Typography
                                            className="font-normal"
                                            style={{ fontSize: 17, color: Colors.DiscountFont }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <div className="flex items-center gap-2 mt-7">
                                            <div className="flex items-center">
                                                <MdDone size={16} color={Colors.DiscountTick} />
                                                <Typography
                                                    className="font-normal"
                                                    style={{ color: Colors.DiscountFont, fontSize: 16 }}
                                                >
                                                    Material expose like metals
                                                </Typography>
                                            </div>
                                            <div className="flex items-center">
                                                <MdDone size={16} color={Colors.DiscountTick} />
                                                <Typography
                                                    className="font-normal"
                                                    style={{ color: Colors.DiscountFont, fontSize: 16 }}
                                                >
                                                    Simple neutral colours.
                                                </Typography>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2.5">
                                            <div className="flex items-center">
                                                <MdDone size={16} color={Colors.DiscountTick} />
                                                <Typography
                                                    className="font-normal"
                                                    style={{ color: Colors.DiscountFont, fontSize: 16 }}
                                                >
                                                    Simple neutral colours.
                                                </Typography>
                                            </div>
                                            <div className="flex items-center">
                                                <MdDone size={16} color={Colors.DiscountTick} />
                                                <Typography
                                                    className="font-normal"
                                                    style={{ color: Colors.DiscountFont, fontSize: 16 }}
                                                >
                                                    Material expose like metals
                                                </Typography>
                                            </div>
                                        </div>

                                        <button
                                            className="font-medium text-white text-base p-2 rounded-md mt-4 h-14 w-[150px]"
                                            style={{ backgroundColor: Colors.Pink }}
                                            onClick={() =>
                                                navigate(`/products/${item.id}`, {
                                                    state: { product: item },
                                                })
                                            }
                                        >
                                            <Typography
                                                className="font-normal"
                                                style={{ fontSize: 17, color: Colors.White }}
                                            >
                                                Shop Now
                                            </Typography>
                                        </button>
                                    </div>
                                    <div className="w-1/2 h-full">
                                        <img
                                            src={item.image}
                                            alt={item.brand}
                                            className="w-full h-full bg-cover bg-center bg-no-repeat"
                                        />
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </Container>
        </div>
    );
};

export default DiscountItem;
