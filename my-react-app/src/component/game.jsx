// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti"; // Import the Confetti library
// import './Game.css';
// import logo from "../assets/logo2.png";
// import global from "../assets/global.jpeg";
// import bgImage from "../assets/backgorund.mp4";

// const Game = () => {
//   const [level, setLevel] = useState(1); // Track the current level
//   const [word, setWord] = useState("");
//   const [reverseInput, setReverseInput] = useState("");
//   const [isMatched, setIsMatched] = useState(null);
//   const [timeLeft, setTimeLeft] = useState(10);
//   const [isInputDisabled, setIsInputDisabled] = useState(false);
//   const [timerStarted, setTimerStarted] = useState(false);
//   const [isBlinking, setIsBlinking] = useState(false); // New state for blinking
//   const [selectedGenre, setSelectedGenre] = useState(""); // Track the selected genre

//   useEffect(() => {
//     if (timeLeft > 0 && timerStarted && !isInputDisabled) {
//       const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
//       return () => clearTimeout(timer);
//     } else if (timeLeft === 0) {
//       setIsInputDisabled(true);
//     }
//   }, [timeLeft, timerStarted, isInputDisabled]);

//   const handleWordInput = (e) => {
//     setWord(e.target.value);
//     setReverseInput("");
//     setIsMatched(null);
//     setTimeLeft(10);
//     setIsInputDisabled(false);
//     setTimerStarted(false);
//     setIsBlinking(false); // Stop blinking when the user types in "Enter a word"
//   };

//   const handleReverseInput = (e) => {
//     if (!timerStarted) setTimerStarted(true);
//     const input = e.target.value;
//     setReverseInput(input);
//     setIsBlinking(true); // Start blinking when the user types in "Type the reverse"
//     if (input === word.split("").reverse().join("")) {
//       setIsMatched(true);
//       setTimerStarted(false);
//     } else {
//       setIsMatched(false);
//     }
//   };
//   const handleGenreChange = (e) => {
//     setSelectedGenre(e.target.value); // Update the selected genre
//     setWord(""); // Clear the word field when the genre changes
//   };

//   const handleGenerateWord = () => {
//     const genres = {
//       animals: ["elephant", "giraffe", "kangaroo", "penguin", "dolphin"],
//       technology: ["computer", "internet", "keyboard", "software", "robotics"],
//       nature: ["mountain", "river", "forest", "desert", "ocean"],
//       sports: ["football", "cricket", "basketball", "tennis", "hockey"],
//     };

//     if (selectedGenre && genres[selectedGenre]) {
//       const words = genres[selectedGenre];
//       let filteredWords;

//       if (level === 2) {
//         // Filter words with 5-6 letters for Level 2
//         filteredWords = words.filter(word => word.length >= 5 && word.length <= 6);
//       } else if (level === 3) {
//         // Use all words for Level 3
//         filteredWords = words;
//       }

//       const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
//       setWord(randomWord); // Populate the "Enter a word" field with a random word
//       setReverseInput("");
//       setIsMatched(null);
//       setTimeLeft(10);
//       setIsInputDisabled(false);
//       setTimerStarted(false);
//       setIsBlinking(false);
//     } else {
//       alert("Please select a genre first!"); // Alert if no genre is selected
//     }
//   };

//   const handleNextLevel = () => {
//     if (level < 3) {
//       setLevel(level + 1); // Move to the next level
//       handleReset(); // Reset the game for the next level
//     } else {
//       alert("You have completed all levels!");
//     }
//   };

//   const handleReset = () => {
//     setWord("");
//     setReverseInput("");
//     setIsMatched(null);
//     setTimeLeft(10);
//     setIsInputDisabled(false);
//     setTimerStarted(false);
//     setIsBlinking(false);
//     setSelectedGenre(""); // Reset the selected genre
//   };

