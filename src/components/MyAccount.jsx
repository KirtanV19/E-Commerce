import React, { useState } from "react";
import Container from "../utils/Container";
import { Typography } from "@material-tailwind/react";
import { Colors } from "../utils/Color";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyAccount = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        setError("");
        setLoading(true);

        if (!username || !password) {
            setError("Username and password are required.");
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post("https://fakestoreapi.com/auth/login", {
                username,
                password,
            });
            localStorage.setItem("token", response.data.token);
            navigate("/");
        } catch (err) {
            setError("Invalid credentials. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-pink-500 transition"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
