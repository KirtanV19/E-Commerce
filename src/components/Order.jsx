import Container from "../utils/Container";
import { Images } from "../utils/Images";
import OrderButton from "./OrderButton";

const Order = () => {
    return (
        <div>
            <Container maxWidth="md" className="mt-24">
                <img
                    src={Images.CompletedOrderImg}
                    className="bg-cover bg-center bg-no-repeat"
                />
                <OrderButton />
            </Container>
        </div>
    );
};

export default Order;
