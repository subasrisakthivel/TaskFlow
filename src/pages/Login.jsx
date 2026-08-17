import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const[email, setEmail]=useState("");
   const[password, setPassword]=useState("");
   const navigate = useNavigate();

   const handleEmailChange =(e)=>{
   setEmail(e.target.value)
   
};
 
const handlePassChange =(e)=>{
  setPassword(e.target.value)
};

const handleLogin = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter details 😴");
    return;
  }

  try {
    const response = await fetch(
      "http://localhost:3000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (response.ok) {
      localStorage.setItem("token", data.token);

      alert("Login Successful ✅");

      navigate("/dashboard");
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.log(error);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="border rounded-3xl px-16 py-10 shadow-2xl bg-white">
        <form  onSubmit={handleLogin} 
        className="flex flex-col gap-4">
          <h1 className="text-center text-gray-900 font-bold text-2xl">
            TaskFlow
          </h1>
          <p className="text-center text-gray-600">Welcome Back!</p>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
            onChange={handleEmailChange}
            value={email}
              type="email"
              placeholder="Enter your email"
              className="border rounded-2xl p-2"
            />
            <label htmlFor="">Password</label>
            <input 
            onChange={handlePassChange}
            value={password}
            type="password" 
            className="border rounded-2xl p-2" 
            />
          </div>

          <button 
          
          type="submit"
          className="border rounded-2xl  bg-blue-800 text-white py-2 px-2  hover:bg-blue-950 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
