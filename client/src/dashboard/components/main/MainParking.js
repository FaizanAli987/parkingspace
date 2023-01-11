import React,{useState,useEffect} from 'react'
import { LocalUrl } from '../../../helper';

function MainParking() {
  const [showbookingform, setShowbookingform]=useState(false);
  const [showparkingform, setShowparkingform]=useState(false);
  const [showparkingmain, setShowparkingmain]=useState(true)

  const [firstName,setFirstName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [mobileNumber,setMobileNumber]=useState('')
  const [image,setImage]=useState('')
  

  //Adding Bookings State
  const [allOwners,setOwners]=useState([])
  const [bookingTitle,setBookingTitle]=useState('')
  const [selectedOwner,setSelectedOwner]=useState('')
  const [airportName,setAirportName]=useState('')
  const [bookingPrice,setBookingPrice]=useState('')
  const [ratings,setRatings]=useState('')
  const [parkingLimit,setParkingLimit]=useState('')
  const [bookingImage,setBookingImage]=useState('')
  const [selectedOwnerId,setSelectedOwnerId]=useState('')
  const [bookingAvailable,setAvailability]=useState(false)

  
  const addBooking=async(e)=>{
    e.preventDefault()
    if(!bookingTitle||!selectedOwner||!airportName||!bookingPrice||!ratings||!parkingLimit||!bookingImage||!selectedOwnerId){
      alert('Please fill all fields')
    }else{
      const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ bookingTitle,"Owner":selectedOwner,airportName,bookingPrice,ratings,parkingLimit,bookingImage,"ownerId":selectedOwnerId,"availability":bookingAvailable})
			};
      fetch(`${LocalUrl}/addBooking`, requestOptions)
				.then(response => response.json())
				.then(data => {
					if(data.success==false){
						alert(data.message)
					}else{
						console.log(data)
            setBookingTitle('')
            setSelectedOwner('')
            setAirportName('')
            setBookingPrice('')
            setRatings('')
            setParkingLimit('')
            setBookingImage('')
            setSelectedOwnerId('')
            setAvailability(false)
            alert('Bookig Added Sucessfully')

					}
				});

    }
  }

  


  const previewFile=()=> {
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // convert image file to base64 string
      setImage(reader.result)
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
  }

  const previewFileBooking=()=> {
    const file=document.getElementById('booking-image').files[0]
    // const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // convert image file to base64 string
      setBookingImage(reader.result)
    }, false);
    if (file) {
        reader.readAsDataURL(file);
    }
  }

  const onAddParkingOwner=async(e)=>{
			e.preventDefault();
    if(!firstName){
      alert('Fill firstname field')
    }else if(!lastName){
      alert('Fill lastname field')
    }else if(!email){
      alert('Fill email field')
    }else if(!mobileNumber){
      alert('Fill mobile number field')
    }else if(!image){
      alert('pick an image')
    }else{
      const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json',
       },
				body: JSON.stringify({ email,firstName,lastName,mobileNumber,image})
			};
      fetch(`${LocalUrl}/addParkingOwner`, requestOptions)
				.then(response => response.json())
				.then(data => {
					if(data.success==false){
						alert(data.message)
					}else{
						console.log(data)
            setFirstName('')
            setLastName('')
            setMobileNumber('')
            setImage('')
            setEmail('')
            alert('Parking Owner Added Sucessfully')

					}
				});
    } 
  }

 


  const getAllParkingOwnerNames=async()=>{
    fetch(`${LocalUrl}/getParkingOwnerNames`,{
      method:'GET'
    }).then((r)=>r.json()).then((r)=>{
      console.log(r?.user)
      r?.user?.map((item,index)=>{
        setOwners(prev=>[...prev,item])
      })
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getAllParkingOwnerNames()
  },[])
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
            <input type="text" className="form-control" value={firstName} onChange={(event)=>setFirstName(event.target.value)}/>
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
         <div className="form-group">
            <label className="form-label" htmlFor="">Last Name <span>*</span></label>
            <input type="text" className="form-control" value={lastName} onChange={(event)=>setLastName(event.target.value)}/>
        </div>
         </div>
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Email <span>*</span></label>
            <input type="email" className="form-control" value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div></div>
     
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Mobile Number <span>*</span></label>
            <input type="tel" className="form-control" value={mobileNumber} onChange={(event)=>setMobileNumber(event.target.value)}/>
        </div></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Image <span>*</span></label>
            <input type="file" className="form-control" onChange={()=>previewFile()}/>
        </div></div>
</div>
           


              <div className="form-btn mt-20">
                <button className="submit-btn" type="submit" onClick={onAddParkingOwner} >Save</button>
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
            <input type="text" className="form-control" value={bookingTitle} onChange={(e)=>setBookingTitle(e.target.value)}/>
        </div>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
    <label className="form-label" htmlFor="">Parking Owner <span>*</span> </label>
                <select className="form-control" value={selectedOwner} id="ownersList" onChange={(val,e)=>{
                  console.log(val)
                  setSelectedOwner(val.target.value)
                  var ind=document.getElementById('ownersList').selectedIndex
                  setSelectedOwnerId(allOwners[ind-1]._id)
                  

                }}>
                  <option>Select Parking Owner</option>
                  {allOwners.map((item,index)=>{
                    return(
                  <option>{item.firstName+" "+item.lastName}</option>
                  )})}
                </select>
                <span className="select-arrow"></span>
        </div>
         </div>


         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Airport Name <span>*</span></label>
            <input type="text" className="form-control" value={airportName} onChange={(e)=>setAirportName(e.target.value)}/>
        </div></div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Availability Status <span>*</span></label>
            <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={bookingAvailable} onChange={()=>setAvailability(!bookingAvailable)}/>
  <label class="form-check-label" for="flexSwitchCheckDefault">{bookingAvailable?'Available':'Not Available'}</label>
</div>
        </div></div>



         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Booking Price - (in £) <span>*</span></label>
            <input type="number" className="form-control" value={bookingPrice} onChange={(e)=>setBookingPrice(e.target.value)}/>
        </div></div>
     
         <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Set Ratings <span>*</span></label>
            <select className="form-control" value={ratings} onChange={(e)=>{
              setRatings(e.target.value)
            }}>
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
            <input type="number" className="form-control" value={parkingLimit} onChange={(e)=>setParkingLimit(e.target.value)}/>
        </div></div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Image <span>*</span></label>
            <input type="file" className="form-control" id='booking-image' onChange={()=>previewFileBooking()}/>
        </div></div>
</div>
           


              <div className="form-btn mt-20">
                <button className="submit-btn" type="submit" onClick={addBooking}>Save</button>
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