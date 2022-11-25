import React, { useEffect, useState } from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SearchHero from '../components/main/searchsection/SearchHero';
import { ServerUrl } from '../helper';
import { useSelector, useDispatch } from 'react-redux'


function Search() {
	const fields=useSelector((state)=>state.user.searchAirportFelds)
	const bookingDivRef=useSelector((state)=>state.user.bookingDivRef)


  const [searchedBookings,setBookings]=useState([])

  const [airports,setAirports]=useState([])



const searchBookings=async()=>{
  // setBookings([])
  fetch(`${ServerUrl}/getBookingsByAirportName`,{
    method:'PUT',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({
      "airportName":fields.selectedAirport
    })
  }).then((r)=>r.json()).then((r)=>{
    console.log(r)
    r?.bookings.map((item,index)=>{
      var exists=searchedBookings.find(o=>o._id==item._id)
      if(!exists){
        setBookings(prev=>[...prev,item])

      }
    })
    setBookings(prev=>[...new Set(prev)])

  }).then(()=>{
    // bookingDivRef.current.scrollIntoView()
console.log(bookingDivRef)
bookingDivRef&&bookingDivRef.current.scrollIntoView()
  })
}

const getAllAirports=async()=>{
  fetch(`${ServerUrl}/getAirports`,{
    method:'GET'
  }).then((r)=>r.json()).then((r)=>{
    console.log(r?.airports)
    r?.airports?.map((item,index)=>{
    setAirports(prev=>[...prev,item])
    })
  }).catch((err)=>{
    console.log(err)
  })
  
}
useEffect(()=>{
  getAllAirports()
  if(   !fields.selectedAirport ||
    !fields.dropOffDate ||
    !fields.dropOffTime ||
    !fields.pickupDate ||
    !fields.pickupTime){

  }else{
    searchBookings()
  }
},[])

  return (
    <>
      <Header />
      <main>

<SearchHero airports={airports} bookings={searchedBookings}  onCheck={(e)=>{
  e.preventDefault();
  searchBookings()
}}/>


      </main>

      <Footer />
    </>
  )
}

export default Search