import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute({ ...props }) {
    console.log("privateroute")
    const company = window.localStorage.getItem('company')
    console.log("company")
    if (company) {

        return <Route {...props} />
    } else {
        return <Redirect to="/email" />
    }
    // component={(props) => {
    // const company = window.localStorage.getItem('company')
    // console.log("company")
    // if (company) {
    //     localStorage.clear()
    //     console.log("indise if(comapny)")
    //     return component
    // } else {
    //     return <Redirect to="/email" />
    // }


    // }


}
export default PrivateRoute;
