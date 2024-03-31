
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const HeaderFooter = () => {
    return (
        <div>
            <div className="h-16">
            <Navber> </Navber>
            </div>
            <Outlet> </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HeaderFooter;