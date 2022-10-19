import React from "react";
import Footerheading from "../typography/Footerheading";
import Ptag from "../typography/Ptag";
import { NavLink } from "react-router-dom";
import Parasmall from "../typography/Parasmall";


function Footer() {
  return (
    <>
      <footer>
        <div className="sec-box">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              {/* <div className="footerlogo">
        <img src={require('../../images/log.jpg')} alt="" />
        </div> */}
              <Footerheading title={"RapidParkingDeals"} />

            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Footerheading title={"More"} />
              <ul>
              <a href="#" >   <li>Careers</li></a>
              <a href="#" >   <li>Privacy Policy</li></a>
              <a href="#" >   <li>FAQ's</li></a>
              <a href="#" >   <li>Terms</li></a>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Footerheading title={"Contact Us"} />
              <ul>
              <a href="#" >   <li><i className="fas fa-envelope"></i> info@rapidparkingdeals.co.uk</li> </a>
              <a href="#" >    <li><i className="fas fa-phone-alt"></i> +92-000666111</li> </a>
              <a href="#" >   <li><i className="fas fa-location-arrow"></i> UK</li> </a>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12">
              <Footerheading title={"How it works"} />
              <ul>
                <li>Park by bus with RapidParkingDeals</li>
                <li>All Parking Spaces </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-lg-12">
              <Ptag para={"Copyright 2022 @ RapidParkingDeals. All rights reserved | Powered By Beacontechh "} />
            </div>
            {/* <div className="col-lg-4"></div> */}
            {/* <div className="col-lg-4"></div> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
