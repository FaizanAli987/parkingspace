import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BookingForm from '../components/main/bookingform/BookingForm'
function Booking() {
  const bookingData=localStorage.getItem('bookingData')
  const [dataOfBooking,setData]=useState('')
  useEffect(()=>{
    if(bookingData){
      setData(JSON.parse(bookingData))
    }
  },[])



  return (
    <>
      <Header />
      <main>

      <BookingForm item={dataOfBooking}/>
      
      </main>
      <Footer />
    </>
  )
}

export default Booking