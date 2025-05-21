import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import './Game.css';
import logo from "../assets/logo2.png";
import global from "../assets/global.jpeg";
import bgImage from "../assets/backgorund.mp4";

const Game = () => {
  const [level, setLevel] = useState(1); // Track the current level
  const [word, setWord] = useState("");
  const [reverseInput, setReverseInput] = useState("");
  const [isMatched, setIsMatched] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [canTypeReverse, setCanTypeReverse] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && timerStarted && !isInputDisabled) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setIsInputDisabled(true);
    }
  }, [timeLeft, timerStarted, isInputDisabled]);

  useEffect(() => {
    // Jab bhi word change ho, 5 sec baad reverse input enable ho aur timer start ho
    if (word) {
      setCanTypeReverse(false);
      setTimerStarted(false);
      const timer = setTimeout(() => {
        setCanTypeReverse(true);
        setTimerStarted(true); // 5 sec baad timer chalu ho
      }, 5000); // <-- yahan 5000ms (5 sec) kar diya
      return () => clearTimeout(timer);
    } else {
      setCanTypeReverse(false);
      setTimerStarted(false);
    }
  }, [word, level]);

  const handleWordInput = (e) => {
    setWord(e.target.value);
    setReverseInput("");
    setIsMatched(null);
    setTimeLeft(10);
    setIsInputDisabled(false);
    setTimerStarted(false);
    setIsBlinking(false);
  };

  const handleReverseInput = (e) => {
    if (!timerStarted) setTimerStarted(true);
    const input = e.target.value;
    setReverseInput(input);
    setIsBlinking(true);
    if (input === word.split("").reverse().join("")) {
      setIsMatched(true);
      setTimerStarted(false);
    } else {
      setIsMatched(false);
    }
  };

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
    setWord("");
  };

  const handleGenerateWord = () => {
    const genres = {
      animals: ["Chrysalis", "Aposematic", "Marsupial", "Echolocation", "Metamorphosis","Otters", "Jaguar", "Wombat", "Gibbon", "Eagles", "Viper", "Lynxes", "Herons", "Cicada", "Mantis", "Ruminant", "Cirripede", "Annelid", "Ecdysis", "Nictitating","Tarsal", "Larval", "Feral", "Mimic", "Vixen", "Hydra","Carnivorous", "Herbivorous ", "Invertebrate", "Vertebrates", "Endangerment ","Zoologically","Piscivorous","Crepuscular","Metamorphosis","Ichthyology","Paleozoology","Hemimetabolous","Sessile","Chondrichthyes"  ],
      technology: ["Steganography", "Backdoor", "Bootloader", "Hypervisor", "Cybernetics", "Microcontroller", "Obfuscation", "Exfiltration", "Kernelspace", "Heuristics","Token", "Script", "Cache", "Botnet", "Codec", "Phreak", "Trojan","Authentication","Encryption" ,"Firmware"
          ,"Database" ,"Debugging" ,"Interface" ,"Malware",
          "Networking","Scripting","Virtual machine","Configuration","Obfuscation","Cryptanalysis","Tokenization","Transcompilation","Asynchronous","Hyperconvergence","Containerization","Microarchitecture","Polyinstantiation"],
      nature: ["Photosphere", "Permafrost", "Mycorrhiza", "Anthropogenic", "Orographic", "Cryosphere", "Phreatophyte", "Succession", "Bioluminescence", "Eutrophication","Glint", "Flora", "Fauna", "Erupt", "Tundra", "Petal",
        "Deforestation","Conservation","Biodiversity", "Greenhouse","Environment","Ecotone","Anthropocentric","Phytoremediation","Orographic","Cryosphere","Eutrophication","Biogeochemical","Succession"],
      sports: ["Pentathlon", "Decathlon", "Freestyle", "Backhand", "Counterstrike", "Overarm", "Powerplay", "Slapshot", "Vaulting", "Underhand","Drill", "Jumps", "Flick", "Arena", "Relay", "Serve", "Squad","Championship", "Quarterbacks", "Sportscaster", "Athleticism", "Basketballer","Sportsmanship","Ultramarathoner","Freestyleboarding","Physiotherapist","Decathlon","Counterattacking"],

      randon:["Floccinaucinihilipilification", "Sesquipedalian", "Anachronism", "Paradoxical", "Zephyr", "Obstreperous", "Vociferous", "Lugubrious", "Pernicious", "Verisimilitude","Quirk", "Glyph", "Myths", "Joust", "Zebra", "Knack", "Wryly","quizzicality", "xenotransplant", "hyperbolically",
      "unpredictable", "cryptography", "juxtaposition",
      "unbelievable", "misunderstood", "unquestionably",
      "extraordinary", "unimaginable", "unconventional","Floccinaucinihilipilification","Triskaidekaphobia","Sesquipedalian","Antidisestablishmentarianism","Incomprehensibilities","Honorificabilitudinitatibus","Disproportionableness","Chronophotographic"]
    };

    if (selectedGenre && genres[selectedGenre]) {
      const words = genres[selectedGenre];
      let filteredWords;

      if (level === 2) {
        // Filter words with 5-6 letters for Level 2
        filteredWords = words.filter(word => word.length <= 9);
      } else if (level === 3) {
        // Use all words for Level 3
        filteredWords = words.filter(word => word.length > 10 );
      }

      const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
      setWord(randomWord);
      setReverseInput("");
      setIsMatched(null);
      setTimeLeft(10);
      setIsInputDisabled(false);
      setTimerStarted(false);
      setIsBlinking(false);
    } else {
      alert("Please select a genre first!");
    }
  };

  const handleNextLevel = () => {
    if (level < 3) {
      setLevel(level + 1); // Move to the next level
      handleReset(); // Reset the game for the next level
    } else {
      alert("You have completed all levels!");
    }
  };

  const handleReset = () => {
    setWord("");
    setReverseInput("");
    setIsMatched(null);
    setTimeLeft(10);
    setIsInputDisabled(false);
    setTimerStarted(false);
    setIsBlinking(false);
    setSelectedGenre("");
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "100px", fontSize: "200px" }}>
      {isMatched && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100px", height: "100px", zIndex: 10 }}>
          <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={10000} />
        </div>
      )}
      <video autoPlay loop muted style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={bgImage} type="video/mp4" />
      </video>
      <img 
        src={logo} 
        alt="Game Logo" 
        style={{
          position: "absolute",
          top: "100px",
          left: "100px",
          width: "700px",
          height: "700px",
        }} 
      />
      <img 
        src={global} 
        alt="college Logo" 
        style={{
          position: "absolute",
          top: "100px",
          right: "100px",
          width: "700px",
          height: "500px",
        }} 
      />
      <h1 style={{ color: "white" }}>Global YouthFest 2025</h1>
      <h1 style={{ color: "white" }}>Reverse Word Game</h1>
      <h2 style={{ color: "white" }}>Level {level}</h2>

      {level > 1 && (
        <div>
          <h5 style={{ color: "white" }}>Select a Genre:</h5>
          <select
            onChange={handleGenreChange}
            value={selectedGenre}
            style={{
              color: "neonorange",
              marginBottom: "20px",
              fontSize: "100px",
              padding: "10px",
              borderRadius: "50px",
            }}
          >
            <option value="">--Select Genre--</option>
            <option value="animals">Animals</option>
            <option value="technology">Technology</option>
            <option value="nature">Nature</option>
            <option value="sports">Sports</option>
          </select>
          <button
            onClick={handleGenerateWord}
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              fontSize: "100px",
              backgroundColor: "neonorange",
              color: "white",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            Generate Word
          </button>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <label>
          <h5 style={{ color: "white" }}>Enter a word:</h5>
          <input
            type="text"
            value={word}
            onChange={handleWordInput}
            disabled={level > 1} // Disable input for Levels 2 and 3
            className={level > 1 && isBlinking ? "blink" : ""}
            style={{
              color: "neonorange",
              animation: level > 1 && word ? "blink 1s step-start infinite" : "none",
            }}
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>
          <h5 style={{ color: "white" }}>Type the reverse:</h5>
          <input
            type="text"
            value={reverseInput}
            onChange={handleReverseInput}
            disabled={isInputDisabled || !canTypeReverse}
            style={{ color: "neonorange" }}
          />
        </label>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "white" }}>Time Left: {timeLeft} seconds</h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        {isMatched === true && <h3 style={{ color: "#39ff14" }}>Matched! Remaining Time: {timeLeft} seconds</h3>}
        {isMatched === false && <h3 style={{ color: "#ff073a" }}>Not Matched!</h3>}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button 
          onClick={handleReset} 
          style={{ 
            color: "neonorange", 
            fontSize: "100px", 
            padding: "20px 40px", 
            borderRadius: "50px", 
            cursor: "pointer" 
          }}
        >
          Reset
        </button>
        <button 
          onClick={handleNextLevel} 
          style={{ 
            color: "white", 
            backgroundColor: "green", 
            fontSize: "100px", 
            padding: "20px 40px", 
            borderRadius: "50px", 
            cursor: "pointer", 
            marginLeft: "20px" 
          }}
        >
          Next Level
        </button>
      </div>
    </div>
  );
};

export default Game;