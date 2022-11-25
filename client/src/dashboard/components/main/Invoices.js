import React, { useEffect, useState } from 'react'
import { ServerUrl } from '../../../helper'

function Invoices() {
  const [parkingOwners,setParkingOwners]=useState([])
  const [plans,setPlans]=useState([])

  const getParkingOwners=async()=>{
    fetch(`${ServerUrl}/getParkingOwners`,{
      method:'GET'
    }).then((r)=>r.json()).then((r)=>{
      r?.user?.map((Item,index)=>{
        setParkingOwners(prev=>[...prev,Item])
      })

      setParkingOwners(prev=>[...new Set(prev)])
    })
  }

  const getPlans=async()=>{
    fetch(`${ServerUrl}/getBookingPlans`,{
      method:'GET'
    }).then((r)=>r.json()).then((r)=>{
      console.log(r)
      r?.plans?.map((Item,index)=>{
        setPlans(prev=>[...prev,Item])
      })

      setPlans(prev=>[...new Set(prev)])
    })
  }

  useEffect(()=>{
    getParkingOwners()
    getPlans()
  },[])
  return (
    <>
      <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
    <div className="container">
        <h3 className='mb-3'>Parking Owners</h3>

        <div class="table-wrapper">
  {parkingOwners.length>0&&(
    <table class="fl-table">
        <thead>
        <tr>
          {Object.keys(parkingOwners[0]).map((item,index)=>(
<>
{!['image','_id','__v'].includes(item)?(
            <th key={index}>{item}</th>

):<h4 className='mt-3 mb-3'>No Owner Added</h4>}
</>
          ))}
           

        </tr>
        </thead>
        <tbody>
       
        {parkingOwners.map((item,index)=>{
          return(
            <tr>
            {Object.keys(item).map((it,ind)=>(
              <>
              {!['image','_id','__v'].includes(it)?(
              <td>{item[it]}</td>
            
):null}
              </>
            ))}
            </tr>
          )
        })}
      
        </tbody>
    </table>
    )}
    </div>


    <h3 className='mb-3 mt-3'>Booking Plans</h3>

        <div class="table-wrapper">
  {plans.length>0&&(
    <table class="fl-table">
        <thead>
        <tr>
          {Object.keys(plans[0]).map((item,index)=>(
<>
{['bookingTitle','Owner','airportName','bookingPrice','availability'].includes(item)?(
            <th key={index}>{item}</th>

):null}
</>
          ))}
           

        </tr>
        </thead>
        <tbody>
       
        {plans.map((item,index)=>{
          return(
            <tr>
            {Object.keys(item).map((it,ind)=>(
              <>
              {['bookingTitle','Owner','airportName','bookingPrice','availability'].includes(it)?(
              <td>{item[it].toString()}</td>
            
):<h4 className='mt-3 mb-3'>No Booking Plan Added</h4>}
              </>
            ))}
            </tr>
          )
        })}
      
        </tbody>
    </table>
    )}
    </div>
</div>
     
    </main>
    </>
  )
}

export default Invoices