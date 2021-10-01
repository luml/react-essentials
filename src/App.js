import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy")
  const [secondary, setSecondary] = useState("tired")

  useEffect(() => {
    console.log(`It's ${secondary} around here`)
  }, [secondary])

  // second parameter dependency array will watch state values whatever in that array
  // Only run when watching variables have changed
  useEffect(() => {
    console.log(`It's a ${emotion} around here`)
  }, [emotion])
  return (
    <>
      <h1>Hey, current emotion is {emotion} and {secondary}</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setEmotion("enthusiastic")}>Enthusiastic</button>
      <button onClick={() => setSecondary("crabby")}>Make Crabby</button>
      <button onClick={() => setEmotion("frustrated")}>Frustrate</button>
    </>
  )
}

export default App;
