import logo from "../../assets/logo/logo.png";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex p-3.5 items-center">
      <div className="flex items-center w-1/3 justify-between">
        <div className="flex gap-1.5 items-center">
          <img src={logo} alt="logo" className="w-[40px]" />
          <h1>SkillSwap</h1>
        </div>
        <div>
          <ul className="flex gap-[20px]">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>Matching</li>
            <li>Message</li>
            <li>Profile</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
