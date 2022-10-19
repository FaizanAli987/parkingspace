import React from 'react'
import IconAndText from './IconAndText';
import H1tag from '../../typography/H1tag';
import Ptag from '../../typography/Ptag';
import Parasmall from '../../typography/Parasmall';
function Serviceslist() {


    const services = [
        {
          id: 'service1',
          col:'col-lg-4 col-md-4 col-sm-12',
         serviceIcon : 
         <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />,
         image:'https://img.freepik.com/free-vector/man-searching-car-rent_74855-7610.jpg?w=1380&t=st=1664914995~exp=1664915595~hmac=2bfb0445c7ad7ef50195cc00c52535ec159b7def3c2da3c7992f0bb3a37952b9',
          serviceHeading : 'Top Service',
          servicePara :  `We're providing our services at a low cost to enable travellers to save money, and we'll take good care of our passengers.`,
        },
        {
          id: 'service2',
          col:'col-lg-4 col-md-4 col-sm-12 translate-20',
          serviceIcon : 
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
        />,
        image:'https://img.freepik.com/free-vector/police-officer-detective-making-interrogation-policeman-patrol-city-managing-traffic-911-service-community-policing-isolated-flat-vector-illustration_613284-3088.jpg?w=1380&t=st=1664914849~exp=1664915449~hmac=d5f9394da630c500d9fd41a1445a466757d536e3b3a085dd7d4335fb294952e0',
          serviceHeading : 'Proven Security',
          servicePara : `We're providing our services at a low cost to enable travellers to save money, and we'll take good care of our passengers.`,
        },
        {
          id: 'service3',
          col:'col-lg-4 col-md-4 col-sm-12 translate-40',
          serviceIcon :
          <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />,
        image:'https://img.freepik.com/free-vector/address-concept-illustration_114360-4747.jpg?w=826&t=st=1664914958~exp=1664915558~hmac=b6fd975e793e5a6d5d0b786d8e5137a3580681cab3926401aebd4b1da4aec665',
          serviceHeading : 'That Extra Mile',
          servicePara : `We're providing our services at a low cost to enable travellers to save money, and we'll take good care of our passengers.`,
        }
      ]
      
      const serviceList = services.map((it,index)=>{
        return (
          <IconAndText
          key={index}title = {it.serviceHeading}
        para = {it.servicePara}
        svg={it.serviceIcon}
        image={it.image}
        columns={it.col}
          />
        )
      }
       );

  return (
    <>
        <section className="services-section bg-blue bottom-wave  pb-80">
          <div className="sec-box">
<H1tag title={'Why RapidParkingDeals?'}/>
<p className='text-center text-white'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquam!
</p>

            <div className="row mt-50">
                {serviceList}
          </div>   
          </div>
        </section>
    </>
  )
}

export default Serviceslist