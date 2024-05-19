import React, { useState } from 'react'
import { Link, Element } from 'react-scroll';
import Home from '../Home/Home'
import Skills from '../skills/Skills';
import Project from '../projects/Project';
import Contact from '../contact/Contact'
import './navbar.css'

const Navbarstyle={
  height:"100vh",
  weidth:"100%",
  dispaly:"felx",
  justufyContent:'center',
  alignItem:'center',
  
}
function Navbar() {
  const[select ,setSelect]=useState("home")
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sai</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{cursor: 'pointer'}} >
       
        <li className="nav-item px-4" >
          <Link to='section1'   onClick={()=>{setSelect('home')}} smooth={true} duration={100} className={select=='home'?'nav-link active new':'nav-link active '} aria-current="page">Home</Link>
        </li>
        <li className="nav-item px-4">
          <Link to='section2'  onClick={()=>{setSelect('skills')}} smooth={true} duration={100} className={select=='skills'?'nav-link  active new':'nav-link active '} aria-current="page">Skills</Link>
        </li>
        <li className="nav-item px-4">
          <Link to='section3'  onClick={()=>{setSelect('projects')}} smooth={true} duration={100} className={select=='projects'?'nav-link  active new':'nav-link active ' }aria-current="page">Projects</Link>
        </li>
        <li className="nav-item px-4">
          <Link to='section4'  onClick={()=>{setSelect('contact')}} smooth={true} duration={100} className={select=='contact'?'nav-link  active new':'nav-link active '} aria-current="page">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div>
  <Element name='section1' style={Navbarstyle}><Home/></Element>
  <Element name='section2' style={Navbarstyle}><Skills/></Element>
  <Element name='section3' style={Navbarstyle}><Project/></Element>
  <Element name='section4' style={Navbarstyle}><Contact/></Element>

</div>
   </>
  )
}

export default Navbar