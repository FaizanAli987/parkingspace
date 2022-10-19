import React from 'react'
function Header() {
  return (
    <>

<header className="dashnav navbar navbar-dark sticky-top flex-md-nowrap  ">
  <a className="navbar-brand col-md-3 col-lg-2 me-0  fs-6" href="#">RapidParkingDeals</a>
  <button className="navbar-toggler  d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <input className="form-control form-control-dark w-50 rounded-0 border-0" type="text" placeholder="Search" aria-label="Search"/> */}
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
    <div className="dropdown">
  <button className=" btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src={require('../../../images/banner3.jpg')} /> 
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Signout</a></li>
  
  </ul>
</div>
      {/* <a className="nav-link px-3" href="#">Sign out</a> */}
    </div>
  </div>
</header>

    </>
  )
}

export default Header