// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import './main.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// import React, {useState} from 'react'

// const App = () => {
//   let [color, SetColor] = useState('lightgreen');
//   let [input, SetInput] = useState('')
//   function fun1() {
//     // console.log('heheh');
//     SetColor('blue');
//   }
//   return (
//     <div style={{ backgroundColor: color, height: "100vh", width: "100vw" }}>
//       <h3></h3>
//       <button onClick={fun1}>++</button>
//       <button onClick={fun1}>--</button>
//       <input onChange={(e) => SetInput(e.target.value)} />
//       <h2>{input.length}</h2>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
//         {Array.from({ length: input.length }).map((_, index) => (
//           <div
//             key={index}
//             style={{
//               width: "100px",
//               height: "150px",
//               backgroundColor: "blue",
//               borderRadius: "50%",
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App

// import React from "react";

// const Circle = () => {
//   return (
//     <div
//       style={{
//         width: "100px",
//         height: "100px",
//         backgroundColor: "blue",
//         borderRadius: "50%",
//       }}
//     ></div>
//   );
// };

// export { Circle };

// import React, {useState, useEffect} from 'react'

// const App = () => {

//     let [time,SetTime]= useState('')
//     // Removed redundant setInterval call
//   const [isRunning, setIsRunning] = useState(true);

//   useEffect(() => {
//     let interval;
//     if (isRunning) {
//       interval = setInterval(() => {
//         let t = new Date().toLocaleTimeString();
//         SetTime(t);
//       }, 10);
//     }
//     return () => clearInterval(interval);
//   }, [isRunning]);

//   return (
//     <div style={{ textAlign:"center",textTransform:"uppercase" }}>
//       <h2>{time}</h2>
//       <button onClick={() => setIsRunning(!isRunning)}>
//         {isRunning ? "Stop" : "Start"}
//       </button>
//     </div>
//   );
// }

// export default App
// import React, { useEffect, useState } from 'react'

// const App = () => {
//   let [count,SetCount]=useState(0)
//   let [city,SetCity]=useState("delhi")


  // console.log("hellloo");
  // fetch('https://dummyjson.com/products').then((res)=>{
  //   return res.json()

  // }).then(())


  // useEffect(()=>{
  //   async  function apiCall(){
  //     let data=   await   fetch('https://dummyjson.com/products')
  //         let res=      await data.json()
  //     console.log(res);
  //  }
  //  apiCall()

  // },[count])
  // return (
    // <div>
    //   <h3>{count}</h3>
    //   <h4>{city}</h4>
    //   <button onClick={()=>SetCity('bhopal')}>city</button>
    //     <button onClick={()=>SetCount(count+1)}>++</button>
    // </div>
//   )
// }

// export default App

// import React from 'react'



// const App = () => {
//   return (
//     <div >
//       <button>red</button>
//       <button>blue</button>
//       <button>green</button>
//       <button>purple</button>
//       <button>pink</button>
//       <button>click</button>
//     </div>
//   )
// }

// export default App
// import React, { useState } from 'react';
// function App() {

//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// }
// export default App;
// import React from 'react'
// import Welcome from './component/Welcome.jsx'

// const App = () => {
//   return (
//     <div>
//       <Welcome name = "Sahil" />
//       <Welcome name = "Suyash" />
//     </div>
//   )
// }

// export default App

import React from 'react'
import Game from './component/Indo.jsx'
// import Game from './component/game.jsx'
// import SpinWheel from './component/Wheel.jsx'


const App = () => {
  return (
    <div>
      <Game/>
      {/* <SpinWheel/> */}
    </div>
  )
}

export default App

