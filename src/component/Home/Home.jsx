import './Home.css'
import Heading from '../Heading/Heading';
import Explore from '../Explore/Explore';
import Deal from '../Deal/Deal';
import Arrivals from '../Arrivals/Arrivals';
import Vendors from'../Vendors/Vendors';
import Footer from '../../common/Footer/Footer';

function Home() {
  return (
    <div className="Home">
      
      <Heading/>
      <Explore/>
      <Deal/>
      <Arrivals/>
      <Vendors/>
      
      
    </div>
  );
}

export default Home