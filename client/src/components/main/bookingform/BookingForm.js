import React from "react";

function BookingForm() {
  return (
    <>
      <section className="pt-100 pb-80 bookingformsection bottom-wave">
        <div className="sec-box">
          <div className="booking-form row">
            <div className="col-xl-8 col-lg-8 col-md-12 border-right-dotted">
            <form>
                <h3 className="form-heading">
                    Your Deatils
                </h3>
<div className="row mt-20">
    <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12"> 
    <div className="form-group">
    <label className="form-label" htmlFor="">Title <span>*</span> </label>
                <select className="form-control">
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
            <label className="form-label" htmlFor="">First Name <span>*</span></label>
            <input type="text" className="form-control" />
        </div>
    </div>
    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12">
         <div className="form-group">
            <label className="form-label" htmlFor="">Last Name <span>*</span></label>
            <input type="text" className="form-control" />
        </div>
         </div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Email <span>*</span></label>
            <input type="email" className="form-control" />
        </div></div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Confirm Email Address <span>*</span></label>
            <input type="email" className="form-control" />
        </div></div>
         <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">  <div className="form-group">
            <label className="form-label" htmlFor="">Mobile Number <span>*</span></label>
            <input type="tel" className="form-control" />
        </div></div>
</div>
           
<h3 className="form-heading mt-20">
Travel Details
                </h3>
<div className="row mt-20">
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12"> 
    <div className="form-group">
    <label className="form-label" htmlFor="">Depart Terminal <span>*</span> </label>
                <select className="form-control">
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
            <input type="text" placeholder="TBC" className="form-control" />
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
    <label className="form-label" htmlFor="">Arrival Terminal <span>*</span> </label>
                <select className="form-control">
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
            <input type="text" placeholder="TBC" className="form-control" />
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
            <input type="text"  className="form-control" />
        </div>
         </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
        <div className="form-group">
            <label className="form-label" htmlFor="">Model <span>*</span> </label>
            <input type="text"  className="form-control" />
        </div>
    </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
            <label className="form-label" htmlFor="">Colour <span>*</span> </label>
            <input type="text"  className="form-control" />
        </div>
         </div>
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
    <div className="form-group">
            <label className="form-label" htmlFor="">Registration <span>*</span> </label>
            <input type="text"  className="form-control" />
        </div>
         </div>
</div>


              <div className="form-btn mt-20">
                <button className="submit-btn" type="submit">Submit Booking</button>
              </div>
            </form>     
                   </div>
    <div className="col-xl-4 col-lg-4 col-md-12">
             <div className="booking-payment-side">
                <div className="booking-selected">
                    <div className="booking-selected-image">
                        <img src={require('../../../images/b.webp')} alt="" />
                    </div>
                    <h3>
                    FastPark Heathrow
                    </h3>
                </div>
                <hr />
                <ul className="booking-selected-ul my-20">
                    <li>
                    <span>Location:</span>    <span className="strong-span">Heathrow Airport</span>
                    </li>
                    <li>
                    <span>Drop-off DateTime:</span>    <span className="strong-span">13 Oct 2022 at 12:00</span>
                    </li>
                    <li>
                    <span>Pick-Up DateTime:</span>    <span className="strong-span">20 Oct 2022 at 12:00</span>
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
                    <span>Booking Fee:</span>    <span className="strong-span">£ 1.95
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
