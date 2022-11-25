import React,{useRef} from 'react'
import Booking from './Booking'
import { setBookingsDivRef,setSearchAirportFields } from '../../../Redux/slices/UserData'
import { useSelector, useDispatch } from 'react-redux'


function SearchHero({bookings,airports,onCheck}) {
	const bookingDivRef=useRef(null)
	const fields=useSelector((state)=>state.user.searchAirportFelds)

	const dispatch=useDispatch()
	const handleChange = (key, value) => {
		dispatch(setSearchAirportFields({ key, value }));
	  };
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
											<select className="form-control" value={fields.selectedAirport} onChange={(e)=>{
										
												handleChange("selectedAirport", e.target.value);

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
											<input className="form-control" type="date" value={fields.dropOffDate} required onChange={(val)=>{
                          handleChange("dropOffDate", val.target.value);
											
										}}/>
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">	<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" value={fields.dropOffTime} required onChange={(val)=>{
                              handleChange("dropOffTime", val.target.value);
											
										}}/>
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">	<div className="form-group">
											<span className="form-label">Pick Up Date</span>
											<input className="form-control" type="date" value={fields.pickupDate} required onChange={(val)=>{
                              handleChange("pickupDate", val.target.value);
											
										}}/>
										</div></div>
    <div className="col-xl-2 col-lg-3 col-md-6">			<div className="form-group">
											<span className="form-label">Time</span>
											<input className="form-control" type="time" value={fields.pickupTime} required onChange={(val)=>{
                              handleChange("pickupTime", val.target.value);
											
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
            <div className="row mt-50" ref={bookingDivRef} >
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