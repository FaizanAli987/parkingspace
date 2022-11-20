import React,{useRef} from 'react'
import Booking from './Booking'

function SearchHero({bookings,airports,selectedAirport,setSelectedAirport,setDropOffDate,setDropOffTime,setPickupDate,setPickupTime,onCheck}) {
	const bookingDivRef=useRef(null)

  return (
    <>
    <section className="hero-search pt-100 pb-80 bottom-wave">
        <div className="sec-box">
            <div className="row">
                <div className="col-lg-12">
                <div className="booking-form">
							<form onSubmit={onCheck}>

<div className="row">
    <div className="col-xl-4 col-lg-3 col-md-6">      <div className="form-group">
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
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">	<div className="form-group">
											<span className="form-label">Drop Off Date</span>
											<input className="form-control" type="date" required onChange={(val)=>{
											
											setDropOffDate(val.target.value)
										}}/>
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">	<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" required onChange={(val)=>{
											
											setDropOffTime(val.target.value)
										}}/>
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">	<div className="form-group">
											<span className="form-label">Pick Up Date</span>
											<input className="form-control" type="date" required onChange={(val)=>{
											
											setPickupDate(val.target.value)
										}}/>
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">			<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" required onChange={(val)=>{
											
											setPickupTime(val.target.value)
										}}/>
										</div></div>
</div>

								<div className="form-btn" onClick={()=>{
									bookingDivRef.current.scrollIntoView() 
								}}>
									<button className="submit-btn" >Check availability</button>
								</div>
							</form>
						</div>
                </div>
            </div>
            <div className="row mt-50" ref={bookingDivRef}>
               <h2 className='text-center my-20'>
                Search Results...
               </h2>
			   {bookings.map((item,index)=>(
              <Booking  bookingimage={`${item.bookingImage}`} bookingtitle={item.bookingTitle} bookingtitletip={'Drive straight to Car Park, leaver your keys and take free bus or shuttle to the Gatwick Terminal.'} bookinglist1={' Meet & Greet at Terminal'} bookinglist2={' Cancellation Cover Available'} bookinglist3={' Free Airport Transfer Included'} item={item} bookingprice={item.bookingPrice} ratings={item.ratings}/>

			   ))}
              {/* <Booking bookingimage={require('../../../images/gat.png')} bookingtitle={'Park & Ride Service'} bookingtitletip={'Drive straight to Car Park, leaver your keys and take free bus or shuttle to the Gatwick Terminal.'} bookinglist1={' Meet & Greet at Terminal'} bookinglist2={' Cancellation Cover Available'} bookinglist3={' Free Airport Transfer Included'} bookingprice={'100.00'}/>
              <Booking bookingimage={require('../../../images/su.png')} bookingtitle={'Meet & Greet Service'} bookingtitletip={'Drive straight to Car Park, leaver your keys and take free bus or shuttle to the Gatwick Terminal.'} bookinglist1={' Meet & Greet at Terminal'} bookinglist2={' Cancellation Cover Available'} bookinglist3={' Free Airport Transfer Included'} bookingprice={'120.00'}/>
              <Booking bookingimage={require('../../../images/cop.webp')} bookingtitle={'Park & Ride Service'} bookingtitletip={'Drive straight to Car Park, leaver your keys and take free bus or shuttle to the Gatwick Terminal.'} bookinglist1={' Meet & Greet at Terminal'} bookinglist2={' Cancellation Cover Available'} bookinglist3={' Free Airport Transfer Included'} bookingprice={'110.00'}/>
              <Booking bookingimage={require('../../../images/ace.png')} bookingtitle={'Meet & Greet Service'} bookingtitletip={'Drive straight to Car Park, leaver your keys and take free bus or shuttle to the Gatwick Terminal.'} bookinglist1={' Meet & Greet at Terminal'} bookinglist2={' Cancellation Cover Available'} bookinglist3={' Free Airport Transfer Included'} bookingprice={'180.00'}/> */}
               
            </div>
        </div>
    </section>
    </>
  )
}

export default SearchHero