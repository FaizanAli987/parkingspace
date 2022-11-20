import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import H1tag from '../../typography/H1tag'
import Ptag from '../../typography/Ptag'
import { ServerUrl } from '../../../helper'

function  Herosection() {
	const [airports,setAirports]=useState([])
	const [selectedAirport,setSelectedAirport]=useState('')
	const [dropOffDate,setDropOffDate]=useState('')
	const [dropOffTime,setDropOffTime]=useState('')
	const [pickupDate,setPickupDate]=useState('')
	const [pickupTime,setPickupTime]=useState('')

	const getAllAirports=async()=>{
			fetch(`${ServerUrl}/getAirports`,{
			  method:'GET'
			}).then((r)=>r.json()).then((r)=>{
			  console.log(r?.airports)
			  r?.airports?.map((item,index)=>{
				setAirports(prev=>[...prev,item])
			  })
			}).catch((err)=>{
			  console.log(err)
			})
		  
	}

	const checkAvailability=async(e)=>{
		e.preventDefault()
		const data={
			selectedAirport,
			dropOffDate,
			dropOffTime,
			pickupDate,
			pickupTime
		}

		if(!selectedAirport||!dropOffDate||!dropOffTime||!pickupDate||!pickupTime){
			alert('Fill all fiels')
		}else{
            localStorage.setItem('dataToSearch',JSON.stringify(data))
			window.location.href=`/searchparkingspaces`
		}
	}

	useEffect(()=>{

		getAllAirports()
	},[])
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
											<select className="form-control" value={selectedAirport} onChange={(e)=>{
												setSelectedAirport(e.target.value)
											}}>
												<option>Select Airport</option>
												{airports.map((item,index)=>{
													return(
												<option>{item}</option>

													)
												})}
										
											</select>
											<span className="select-arrow"></span>
										</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Drop Off Date</span>
											<input className="form-control" type="date" value={dropOffDate} required onChange={(val)=>{
											
												setDropOffDate(val.target.value)
											}}/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" value={dropOffTime} required onChange={(val)=>{
											
												setDropOffTime(val.target.value)
											}}/>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Pick Up Date</span>
											<input className="form-control" type="date" value={pickupDate} required onChange={(val)=>{
											
											setPickupDate(val.target.value)
										}}/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" value={pickupTime} required onChange={(val)=>{
											
											setPickupTime(val.target.value)
										}}/>
										</div>
									</div>
								</div>
					
								<div className="form-btn">
									<button className="submit-btn" onClick={checkAvailability}>Check availability</button>
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