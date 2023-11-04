import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 bg-blue-500 min-h-screen sticky top-0">
      <h1 onClick={() => navigate("/")} className="cursor-pointer">
        Navbar
      </h1>
    </div>
  );
};

export default Navbar;
