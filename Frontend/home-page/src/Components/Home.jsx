import React from 'react'
import './Home.css';
import Navbar from './Navbar';
import Logo from '../Images/LOGO.png'
import BoxAnimation from './BoxAnimation';
import Triangle from './Triangle';

const Home = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Navbar></Navbar>
        </div>
        <div className="row">
          <div className="col-md-12 animation-panel">
            <div className="grid">
              <div className="row">
                <div className="col-md-3 lft-animation">
                  <div>
                    <div className='lft-box'></div>
                  </div>
                  <div>
                    <BoxAnimation direction={"moveDown"}></BoxAnimation>
                  </div>
                  <div> 
                    <Triangle color={'blue'}></Triangle>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>WE ARE <span>DATUM</span> CLUB</div>
                  <div>
                    <img src={Logo} alt="" />
                    <span>always fresh</span>
                  </div>
                </div>
                <div className="col-md-3 rgt-animation">
                  <div>
                    <BoxAnimation direction={"moveUp"}></BoxAnimation>
                  </div>
                  <div>
                  <Triangle color={'yellow'}></Triangle>
                  </div>
                  <div>
                    <div className='rgt-box'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
