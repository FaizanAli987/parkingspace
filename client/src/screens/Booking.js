import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import BookingForm from '../components/main/bookingform/BookingForm'
import { useSelector } from 'react-redux'
function Booking() {




  return (
    <>
      <Header />
      <main>

      <BookingForm/>
      
      </main>
      <Footer />
    </>
  )
}

export default Booking