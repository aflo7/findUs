import React, { useEffect, useState } from "react"
import "./css/app.css"
import { db } from "./fb-config"
import { doc, setDoc } from "firebase/firestore"
import Char from "./Char"

function App() {
  const [userKey, setUserKey] = useState()
  const [userDoc, setUserDoc] = useState()
  const [userScore, setUserScore] = useState(0)
  const [charsLeft, setCharsLeft] = useState([
    { name: "Yubaba", src: "/yubaba.png" },
    { name: "Knight", src: "/knight.png" },
    { name: "Bowser", src: "/bowser.png" }
  ])

  useEffect(() => {
    // setUserKey(String(Date.now()))
  }, [])

  // const updateDoc = async () => {
  //   const ref = doc(db, 'players', userKey)
  //   await setDoc(ref, {score: 0})
  // }

  // useEffect(() => {
  //   if (userKey) {
  //     updateDoc()
  //   }
  // }, [userKey])

  const flashGreen = () => {
    let imgWrap = document.getElementById("img-wrapper")
    imgWrap.style.background = "lightgreen"
    setTimeout(() => {
      imgWrap.style.background = "gray"
    }, 500)
  }

  const click = (e, name) => {
    e.preventDefault()
    let found = false

    console.log(name)
    for (let i = 0; i < charsLeft.length; i++) {
      if (charsLeft[i].name === name) {
        flashGreen()
        found = true
        break
      }
    }

    if (found) {
      const newArr = charsLeft.filter((item) => item.name !== name)
      setCharsLeft(newArr)
      flashGreen()
    }
    if (userScore < 3) {
      setUserScore(userScore + 1)
    }
    
  }

  useEffect(() => {}, [charsLeft])

  return (
    <div className="App">
      <div className="app-nav-bar">
        
        <div className="mini-char-wrapper">
        <div className="top-left-text">Left to Find: </div>
          {charsLeft.map((item, i) => {
            return <Char key={i} name={item.name} img={item.src} />
          })}
        </div>

        <div className="score-text">Score: {userScore}</div>
      </div>
      <div id="img-wrapper" className="img-wrapper">
        <img
          className="game-img"
          src="/resizedGameImg.jpeg"
          alt="game background"
          useMap="#gameMap"
        />

        <map name="gameMap">
          <area
            alt="Yubaba"
            href=""
            coords="491,358,561,456"
            shape="rect"
            onClick={(e) => click(e, "Yubaba")}
          />
          <area
            alt="Knight"
            href="#"
            coords="658,7358,692,7417"
            shape="rect"
            onClick={(e) => click(e, "Knight")}
          />
          <area
            alt="Bowser"
            href="#"
            coords="1040,3175,1239,3335"
            shape="rect"
            onClick={(e) => click(e, "Bowser")}
          />
        </map>
      </div>
    </div>
  )
}
export default App
