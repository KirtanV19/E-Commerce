import { useState, useEffect } from "react";
import Container from "../utils/Container";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";

const MyAccount = () => {

    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);
    const [form, setForm] = useState({ username: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(form));
    };

    if (user) return <Navigate to="/" />;
    console.log(user);

    return (
        <Container
            maxWidth="xs"
            className="flex flex-col items-center my-12 p-8 bg-white rounded-xl shadow-lg"
        >
            <form className="w-full" onSubmit={handleSubmit}>
                <Typography
                    className="font-bold mb-2 text-center"
                    style={{ color: Colors.Black, fontSize: 32 }}
                >
                    Login
                </Typography>
                <Typography
                    className="font-normal mb-8 text-center"
                    style={{ color: Colors.FooterFont, fontSize: 17 }}
                >
                    Please login using account detail below.
                </Typography>
                {error && (
                    <span className="text-pink-600 text-xs mb-4 block text-center">
                        {error}
                    </span>
                )}
                <div className="flex flex-col gap-5 w-full">
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                    />

                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                        value={form.password}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    <button
                        className="h-12 rounded bg-pink-500 hover:bg-pink-600 transition"
                        style={{ backgroundColor: Colors.Pink }}
                        type="submit"
                        disabled={loading}
                    >
                        <Typography
                            className="font-bold text-white"
                            style={{ fontSize: 17 }}
                        >
                            {loading ? "Signing In..." : "Sign In"}
                        </Typography>
                    </button>
                </div>
            </form>
        </Container>
    );
};

export default MyAccount;
