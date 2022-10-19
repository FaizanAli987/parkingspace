import React from 'react'
import Tooltip from '../tooltip/Tooltip'
import Tooltipimg from '../tooltip/Tooltipimg'
import { Link } from "react-router-dom";
function Booking({bookingimage,bookingtitle,bookingtitletip,bookinglist1,bookinglist2,bookinglist3,bookingprice}) {
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
    <Link to="/booking">    <button>Book Now</button></Link>
  </div>
  <div className="booking-review">
<h6>
    Ratings:
</h6>
<div className="booking-ratings">
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
<i className="fas fa-star"></i>
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