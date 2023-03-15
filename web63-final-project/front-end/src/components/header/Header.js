import { useSelector, useDispatch } from "react-redux";
import { setIsLogin } from "../../redux/loginSlice";
import { useNavigate, Link } from "react-router-dom";

import { Dropdown, Button } from "antd";
import { logOut } from "../../redux/apiRequest";
import "./header.css";
import golobeLogo from "../../assets/images/Logo.png";
import { HeartFilled } from "@ant-design/icons";
import { BedIcon, PlaneIcon } from "../../assets/icon-components/IconComponent";

const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  const user = useSelector((state)=> state.auth.login.currentUser);
  
  const accessToken = user?.accessToken;
  const handleLogout = () => {
    
    logOut(dispatch,navigate, accessToken);
   
  };
  const handleAccount = () => {
    navigate("/account");
  };
  const handleFindFlight = () => {
    navigate("/flight/search");
  };
  const handleClickLogo = () => {
    navigate("/");
  };
  const items = [
    {
      label: (
        <div target="_blank" rel="noopener noreferrer" onClick={handleAccount}>
          account information
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div target="_blank" rel="noopener noreferrer" >
          log out
        </div>
      ),
      key: "1",
    },
  ];
  return (
    <div className="Header">
      <div className="flight-stay">
        <div className="findFlight" onClick={handleFindFlight}>
          <PlaneIcon />
          <p className="montserrat-semibold">Find Flight</p>
        </div>
        <div className="findStay">
          <BedIcon />
          <Link to="/hotel-search" className="montserrat-semibold link-style">
            Find Stays
          </Link>
        </div>
      </div>
      <img
        src={golobeLogo}
        alt="golobe-logo"
        className="golobe-logo"
        onClick={handleClickLogo}
        style={{ cursor: "pointer" }}
      />
      {user ? (<h1 onClick={handleLogout}>Logout</h1>) : (
        <div className="login-signUp">
          <Button size="large">
            <Link to="/login" className="montserrat-semibold">
              Login
            </Link>
          </Button>
          <Button size="large">
            <Link to="/register" className="montserrat-semibold">
              <>Sign up</>
            </Link>
          </Button>
        </div>
      )
      
      }
    </div>
  );
};

export default Header;
