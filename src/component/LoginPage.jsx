import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "./utils/Logo";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);  //for checking user wants to login or register
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email:"",
    password: "",
    confirmPassword: "",
  });


  const navigate = useNavigate();
  const { isAuthenticated, SetIsAuthenticated } = useContext(AuthContext)

  if (isAuthenticated) return <Navigate to="/" />



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isLogin && formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match!");
    }

    try {
      const res = await fetch(
       
        `http://localhost:3000/user/${isLogin ? "login" : "register"}`,
        {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: formData.username,
            password: formData.password,
            email:formData.email,
          }),
        }
      );
 console.log(isLogin)
      if (!res.clone().ok) {
        toast("inavalid credentials")
        throw new Error(res.clone().json().error || "Something went wrong");
      }

      const data = await res.json();


      data.status ? SetIsAuthenticated(true) : SetIsAuthenticated(false);
      toast(isLogin ? "Login Successful!" : "Registration Successful!")
      console.log("✅ Success:", data);

    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleAuth = async()=>{
    try {
      window.location.href = "http://localhost:3000/auth/google";



  // if (!res.clone().ok) {
  //       toast("inavalid credentials")
  //       throw new Error(res.clone().json().error || "Something went wrong");
  //     }

  //     const data = await res.json();

  //     data.status ? SetIsAuthenticated(true) : SetIsAuthenticated(false);
  //     toast(isLogin ? "Login Successful!" : "Registration Successful!")
  //     console.log("✅ Success:", data);
    } catch (error) {
      console.log(error);
      setError(error.message);

    }
  }

  return (
    <>
     
      <div className="  relative flex items-center justify-center min-h-screen bg-gradient-to-b from-black to-neutral-900">
<Logo />
        <div className="w-full max-w-md bg-neutral-950 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            {isLogin ? "Login" : "Register"}
          </h2>

          {error && (
            <div className="mb-3 text-red-500 text-sm bg-red-950/40 p-2 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* username */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </div>

            {/* email */}
         {
          !isLogin && ( 
              <div>
              <label className="block text-gray-300 text-sm mb-1">Username</label>
              <input
                type="text"
               name="username"
                className="w-full p-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            )
         }

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                className="w-full p-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {/* Confirm Password (only Register) */}
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full p-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:border-white"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-white text-black py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </form>

          {/* Toggle */}
          <p className="text-gray-400 text-sm text-center mt-4">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-blue-400 hover:underline"
              onClick={() => setIsLogin((prev)=>!prev)}
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </p>
          <p className="text-gray-400 text-sm text-center mt-4">
            <button
            className="hover-underline"
            onClick={handleGoogleAuth}>
        Continue with google ?
            </button>
          </p>
        </div>
      </div>

     
    </>

  );



}