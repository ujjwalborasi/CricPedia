import React from 'react'
import './CubeUI.css'
function CubeUI() {
    return (
   <>
   
<div class="title">
  <h1>Animated Cube Slider</h1>
  <p>CSS Only</p><br/>
  <p class="small">best viewed in firefox</p>
</div>
<div class="slider">
  <div class="container">
    <div class="slide x"></div>
    <div class="slide y"></div>
    <div class="slide z"></div>
  </div>
  <div class="shadow"></div>
</div>
{/* <p class="credit">by <span><a href="http://www.albertohartzet.com" target="_blank">Alberto Hartzet</a></span></p> */}
   </>
    )
}

export default CubeUI
