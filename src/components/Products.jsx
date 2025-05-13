import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../redux/slices/postSlice'

const Products = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return <div>Products</div>;
};

export default Products;
