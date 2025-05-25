import './Header.css'
import Info from './Info/Info';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';

function Header() {
  return (
    <div className="Header">
      <Info/>
      <Logo/>
      <Navbar/>

    </div>
  );
}

export default Header