import { Outlet,NavLink } from 'react-router-dom';
import './Arrivals.css'
import SectionHeading from '../../common/section-heading/SectionHeading';
import All from './nestedComponents/All/All.jsx'
import Nested1 from './nestedComponents/Nested1/Nested1.jsx'
import Nested2 from './nestedComponents/Nested2/Nested2.jsx';
import Nested3 from './nestedComponents/Nested3/Nested3.jsx';



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
            <NavLink to={""}>All </NavLink>
            <NavLink to={"snakes"}> Snacks & Spices </NavLink>
            <NavLink to={"friuts"}> Fruits </NavLink>
            <NavLink to={"vege"}> Vegetables </NavLink>
          </div>
        </SectionHeading>

        <Outlet />
      </div>
    </div>
  );
}

export default Arrivals