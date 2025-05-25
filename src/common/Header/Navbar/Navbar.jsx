import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate =useNavigate();
  return (
    <nav>
      {/* <hr /> */}
      <ul className="nav justify-content-center mb-2">
        <li className="nav-item">
          <NavLink to={"/"} end className="nav-link " aria-current="page">
            home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"/about"} className="nav-link">
            about
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"categories"} className="nav-link">
            categories
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"products"} className="nav-link">
            products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={"cart"} end className="nav-link">
            pages
          </NavLink>
          <div className="dropDown-menu">
            <p onClick={() => navigate("/signup")}>Register</p>
            <p onClick={() => navigate("/login")}>Login</p>
            <p onClick={() => navigate("/cart")}>Cart</p>
            <p onClick={() => navigate("/compare")}>Compare</p>
            <p onClick={() => navigate("/wishlist")}>wishlist</p>
          </div>
        </li>
        <li className="nav-item">
          <NavLink to={"contact"} className="nav-link">
            contact
          </NavLink>
        </li>
      </ul>
      {/* <hr /> */}
    </nav>
  );
}

export default Navbar;
