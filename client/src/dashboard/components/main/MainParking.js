import React from 'react'

function MainParking() {
  return (
    <>
    
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
    <div className="container">
        <h3 className='mb-3'>Add Parking Owners - Parking Bookings</h3>

<div className="parking-button-div">
<button className='icon-btn'>
  <img src={require('../../assets/images/owner.jpg')} alt="" />
  Add Parking Owner
</button>
<button className='icon-btn'>
  <img src={require('../../assets/images/booking.jpg')} alt="" />
  Add Booking
</button>
</div>


</div>
     
    </main>
    </>
  )
}

export default MainParking