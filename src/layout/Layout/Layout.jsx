import './Layout.css'
import Header from '../../common/Header/Header';
import Footer from'../../common/Footer/Footer';
import{Outlet} from 'react-router-dom'
import React from 'react';
import Tools from './../../component/Tools/Tools'
 
function Layout() {
  return (
    <div className="Layout">
      <Header />
    
      <Outlet />
      <Footer />
      <Tools />
    </div>
  );
}

export default Layout