import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Shop></Shop> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;