import { Outlet, NavLink } from "react-router-dom";
import "./Arrivals.css";
import SectionHeading from "../../common/section-heading/SectionHeading";

function Arrivals() {
  return (
    <div className="Arrivals">
      <div className="container">
        <SectionHeading
          title="New"
          mainTitle="Arrivals"
          decription="Shop online for new arrivals and get free shipping!"
        >
          <div className="nested-links shadow rounded p-2 ">
            <NavLink to={""} end>
              All{" "}
            </NavLink>
            <NavLink to={"snakes"}> Snacks & Spices </NavLink>
            <NavLink to={"friuts"}> Fruits </NavLink>
            <NavLink to={"vege"}> Vegetables </NavLink>
          </div>
        </SectionHeading>

        {/* This is where nested routes content will render */}
        <Outlet />
      </div>
    </div>
  );
}

export default Arrivals;
