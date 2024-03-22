import React from 'react';
import Navber from '../Navber/Navber';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const HeaderFooter = () => {
    return (
        <div>
            <Navber> </Navber>
            <Outlet> </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HeaderFooter;