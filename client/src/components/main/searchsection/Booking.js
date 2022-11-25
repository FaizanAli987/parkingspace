import React, { useEffect, useState } from 'react'
import Tooltip from '../tooltip/Tooltip'
import Tooltipimg from '../tooltip/Tooltipimg'
import { setSelectedBooking } from '../../../Redux/slices/UserData'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
function Booking({item,bookingimage,bookingtitle,bookingtitletip,bookinglist1,bookinglist2,bookinglist3,bookingprice,ratings}) {
 const dispatch=useDispatch()
  let history=useHistory()
  const [stars,setStars]=useState([])

  useEffect(()=>{
    for(var i=0;i<parseInt(ratings[0]);i++){
      setStars(prev=>[...prev,i])
    }
  },[])

  const onBook=()=>{

    // console.log(item)
    dispatch(setSelectedBooking(item))
    // localStorage.setItem('bookingData',JSON.stringify(item))
    // window.location.href='/booking'
    // history.go('/booking')
  }
  
  return (
    <> 
     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
    <div className="booking-box">
        <div className="booking-image">
<img src={bookingimage} alt="" />
        </div>
        <div className="booking-content">
        <div className="booking-text">
   
   <Tooltip title={bookingtitle} text={bookingtitletip} />
   <ul>
    <li>
    <i className="fas fa-bus"></i> {bookinglist1}
    </li>
    <li>
    <i className="fas fa-bolt"></i> {bookinglist2}
    </li>
    <li>
    <i className="far fa-money-bill-alt"></i>{bookinglist3}
    </li>
   </ul>
   <div className="booking-icons">
     <Tooltipimg title="this is title" image={require('../../../images/24_hours.png')}/>
     <Tooltipimg title="this is title" image={require('../../../images/parkmarklogo.jpg')}/>
     <Tooltipimg title="this is title" image={require('../../../images/barrier_icon.png')}/>
     <Tooltipimg title="this is title" image={require('../../../images/cctv_icon.png')}/>
     <Tooltipimg title="this is title" image={require('../../../images/disability_icon.png')}/>
     <Tooltipimg title="this is title" image={require('../../../images/buy-with-confidence.png')}/>
   </div>

  
      </div>
      <div className="booking-footer">
   <div className="booking-price">
    <h3>
    £ {bookingprice}
    </h3>
       <Link to={'booking'}> <button onClick={onBook}>Book Now</button></Link>
  </div>
  <div className="booking-review">
<h6>
    Ratings:
</h6>
<div className="booking-ratings">
 {stars.map((item,index)=>(
  <i className="fas fa-star"></i>

 ))}
{/* <i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i> */}
</div>
  </div>
   </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Booking