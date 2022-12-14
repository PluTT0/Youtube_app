import React from 'react';
import './styles/NavBar.sass';
const NavBar = () => {
  return (
    <>
        <section className="navBar">
            <div className='navbar-right'>
              <div className='logo'>Logo</div>
            </div>
            <div className='navbar-center'>
              <div className='appName'>
                Youtube Search
              </div>
            </div>
            <div className='navbar-left'>
              <div className='button-wrapper'>
                <button className="btn">Filter</button>
                <button className="btn">Order</button>
                <button className="btn">Favorites</button>
              </div>
            </div>
        </section>
    </>
  );
};

export default NavBar;