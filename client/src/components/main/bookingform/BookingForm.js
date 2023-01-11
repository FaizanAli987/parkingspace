import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { setUserDetails,setTravelDetails,setVehicleDetails,setSelectedBooking,setSearchAirportFields } from "../../../Redux/slices/UserData";
import { useHistory } from "react-router-dom";
import { LocalUrl } from "../../../helper";

function BookingForm() {
  // const history=useHistory()
  const dispatch=useDispatch()
  const bookingData=useSelector((state)=>state.user.selectedBooking)
	const fields=useSelector((state)=>state.user.searchAirportFelds)
  const userDetails=useSelector((state)=>state.user.userDetails)
  const travelDetails=useSelector((state)=>state.user.travelDetails)
  const vehicleDetails=useSelector((state)=>state.user.vehicleDetails)

  const getAmPm=(val)=>{
    const firstPart=val.split(':')[0]
    const secondPart=val.split(':')[1]
    const amPm=parseInt(firstPart)>12?'pm':'am'
    if(parseInt(firstPart)>12){
        return (parseInt(firstPart)-12)+' '+secondPart+' '+amPm
    }else{
        return firstPart+' '+secondPart+' '+amPm
    }
}

const handleChangeUser = (key, value) => {
  
  dispatch(setUserDetails({ key, value }));
};

const handleChangeTravel = (key, value) => {
  dispatch(setTravelDetails({ key, value }));
};

const handleChangeVehicle = (key, value) => {
  dispatch(setVehicleDetails({ key, value }));
};


const submitBooking=async()=>{
 
  if(!travelDetails.departTerminal||
    !travelDetails.arrivalTerminal||
    !travelDetails.outbondFlight||
    !travelDetails.inboundFlight||
    !vehicleDetails.Carcolor||
    !vehicleDetails.Carmodel||
    !vehicleDetails.Carmake||
    !vehicleDetails.Carregistration||
    !fields.dropOffDate||
    !fields.dropOffTime||
    !fields.pickupDate||
    !fields.pickupTime||
    !bookingData._id||
    !userDetails.title||!userDetails.firstName||!userDetails.lastName||
    !userDetails.email||!userDetails.confirmEmail||
    !userDetails.mobileNumber){
      console.log(travelDetails.departTerminal+' '+
        travelDetails.arrivalTerminal+' '+
        travelDetails.outbondFlight+' '+
        travelDetails.inboundFlight+' '+
        vehicleDetails.Carcolor+' '+
        vehicleDetails.Carmodel+' '+
        vehicleDetails.Carmake+' '+
        vehicleDetails.Carregistration+' '+
        fields.dropOffDate+' '+
        fields.dropOffTime+' '+
        fields.pickupDate+' '+
        fields.pickupTime+' '+
        bookingData._id+' '+
        userDetails.title+' '+userDetails.firstName+' '+userDetails.lastName+' '+
        userDetails.email+' '+userDetails.confirmEmail+' '+
        userDetails.mobileNumber)
    alert('Please fill all fields')
  }else if(userDetails.email!=userDetails.confirmEmail){
    alert('Email and confirm email doesnot match')
  }else{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'},
      body: JSON.stringify({  
        departTerminal:travelDetails.departTerminal,
        arrivalTerminal:travelDetails.arrivalTerminal,
        outbondFlight:travelDetails.outbondFlight,
        inboundFlight:travelDetails.inboundFlight,
        Carcolor:vehicleDetails.Carcolor,
        Carmodel:vehicleDetails.Carmodel,
        Carmake:vehicleDetails.Carmake,
        Carregistration:vehicleDetails.Carregistration,
        dropOffDate:fields.dropOffDate,
        dropOffTime:fields.dropOffTime,
        pickupDate:fields.pickupDate,
        pickupTime:fields.pickupTime,
        bookingPlanId:bookingData._id,
        name:userDetails.title+' '+userDetails.firstName+' '+userDetails.lastName,
        email:userDetails.email,
        mobileNumber:userDetails.mobileNumber
      })
    };
    fetch(`${LocalUrl}/submitBooking`, requestOptions)
      .then(response => response.json())
      .then(data => {
        if(data.success==false){
          alert(data.message)
        }else{
          console.log(data)
          dispatch(setUserDetails({
            title:'',
            firstName:'',
            lastName:'',
            email:'',
            mobileNumber:'',
            confirmEmail:''
          }))
          dispatch(setVehicleDetails({ Carmake:'',
          Carmodel:'',
          Carcolor:'',
          Carregistration:''}))
          dispatch(setTravelDetails({   departTerminal:'',
          arrivalTerminal:'',
          outbondFlight:'',
          inboundFlight:'',}))
          dispatch(setSearchAirportFields({
            selectedAirport:'',
			dropOffDate:'',
			dropOffTime:'',
			pickupDate:'',
			pickupTime:''
          }))
          dispatch(setSelectedBooking(null))
       
          alert('Bookig Added Sucessfully')
          window.location.href='/searchparkingspaces'
        }
      });

  }
}

  return (
    <>
      <section className="pt-100 pb-80 bookingformsection bottom-wave">
        <div className="sec-box">
          <div className="booking-form row">
            <div className="col-xl-8 col-lg-8 col-md-12 border-right-dotted">
            <form onSubmit={(e)=>{
              e.preventDefault()
              submitBooking()
              // localStorage.setItem('bookingprice',item.bookingPrice)
              // window.location.href='/payment'
            }}>
                <h3 className="form-heading">
                    Your Deatils
                </h3>
<div className="row mt-20">
    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"> 
    <div className="form-group">
    <label className="form-label" htmlFor="">Title <span>*</span> </label>
                <select className="form-control" value={userDetails?.title}  onChange={(e) => {
                          handleChangeUser("title", e.target.value);
                        }}>
                  <option>Select Title</option>

                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Miss</option>
                  <option>Ms</option>
                  <option>Mme</option>
                  <option>Mlle</option>
                </select>
                <span className="select-arrow"></span>
        </div>
         </div>
    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
        <div className="form-group">
            <label className="form-label" htmlFor="" >First Name <span>*</span></label>
            <input type="text" className="form-control" value={userDetails?.firstName}  onChange={(e) => {
                          handleChangeUser("firstName", e.target.value);
                        }}/>
        </div>
    </div>
    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
         <div className="form-group">
            <label className="form-label" htmlFor="" >Last Name <span>*</span></label>
            <input type="text" className="form-control" value={userDetails?.lastName} onChange={(e) => {
                          handleChangeUser("lastName", e.target.value);
                        }}/>
        </div>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="" >Email <span>*</span></label>
            <input type="email" className="form-control" value={userDetails?.email} onChange={(e) => {
                          handleChangeUser("email", e.target.value);
                        }}/>
        </div></div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Confirm Email Address <span>*</span></label>
            <input type="email" className="form-control" value={userDetails?.confirmEmail} onChange={(e) => {
                          handleChangeUser("confirmEmail", e.target.value);
                          
                        }}/>
        </div></div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="" >Mobile Number <span>*</span></label>
            <input type="tel" className="form-control" value={userDetails?.mobileNumber} onChange={(e) => {
                          handleChangeUser("mobileNumber", e.target.value);
                        }}/>
        </div></div>
</div>
           
<h3 className="form-heading mt-20">
Travel Details
                </h3>
<div className="row mt-20">
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12"> 
    <div className="form-group">
    <label className="form-label" htmlFor="">Depart Terminal <span>*</span> </label>
                <select className="form-control" value={travelDetails?.departTerminal} onChange={(e) => {
                          handleChangeTravel("departTerminal", e.target.value);
                        }}>
                  <option>Select Terminal</option>

                  <option>Terminal 2</option>
                  <option>Terminal 3</option>
                  <option>Terminal 4</option>
                  <option>Terminal 5</option>
              
                </select>
                <span className="select-arrow"></span>
        </div>
         </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
            <label className="form-label" htmlFor="">Outbound Flight</label>
            <input type="text" placeholder="TBC" className="form-control" value={travelDetails?.outbondFlight} onChange={(e) => {
                          handleChangeTravel("outbondFlight", e.target.value);
                        }}/>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
    <label className="form-label" htmlFor="">Arrival Terminal <span>*</span> </label>
                <select className="form-control" value={travelDetails?.arrivalTerminal} onChange={(e) => {
                          handleChangeTravel("arrivalTerminal", e.target.value);
                        }}>
                  <option>Select Terminal</option>

                  <option>Terminal 2</option>
                  <option>Terminal 3</option>
                  <option>Terminal 4</option>
                  <option>Terminal 5</option>
              
                </select>
                <span className="select-arrow"></span>
        </div>
         </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
            <label className="form-label" htmlFor="">Inbound Flight</label>
            <input type="text" placeholder="TBC" className="form-control" value={travelDetails?.inboundFlight} onChange={(e) => {
                          handleChangeTravel("inboundFlight", e.target.value);
                        }}/>
        </div>
         </div>
</div>

<h3 className="form-heading mt-20">
Vehical Details
                </h3>
<div className="row mt-20">
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12"> 
    <div className="form-group">
            <label className="form-label" htmlFor="">Make <span>*</span> </label>
            <input type="text"  className="form-control" value={vehicleDetails?.Carmake} onChange={(e) => {
                          handleChangeVehicle("Carmake", e.target.value);
                        }}/>
        </div>
         </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
            <label className="form-label" htmlFor="">Model <span>*</span> </label>
            <input type="text"  className="form-control" value={vehicleDetails?.Carmodel} onChange={(e) => {
                          handleChangeVehicle("Carmodel", e.target.value);
                        }}/>
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
            <label className="form-label" htmlFor="">Colour <span>*</span> </label>
            <input type="text"  className="form-control" value={vehicleDetails?.Carcolor} onChange={(e) => {
                          handleChangeVehicle("Carcolor", e.target.value);
                        }}/>
        </div>
         </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
            <label className="form-label" htmlFor="">Registration <span>*</span> </label>
            <input type="text"  className="form-control" value={vehicleDetails?.Carregistration} onChange={(e) => {
                          handleChangeVehicle("Carregistration", e.target.value);
                        }}/>
        </div>
         </div>
</div>


              <div className="form-btn mt-20">
                <button className="submit-btn" type="submit" >Submit Booking</button>
              </div>
            </form>     
                   </div>
    <div className="col-xl-4 col-lg-4 col-md-12">
             <div className="booking-payment-side">
                <div className="booking-selected">
                    <div className="booking-selected-image">
                        <img src={bookingData?.bookingImage} alt="" />
                    </div>
                    <h3>
                    {bookingData?.bookingTitle}
                    </h3>
                </div>
                <hr />
                <ul className="booking-selected-ul my-20">
                    <li>
                    <span>Location:</span>    <span className="strong-span">{bookingData?.airportName}</span>
                    </li>
                    <li>
                    <span>Drop-off DateTime:</span>    <span className="strong-span">{fields.dropOffDate} at {getAmPm(fields.dropOffTime)} </span>
                    </li>
                    <li>
                    <span>Pick-Up DateTime:</span>    <span className="strong-span">{fields.pickupDate} at {getAmPm(fields.pickupTime)}</span>
                    </li>
            
                </ul>
                <hr />
                <ul className="booking-selected-ul my-20">
                    <li>
                    <span>Booking Quote:</span>    <span className="strong-span">£ 109.00
</span>
                    </li>
                </ul>
                <hr />
                <ul className="booking-selected-ul my-20">
                    <li>
                    <span>Booking Fee:</span>    <span className="strong-span">£ {bookingData?.bookingPrice}
</span>
                    </li>
                </ul>
                <hr />
                <ul className="booking-selected-ul booking-price-ul my-20">
                    <li>
                    <span>Booking Fee:</span>    <span className="strong-span">£ 110.95

</span>
                    </li>
                </ul>
                </div>   
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingForm;
