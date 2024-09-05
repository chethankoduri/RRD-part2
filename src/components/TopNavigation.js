import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function TopNavigation() {
  let highlightActivelink = (obj)=>{
if(obj.isActive == true){
        return{
          backgroundColor: "darkred", color:"white",
        };
      }
  }
  return (
  <nav>
    <NavLink to="/dashboard" style={(obj)=>{
     return highlightActivelink(obj);
    }}
      >Dashboard</NavLink>

    <NavLink to="/Tasks" style={(obj)=>{
     return highlightActivelink(obj);
    }}>Tasks</NavLink>

    <NavLink to="/leaves" style={(obj)=>{
     return highlightActivelink(obj);
    }}>Leaves</NavLink>
    
    <NavLink to="/">Signout</NavLink>
  </nav>  
)
}

export default TopNavigation