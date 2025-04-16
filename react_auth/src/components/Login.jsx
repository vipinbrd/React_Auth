import axios from "axios";
import { useContext, useRef } from "react";
import { store } from "./store/AuthContext";

export function Login() {
    const username = useRef();
    const password = useRef();
    const { token, setToken } = useContext(store)
    console.log(token)

    async function loginHanlder(e) {
        e.preventDefault();
        const user = {
            username: username.current.value,
            password: password.current.value,
        };
        try {
            const response = await axios.post("http://localhost:8888/authenticate", user)
            console.log(response.data)
            setToken({ token: response.data.token })
            localStorage.setItem("token",JSON.stringify(response.data.token))
            alert("login succeed")
        }
        catch (err) {
            console.log(err.response.data)
            alert(err.response.data.message)
        }

    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={loginHanlder}
                className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
                    Login
                </h2>


                <div className="mb-4">
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Mobile Number
                    </label>
                    <input
                        id="phone"
                        type="number"
                        placeholder="Enter your phone number"
                        ref={username}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>


                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        ref={password}
                        className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 transition-all"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
