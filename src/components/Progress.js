import React from 'react'
import '../style/progress.css'
import logo from '../images/logo.png'

const Progress = () => {
  return (
    <>
    
    <div class="container">
    <img src={logo} alt="logo"/>
      <div class="box">
        <div class="animation">
        <div class="one spin-one"></div>
        <div class="two spin-two"></div>
        <div class="three spin-one"></div>
      </div>
      <h1>Under maintenance</h1>
      <p>Update in progress. </p>
      </div>
    </div>
    </>
  )
}

export default Progress

