import React from 'react'
import IconAndText from './IconAndText';
import H1tag from '../../typography/H1tag';
import { Fragment } from 'react';
const features = [
    {
      id: 'feature1',
      col:'col-lg-6 col-md-12 col-sm-12',
     serviceIcon : 
     <path
     stroke-linecap="round"
     stroke-linejoin="round"
     d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
   />,
      serviceHeading : 'Find Carpool & Bus Matches',
      servicePara : 'Find verified carpool and bikepool matches instantly',
    },
    {
      id: 'feature2',
      col:'col-lg-6 col-md-12 col-sm-12',
      serviceIcon : 
      <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
    />,
      serviceHeading : 'Great Support',
      servicePara : `Our support team is active all day to address to your queries and concerns`,
    },
    {
      id: 'feature3',
      col:'col-lg-6 col-md-12 col-sm-12',
      serviceIcon :
      <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    />,
      serviceHeading : 'Live Tracking & Chat',
      servicePara : 'Track your co-riders in real time and Chat with co-riders',
    },
    {
        id: 'feature4',
        col:'col-lg-6 col-md-12 col-sm-12',
        serviceIcon :
        <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />,
        serviceHeading : 'Safe & Secure',
        servicePara : 'We have User block, SOS, Live tracking and many other features to make sure you have a safe experience',
      }
  ]
  
  const featureList = features.map((it,index)=>{
    return (
      <IconAndText
      key={index}title = {it.serviceHeading}
    para = {it.servicePara}
    svg={it.serviceIcon}
    columns={it.col}
      />
    )
  }
   );


function AppFeatureList() {
  return (
    <>
     <section className="app-section clip-path">
          <div className="sec-box">
            <H1tag title={<Fragment> Our App Features</Fragment>} />
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="image-box">
   
                  <img src={require("../../../images/appp.png")} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="text-box">
                  <div className="row">
                    {featureList}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    
    </>
  )
}

export default AppFeatureList