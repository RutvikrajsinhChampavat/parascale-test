import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/login");
  };

  return (
    <div className="flex justify-between p-3 bg-black drop-shadow-2xl sticky top-0">
      <h1 className="text-white">H</h1>
      <div className="space-x-2">
        <button
          className="bg-white px-2 rounded-sm"
          onClick={() => navigate("/reserved-books")}
        >
          See books
        </button>
        <button className="bg-white px-2 rounded-sm" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
