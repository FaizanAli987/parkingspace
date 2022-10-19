import React from 'react'
import { Fragment } from 'react'
import H1tag from '../../typography/H1tag'
import Ptag from '../../typography/Ptag'

function  Herosection() {
  return (
    <>   
      <section className="image-with-text hero-section ">
    <div className="sec-box">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="text-box">
            <H1tag
              title={
                <Fragment>
                  Welcome to  
                  <br /> 
                  <span className="heading-style">RapidPakingDeals</span>
                </Fragment>
              }
            />
            <Ptag
              para={
                <Fragment>
                  Your one stop solution for trips , tours. Join{" "}
                  <a href="#">RapidParkingDeals</a>, UK's biggest car parking
                  service.
                </Fragment>
              }
            />
          <div className="hero-bg">
          <img src={require("../../../images/bg.png")} alt="" />
          </div>
            {/* <div className="download-links">
              <img src={require("../../../images/playstore.webp")} alt="" />
              <img src={require("../../../images/appstore.webp")} alt="" />
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="image-box">
          <div className="booking-form">
							<form>
              <div className="form-group">
											<span className="form-label">Select Airport</span>
											<select className="form-control">
												<option>Select Airport</option>
												<option>Airport Parking 1</option>
												<option>Airport Parking 2</option>
												<option>Airport Parking 3</option>
												<option>Airport Parking 4</option>
												<option>Airport Parking 5</option>
												<option>Airport Parking 6</option>
										
											</select>
											<span className="select-arrow"></span>
										</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Drop Off Date</span>
											<input className="form-control" type="date" required/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" required/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Pick Up Date</span>
											<input className="form-control" type="date" required/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" required/>
										</div>
									</div>
								</div>
					
								<div className="form-btn">
									<button className="submit-btn">Check availability</button>
								</div>
							</form>
						</div>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default Herosection