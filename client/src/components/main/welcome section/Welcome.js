import React from 'react'

function Welcome() {
  return (
    <>
    <section className="welcome-sec pb-80">
        <div className="sec-box">
            <h2 className='section-title'>
                Welcome to the <br />
                RapidParkingDeals
            </h2>
            <div className='welcome-text-img mt-50'>
                <div className="row">
<div className="col-lg-4 relative">
 <div className="text-box">
<h3>
    Delivering Good Old Fashioned Service
</h3>
<p className="">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi facilis id assumenda aut harum vel dignissimos, saepe quidem architecto accusantium natus distinctio perferendis reiciendis sed dolor debitis fuga nihil quos porro, alias blanditiis suscipit atque nesciunt ratione. Reiciendis sit nam quod nulla ea distinctio, optio assumenda quo laboriosam itaque rem.
</p>
                </div>   </div>    
                <div className="col-lg-8">   <div className="text-image">
<img src={require('../../../images/2739.jpg')} alt="" />
                </div></div>
             
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Welcome