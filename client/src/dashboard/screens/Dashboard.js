import React from 'react'
import Header from '../components/header/Header'
import DashboardMain from '../components/main/DashboardMain'
import { Navigate, Route } from "react-router-dom";
function Dashboard() {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
 
    <>
      {isAuthenticated ?  (  <>
      <Header/>
      <DashboardMain/>
      </> ): (<Navigate to="/login" />)
    }
  </>
  )
}

export default Dashboard