import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice=createSlice({
    name:'UserData',
    initialState:{
        searchAirportFelds:{
            selectedAirport:'',
			dropOffDate:'',
			dropOffTime:'',
			pickupDate:'',
			pickupTime:''
        },
        bookingDivRef:null,
        selectedBooking:null,
        travelDetails:{
            departTerminal:'',
            arrivalTerminal:'',
            outbondFlight:'',
            inboundFlight:'',

        },
        vehicleDetails:{
            Carmake:'',
            Carmodel:'',
            Carcolor:'',
            Carregistration:''
        },
        userDetails:{
            title:'',
            firstName:'',
            lastName:'',
            email:'',
            mobileNumber:'',
            confirmEmail:''
        },
        isAdminAutenticated:false
    },
    reducers:{
        setSearchAirportFields:(state,action)=>{
            const data=action.payload
            state.searchAirportFelds[data.key]=data.value
        },
        setBookingsDivRef:(state,action)=>{
            state.bookingDivRef=action.payload
        },
        setSelectedBooking:(state,action)=>{
            state.selectedBooking=action.payload
        },
        setTravelDetails:(state,action)=>{
            const data=action.payload
            state.travelDetails[data.key]=data.value
        },
        setVehicleDetails:(state,action)=>{
            const data=action.payload
            state.vehicleDetails[data.key]=data.value
        },
        setUserDetails:(state,action)=>{
            const data=action.payload
            state.userDetails[data.key]=data.value
        },
        setAdminAuth:(state,action)=>{
        
            state.isAdminAutenticated=action.payload
        }
    }
})

export const {setAdminAuth,setSearchAirportFields,setBookingsDivRef,setSelectedBooking,setTravelDetails,setVehicleDetails,setUserDetails}=userDataSlice.actions
export default userDataSlice.reducer