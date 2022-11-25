import React, { useEffect, useState } from 'react'
import './Customers.css'
import { ServerUrl } from '../../../helper'
function Customers() {
  const [allCustomer,setCustomers]=useState([])

  const getCustomers=async()=>{
    fetch(`${ServerUrl}/getSubmittedBookings`,{
      method:'GET'
    }).then((r)=>r.json()).then((r)=>{
      console.log(r?.user)
      r?.user.map((item,index)=>{
        setCustomers(prev=>[...prev,item])
      })

      setCustomers(prev=>[...new Set(prev)])
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getCustomers()
  },[])
  return (
    <>
     <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-3">
    <div className="container">
        <h3 className='mb-3'>All Customers - Customer Bookings</h3>
<div class="table-wrapper">
  {allCustomer.length>0&&(
    <table class="fl-table">
        <thead>
        <tr>
          {Object.keys(allCustomer[0]).map((item,index)=>(
<>
{['email','name','mobileNumber','dropOffDate','dropOffTime','pickupDate','pickupTime'].includes(item)?(
            <th key={index}>{item}</th>

):null}
</>
          ))}
           
        </tr>
        </thead>
        <tbody>
       
        {allCustomer.map((item,index)=>{
          return(
            <tr>
            {Object.keys(item).map((it,ind)=>(
              <>
              {['email','name','mobileNumber','dropOffDate','dropOffTime','pickupDate','pickupTime'].includes(it)?(
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

</div>
    </main>
    </>
  )
}

export default Customers