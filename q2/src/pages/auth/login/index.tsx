import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
    Cookies.set("accessToken", "token");
  };

  return (
    <div className="flex flex-col container space-y-2 w-1/5 mx-auto mt-14">
      Login
      <input
        type="text"
        placeholder="Username"
        className="border border-black"
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-black"
      />
      <button
        onClick={handleLogin}
        className="bg-black text-white px-2 rounded-sm"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
