import React from "react";
import NavLink from "./header-nav-links/NavLink";
import UserBtn from "./header-user-btns/UserBtn";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav className="homenav navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            {" "}
            <img
              className="header-logo"
              src={require("../../images/log.png")}
              alt=""
            />{" "}
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <Link to="/">     <NavLink name={"Home"} link={"#"} /></Link>
              </li>
              <li className="nav-item">
                <NavLink name={"Airport Pakings"} link={"#"} />
              </li>
              <li className="nav-item">
                <NavLink name={"FAQ's"} link={"#"} />
              </li>
            </ul>
            <div className="d-flex gap-3">
              {/* <UserBtn BtnName={"Book Now"} /> */}
              <Link to="/searchparkingspaces">    <UserBtn BtnName={"Book Now"} changecolor="blue-userbtn" /></Link>
            </div>
            {/* <form className="d-flex header-search-div">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
