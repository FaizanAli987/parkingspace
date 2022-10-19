import React from 'react'
import IconAndText from './IconAndText';
import H1tagMd from '../../typography/H1tagMd';
import { Fragment } from 'react';
import Ptag from '../../typography/Ptag';
function CaptainAndTraveler() {

    const benefits = [
        {
          id: 'benefit1',
          col:'col-lg-12 col-md-12 col-12',
         serviceIcon : 
         <path
         stroke-linecap="round"
         stroke-linejoin="round"
         d="M17 8l4 4m0 0l-4 4m4-4H3"
       />,
          serviceHeading : 'Eco-Friendly',
         
        },
        {
          id: 'benefit1',
          col:'col-lg-12 col-md-12 col-12',
         serviceIcon : 
         <path
         stroke-linecap="round"
         stroke-linejoin="round"
         d="M17 8l4 4m0 0l-4 4m4-4H3"
       />,
          serviceHeading : 'Reduces Global Warming',
         
        },
        {
          id: 'benefit1',
          col:'col-lg-12 col-md-12 col-12',
         serviceIcon : 
         <path
         stroke-linecap="round"
         stroke-linejoin="round"
         d="M17 8l4 4m0 0l-4 4m4-4H3"
       />,
          serviceHeading : 'Reduces Fuel Consumption',
         
        },
        {
          id: 'benefit1',
          col:'col-lg-12 col-md-12 col-12',
         serviceIcon : 
         <path
         stroke-linecap="round"
         stroke-linejoin="round"
         d="M17 8l4 4m0 0l-4 4m4-4H3"
       />,
          serviceHeading : `Saves Both Captain & Traveler's Time & Cost`,
         
        }
      
      ]
      
      const benefitList = benefits.map((benefit,index)=>{
        return (
          <IconAndText
          key={index}title = {benefit.serviceHeading}
        svg={benefit.serviceIcon}
        columns={benefit.col}
          />
        )
      }
       );

  return (
    <>
      <section className="colab-section ">
          <div className="sec-box">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <H1tagMd
                  title={<Fragment>Pros for Captains & Travelers</Fragment>}
                />
                <Ptag
                  para={
                    "Some of the most trusted companies across India have rated us as the best carpooling app "
                  }
                />
                {benefitList}
        
              </div>
              <div className="col-lg-6 col-md-6 col-12 d-flex align-items-center ">
                <div className="image-box">
                  <img src={require("../../../images/eco.jpg")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default CaptainAndTraveler