import React from 'react'

function MainHome() {
  return (
    <>
       <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
    <div className="container">
        <h3 className='mb-3'>Dashboard</h3>
    <div className="row">
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-blue order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Orders Received</h6>
                    <h2 className="text-right my-3"><i className="fa fa-cart-plus f-left"></i><span>486</span></h2>
                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-green order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Orders Received</h6>
                    <h2 className="text-right my-3"><i className="fa fa-rocket f-left"></i><span>486</span></h2>
                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-yellow order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Orders Received</h6>
                    <h2 className="text-right my-3"><i className="fas fa-sync-alt f-left"></i><span>486</span></h2>
                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-xl-3">
            <div className="card bg-c-pink order-card">
                <div className="card-block">
                    <h6 className="m-b-20">Orders Received</h6>
                    <h2 className="text-right my-3"><i className="fa fa-credit-card f-left"></i><span>486</span></h2>
                    <p className="m-b-0">Completed Orders<span className="f-right">351</span></p>
                </div>
            </div>
        </div>
	</div>
</div>
     
    </main>
    
    </>
  )
}

export default MainHome