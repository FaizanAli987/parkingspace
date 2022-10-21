import React,{useState} from 'react'

function MainParking() {
  const [showbookingform, setShowbookingform]=useState(false);
  const [showparkingform, setShowparkingform]=useState(false);
  const [showparkingmain, setShowparkingmain]=useState(true)
  return (
    <>
    
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">

    {
	showparkingmain?
    <div className="container">
        <h3 className='mb-3'>Add Parking Owners - Parking Bookings</h3>

<div className="parking-button-div">
<button className='icon-btn'   onClick={()=>{
	setShowparkingform(true)
	setShowbookingform(false)
	setShowparkingmain(false)
	}}>
  <img src={require('../../assets/images/owner.jpg')} alt="" />
  Add Parking Owner
</button>
<button className='icon-btn'   onClick={()=>{
	setShowbookingform(true)
  setShowparkingform(false)
  setShowparkingmain(false)
	}}>
  <img src={require('../../assets/images/booking.jpg')} alt="" />
  Add Booking
</button>
</div>




</div>
:null
}



{
	showparkingform?
<div className='container dashboardforms'>
<i class="fas fa-long-arrow-alt-left back"  onClick={()=>{
	setShowparkingform(false)
	setShowbookingform(false)
	setShowparkingmain(true)
	}}></i>
<h3 >Register Parking Owner</h3>
<div className="booking-form">
  <form>
               
<div className="row mt-20">

    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
            <label className="form-label" htmlFor="">First Name <span>*</span></label>
            <input type="text" className="form-control" />
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
         <div className="form-group">
            <label className="form-label" htmlFor="">Last Name <span>*</span></label>
            <input type="text" className="form-control" />
        </div>
         </div>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Email <span>*</span></label>
            <input type="email" className="form-control" />
        </div></div>
     
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Mobile Number <span>*</span></label>
            <input type="tel" className="form-control" />
        </div></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Image <span>*</span></label>
            <input type="file" className="form-control" />
        </div></div>
</div>
           


              <div className="form-btn mt-20">
                <button className="submit-btn" type="submit">Save</button>
              </div>
            </form>   
</div>

</div>
:null
}

{
	showbookingform?
<div className='container dashboardforms'>
<i class="fas fa-long-arrow-alt-left back "  onClick={()=>{
	setShowparkingform(false)
	setShowbookingform(false)
	setShowparkingmain(true)
	}}></i>
<h3>Add Booking</h3>
<div className="booking-form">
  <form>
               
<div className="row mt-20">

    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
            <label className="form-label" htmlFor="">Booking Title <span>*</span></label>
            <input type="text" className="form-control" />
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
    <label className="form-label" htmlFor="">Parking Owner <span>*</span> </label>
                <select className="form-control">
                  <option>Select Parking Owner</option>
                  <option>Parking Owner 1</option>
                  <option>Parking Owner 2</option>
                  <option>Parking Owner 3</option>
                  <option>Parking Owner 4</option>
                </select>
                <span className="select-arrow"></span>
        </div>
         </div>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Booking Price - (in £) <span>*</span></label>
            <input type="number" className="form-control" />
        </div></div>
     
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Set Ratings <span>*</span></label>
            <select className="form-control">
                  <option>Select Rating</option>
                  <option> 1 Star </option>
                  <option>2 Stars </option>
                  <option>3 Stars </option>
                  <option>4 Stars </option>
                  <option>5 Stars </option>
                </select>
                <span className="select-arrow"></span>
        </div></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Parking Limit - (Available Parking Space)  <span>*</span></label>
            <input type="number" className="form-control" />
        </div></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Image <span>*</span></label>
            <input type="file" className="form-control" />
        </div></div>
</div>
           


              <div className="form-btn mt-20">
                <button className="submit-btn" type="submit">Save</button>
              </div>
            </form>   
</div>
</div>
:null
} 
    </main>
    </>
  )
}

export default MainParking