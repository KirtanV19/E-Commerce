import React, { useEffect, useState } from "react";
import Container from "../utils/Container";
import { Colors } from "../utils/Color";
import { Typography } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { useNavigate } from "react-router";

const Shop = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products, loading, error, categories, brands, colors } = useSelector(
        (state) => state.products
    );

    // State for filters
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);
    const [sortOption, setSortOption] = useState("");
    const [perPage, setPerPage] = useState(9);
    const [searchValue, setSearchValue] = useState('')
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // Filter logic
    let filteredProducts = products.filter((product) => {
        const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(product.category);
        const matchBrand =
            selectedBrands.length === 0 || selectedBrands.includes(product.brand);
        const matchColor =
            selectedColors.length === 0 || selectedColors.includes(product.color);
        const matchDiscount =
            selectedDiscounts.length === 0 ||
            selectedDiscounts.includes(product.discount);
        const matchPrice =
            selectedPrices.length === 0 ||
            selectedPrices.some((range) => {
                if (range === "0-100") return product.price > 0 && product.price <= 100;
                if (range === "101-200")
                    return product.price > 100 && product.price <= 200;
                if (range === "201-300")
                    return product.price > 200 && product.price <= 300;
                if (range === "300+") return product.price > 300;
                return false;
            });
        const matchSearch =
            searchValue.trim() === "" ||
            product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            (product.brand && product.brand.toLowerCase().includes(searchValue.toLowerCase())) ||
            (product.category && product.category.toLowerCase().includes(searchValue.toLowerCase()));

        return (
            matchCategory &&
            matchBrand &&
            matchColor &&
            matchDiscount &&
            matchPrice &&
            matchSearch
        );
    });

    // Sort logic based on sortOption
    if (sortOption === "price-asc") {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-desc") {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortOption === "title-asc") {
        filteredProducts = [...filteredProducts].sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    } else if (sortOption === "title-desc") {
        filteredProducts = [...filteredProducts].sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    // After filtering and sorting, slice the array for per-page
    const visibleProducts = filteredProducts.slice(0, perPage);

    // Handlers for filter changes
    const handleCheckbox = (value, setState, state) => {
        setState(
            state.includes(value)
                ? state.filter((v) => v !== value)
                : [...state, value]
        );
    };

    return (
        <div className="flex flex-col my-11">
            <Container className="h-11 flex justify-between items-center mb-8">
                <div className="flex flex-col">
                    <Typography
                        className="font-bold"
                        style={{ color: Colors.NavyBlue, fontSize: 22 }}
                    >
                        Ecommerce Accessories & Fashion Items
                    </Typography>
                    <Typography
                        className="font-normal"
                        style={{ fontSize: 12, color: Colors.FooterFont }}
                    >
                        About {filteredProducts.length} results
                    </Typography>
                </div>
                <div className="flex items-center gap-6">
                    <Typography
                        className="font-normal"
                        style={{ fontSize: 16, color: Colors.OffNavyBlue }}
                    >
                        Per Page:{" "}
                        <input
                            type="number"
                            min={1}
                            className="w-[55px] shadow-md rounded px-2 py-1 border border-gray-300"
                            value={perPage}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                setPerPage(value > 0 ? value : 1);
                            }}
                        />
                    </Typography>
                    <Typography
                        className="font-normal"
                        style={{ fontSize: 16, color: Colors.OffNavyBlue }}
                    >
                        Sort By:{" "}
                        <select
                            id="sort-select"
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="rounded px-2 py-1 border border-gray-300"
                        >
                            <option value="">Default</option>
                            <option value="price-asc">Price ↑</option>
                            <option value="price-desc">Price ↓</option>
                            <option value="title-asc">Title ↑</option>
                            <option value="title-desc">Title ↓</option>
                        </select>
                    </Typography>
                    <input
                        type="text"
                        className="h-10 shadow-md rounded px-2 border border-gray-300"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                    />
                </div>
            </Container>
            <Container className="flex justify-between mt-8">
                {/* Sidebar Filters */}
                <div className="flex flex-col gap-6 min-w-[220px] bg-white rounded-lg shadow-md p-4">
                    {/* Product Brand */}
                    <div>
                        <Typography
                            className="font-bold underline mb-1"
                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                        >
                            Product Brand
                        </Typography>
                        {categories.map((category, index) => (
                            <div key={index} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-purple-500"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() =>
                                        handleCheckbox(
                                            category,
                                            setSelectedCategories,
                                            selectedCategories
                                        )
                                    }
                                />
                                <label
                                    className="font-normal"
                                    style={{ color: Colors.ShopList, fontSize: 16 }}
                                >
                                    {category}
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Discount Offer */}
                    <div>
                        <Typography
                            className="font-bold underline mb-1"
                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                        >
                            Discount Offer
                        </Typography>
                        {["3", "11", "29"].map((discount, idx) => (
                            <div key={idx} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-pink-500"
                                    checked={selectedDiscounts.includes(Number(discount))}
                                    onChange={() =>
                                        handleCheckbox(
                                            Number(discount),
                                            setSelectedDiscounts,
                                            selectedDiscounts
                                        )
                                    }
                                />
                                <label
                                    className="font-normal"
                                    style={{ color: Colors.ShopList, fontSize: 16 }}
                                >
                                    {discount}% Discount
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Categories */}
                    <div>
                        <Typography
                            className="font-bold underline mb-1"
                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                        >
                            Categories
                        </Typography>
                        {brands.map((brand, index) => (
                            <div key={index} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-pink-500"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() =>
                                        handleCheckbox(brand, setSelectedBrands, selectedBrands)
                                    }
                                />
                                <label
                                    className="font-normal"
                                    style={{ color: Colors.ShopList, fontSize: 16 }}
                                >
                                    {brand}
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Price Filter */}
                    <div>
                        <Typography
                            className="font-bold underline mb-1"
                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                        >
                            Price Filter
                        </Typography>
                        {[
                            { label: "$0 - $100", value: "0-100" },
                            { label: "$101 - $200", value: "101-200" },
                            { label: "$201 - $300", value: "201-300" },
                            { label: "$300+", value: "300+" },
                        ].map((price, idx) => (
                            <div key={idx} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-pink-500"
                                    checked={selectedPrices.includes(price.value)}
                                    onChange={() =>
                                        handleCheckbox(
                                            price.value,
                                            setSelectedPrices,
                                            selectedPrices
                                        )
                                    }
                                />
                                <label
                                    className="font-normal"
                                    style={{ color: Colors.ShopList, fontSize: 16 }}
                                >
                                    {price.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    {/* Color */}
                    <div>
                        <Typography
                            className="font-bold underline mb-1"
                            style={{ color: Colors.NavyBlue, fontSize: 20 }}
                        >
                            Color
                        </Typography>
                        {colors.map((color, index) => (
                            <div key={index} className="flex items-center gap-2 mb-1">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-pink-500"
                                    checked={selectedColors.includes(color)}
                                    onChange={() =>
                                        handleCheckbox(color, setSelectedColors, selectedColors)
                                    }
                                />
                                <label
                                    className="font-normal"
                                    style={{ color: Colors.ShopList, fontSize: 16 }}
                                >
                                    {color}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full ml-8">
                    {visibleProducts.length === 0 ? (
                        <div className="col-span-3 flex justify-center items-center h-64">
                            <Typography
                                className="font-bold"
                                style={{ color: Colors.Pink, fontSize: 24 }}
                            >
                                No products found.
                            </Typography>
                        </div>
                    ) : (
                        visibleProducts.map((product) => (
                            <div
                                key={product.id}
                                className="h-[340px] w-[220px] flex flex-col hover:bg-blue-50 hover:transition-all bg-white shadow-md rounded-lg p-2 m-2 cursor-pointer"
                                onClick={() =>
                                    navigate(`/products/${product.id}`, { state: { product } })
                                }
                            >
                                <div className="w-full h-[160px] flex items-center justify-center mb-2">
                                    <img
                                        src={product.image}
                                        className="bg-cover w-full h-full bg-no-repeat bg-center rounded"
                                        alt={product.brand}
                                    />
                                </div>
                                <div className="flex flex-col flex-1 justify-between">
                                    <Typography
                                        className="font-bold"
                                        style={{ color: Colors.NavyBlue, fontSize: 18 }}
                                    >
                                        {product.brand}
                                    </Typography>
                                    <Typography
                                        className="font-normal"
                                        style={{ color: Colors.NavyBlue, fontSize: 14 }}
                                    >
                                        {product.category}
                                    </Typography>
                                    <div className="flex justify-between items-end w-full mt-2">
                                        <Typography
                                            className="font-normal"
                                            style={{ color: Colors.NavyBlue, fontSize: 16 }}
                                        >
                                            {product.discount ? (
                                                <>
                                                    <span className="text-pink-600 font-bold">
                                                        ${product.discount}
                                                    </span>
                                                    <span className="line-through ml-2 text-gray-400 text-sm">
                                                        ${product.price}
                                                    </span>
                                                </>
                                            ) : (
                                                <>${product.price}</>
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Shop;
