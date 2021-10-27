import React from "react"
import './css/char.css'

const Char = ({ name, img }) => {
  return (
    <div className="nav-char-wrapper">
      {/* <div>{name}</div> */}
      <img src={img} alt={name + "-img"} className="nav-char-img"/>
    </div>
  )
}

export default Char
