import { useReducer, useState } from "react";
import { useNavigate} from "react-router-dom";

export function SignUp() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate=useNavigate()
    function reducer(state, action) {
        switch (action.type) {
            case "NAME": return { ...state, username: action.value }
            case "EMAIL": return { ...state, email: action.value }
            case "PHONE": return { ...state, mobileNumber: action.value }
            case "PASSWORD": return { ...state, password: action.value }
            default: return state;
        }
    }
    const [userData, dispatch] = useReducer(reducer, {})
    async function signUpHandler(e) {
        e.preventDefault()
  try{ 
        const response = await fetch("http://localhost:8888/register?otp=12345", {
            method:"POST",
            body: JSON.stringify(userData),
            headers:{ 
            "Content-Type":"application/json"
            }

        })
        if(!response.ok){
            throw new Error("something went wrong")
        }
        const data=await response.json()
        alert("Registration success")
      
    }catch(error){
       alert("registration failed")

    }

   setIsLoading(false)
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form  onSubmit={signUpHandler} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>


                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input onChange={(e) => { dispatch({ type: "NAME", value: e.target.value }) }}
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>


                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input onChange={(e) => { dispatch({ type: "EMAIL", value: e.target.value }) }}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input onChange={(e) => { dispatch({ type: "PHONE", value: e.target.value }) }}
                        id="phone"
                        type="number"
                        placeholder="Enter your phone number"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>


                <div className="mb-6">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input onChange={(e) => { dispatch({ type: "PASSWORD", value: e.target.value }) }}
                        id="password"
                        type="password"
                        placeholder="Create your password"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>


                <button
                    type="submit"
                    onClick={() => setIsLoading(true)}
                    className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                    {isLoading ? 'Signing up...' : 'Sign Up'}
                </button>
            

                {isLoading && <p className="mt-2 text-center text-sm text-gray-500">Sending request...</p>}

                <button onClick={()=>{navigate("/login")}}
                    type="button"
                    className="w-full mt-4 bg-gray-300 text-purple-600 p-2 rounded-md hover:bg-gray-400"
                >
                    Login with Existing Account
                </button>
            </form>
        </div>
    );
}