//   return (
//     <div className="App" style={{ textAlign: "center", marginTop: "100px", fontSize: "200px" }}>
//       {isMatched && (
//         <div style={{ position: "absolute", top: 0, left: 0, width: "100px", height: "100px", zIndex: 10 }}>
//           <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={10000} /> {/* Increased number of pieces */}
//         </div>
//       )} {/* Show confetti when matched */}
//       <video autoPlay loop muted style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}>
//         <source src={bgImage} type="video/mp4" />
//       </video>
//       <img 
//         src={logo} 
//         alt="Game Logo" 
//         style={{
//           position: "absolute",
//           top: "100px",
//           left: "100px",
//           width: "700px",
//           height: "700px",
//         }} 
//       />
//       <img 
//         src={global} 
//         alt="college Logo" 
//         style={{
//           position: "absolute",
//           top: "100px",
//           right: "100px",
//           width: "700px",
//           height: "500px",
//         }} 
//       />
//       <h1 style={{ color: "white" }}>Global YouthFest 2025</h1>
//       <h1 style={{ color: "white" }}>Reverse Word Game</h1>
//       <h2 style={{ color: "white" }}>Level {level}</h2>
//       <div style={{ position: "relative", marginBottom: "20px" }}>
//         {level === 1 && (
//           <div>
//             <label>
//               <h5 style={{ color: "white" }}>Enter a word:</h5>
//               <input
//                 type="text"
//                 value={word}
//                 onChange={handleWordInput}
//                 disabled={isInputDisabled}
//                 className={isBlinking ? "blink" : ""}
//                 style={{
//                   color: "neonorange",
//                   animation: word ? "blink 1s step-start infinite" : "none",
//                 }}
//               />
//             </label>
//           </div>
//         )}
//         {level > 1 && (
//           <div>
//             <h5 style={{ color: "white" }}>Select a Genre:</h5>
//             <select
//               onChange={handleGenreChange}
//               value={selectedGenre}
//               style={{
//                 color: "neonorange",
//                 marginBottom: "20px",
//                 fontSize: "100px",
//                 padding: "10px",
//                 borderRadius: "50px",
//               }}
//             >
//               <option value="">--Select Genre--</option>
//               <option value="animals">Animals</option>
//               <option value="technology">Technology</option>
//               <option value="nature">Nature</option>
//               <option value="sports">Sports</option>
//               <option value="randon">Random</option>
//             </select>
//             <button
//               onClick={handleGenerateWord}
//               style={{
//                 marginLeft: "10px",
//                 padding: "10px 20px",
//                 fontSize: "100px",
//                 backgroundColor: "neonorange",
//                 color: "white",
//                 border: "none",
//                 borderRadius: "50px",
//                 cursor: "pointer",
//               }}
//             >
//               Generate Word
//             </button>
//           </div>
//         )}
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <label>
//           <h5 style={{ color: "white" }}>Type the reverse:</h5>
//           <input
//             type="text"
//             value={reverseInput}
//             onChange={handleReverseInput}
//             disabled={isInputDisabled}
//             style={{ color: "neonorange" }}
//           />
//         </label>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <h3 style={{ color: "white" }}>Time Left: {timeLeft} seconds</h3>
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         {isMatched === true && <h3 style={{ color: "#39ff14" }}>Matched! Remaining Time: {timeLeft} seconds</h3>}
//         {isMatched === false && <h3 style={{ color: "#ff073a" }}>Not Matched!</h3>}
//       </div>
//       <div style={{ marginTop: "20px" }}>
//         <button 
//           onClick={handleReset} 
//           style={{ 
//             color: "neonorange", 
//             fontSize: "100px", 
//             padding: "20px 40px", 
//             borderRadius: "50px", 
//             cursor: "pointer" 
//           }}
//         >
//           Reset
//         </button>
//         <button 
//           onClick={handleNextLevel} 
//           style={{ 
//             color: "white", 
//             backgroundColor: "green", 
//             fontSize: "100px", 
//             padding: "20px 40px", 
//             borderRadius: "50px", 
//             cursor: "pointer", 
//             marginLeft: "20px" 
//           }}
//         >
//           Next Level
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Game;
