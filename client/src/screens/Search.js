import React, { useEffect, useRef, useState } from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SearchHero from '../components/main/searchsection/SearchHero';
import { ServerUrl } from '../helper';

function Search() {
  
  const [searchedBookings,setBookings]=useState([])

  const [airports,setAirports]=useState([])
	const [selectedAirport,setSelectedAirport]=useState('')
	const [dropOffDate,setDropOffDate]=useState('')
	const [dropOffTime,setDropOffTime]=useState('')
	const [pickupDate,setPickupDate]=useState('')
	const [pickupTime,setPickupTime]=useState('')

const dataFromPreviousPage = localStorage.getItem('dataToSearch')
var data



const searchBookingPreviousPage=async(airportName)=>{
  fetch(`${ServerUrl}/getBookingsByAirportName`,{
    method:'PUT',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({
      "airportName":airportName
    })
  }).then((r)=>r.json()).then((r)=>{
    console.log(r)
    r?.bookings.map((item,index)=>{
      setBookings(prev=>[...prev,item])
    })
  })
}
const searchBookings=async()=>{
  
  fetch(`${ServerUrl}/getBookingsByAirportName`,{
    method:'PUT',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({
      "airportName":selectedAirport
    })
  }).then((r)=>r.json()).then((r)=>{
    console.log(r)
    r?.bookings.map((item,index)=>{
      setBookings(prev=>[...prev,item])
    })
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
  if(dataFromPreviousPage){
    data=JSON.parse(dataFromPreviousPage)
    searchBookingPreviousPage(data.selectedAirport)
  }
},[])

  return (
    <>
      <Header />
      <main>

<SearchHero airports={airports} selectedAirport={selectedAirport} bookings={searchedBookings} setSelectedAirport={setSelectedAirport} setDropOffDate={setDropOffDate} setDropOffTime={setDropOffTime} setPickupDate={setPickupDate} setPickupTime={setPickupTime} onCheck={(e)=>{
  e.preventDefault();
  searchBookings()
}}/>


      </main>

      <Footer />
    </>
  )
}

export default Search