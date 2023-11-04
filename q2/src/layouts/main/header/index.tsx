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
      Header
      <button className="bg-white px-2 rounded-sm" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Header;
