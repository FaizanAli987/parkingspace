import React, { useEffect } from 'react'
import Header from '../components/header/Header'
import DashboardMain from '../components/main/DashboardMain'
import { Link, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
function Dashboard() {
  const isAuthenticated=useSelector((state)=>state.user.isAdminAutenticated)

  useEffect(()=>{
    // alert(isAuthenticated)
    if(isAuthenticated==false){
      
      window.location.href='/login'
    }
  },[])
  // const isAuthenticated = localStorage.getItem("isAuthenticated");

  return (
 
    <>
      {isAuthenticated ?  (  <>
      <Header/>
      <DashboardMain/>
      </> ): (<Link to="/login" />)
    }
 
  </>
  )
}

export default Dashboard