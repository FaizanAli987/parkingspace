import React from 'react'
import H1tag from '../../typography/H1tag'
import FAQListHome from '../accordion/FAQListHome'
function Faqsec() {
  return (
    <>
    <section className="faq-sec bg-blue bottom-wave pb-80">
        <div className="sec-box">
        <H1tag title={'Why RapidParkingDeals?'}/>
<p className='text-center text-white'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquam!
</p>
<div className="row mt-50">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
   
                  <img src={require("../../../images/7610.jpg")} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-box">
                  <div className="row">
                <FAQListHome/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Faqsec