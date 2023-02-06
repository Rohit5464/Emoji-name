// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const emojiDict = {
  
  
    "😀": {
      "name": "grinning face"
    },
    "😃": {
      "name": "grinning face with big eyes"
    },
    "😄": {
      "name": "grinning face with smiling eyes"
    },
    "😁": {
      "name": "beaming face with smiling eyes"
    },
    "😆": {
      "name": "grinning squinting face"
    },
    "🙂": {
      "name": "slightly smiling face"
    },
    "🙃": {
      "name": "upside-down face"
    },
    "🍁": {
      "name": "Marijuana leaf"
    },
    "✌️": {
      "name": "Peace out!"
    },
    "⛈️": {
      "name": "Bad weather"
    },
    "🚬": {
      "name": "Wanna smokeup?"
    },
    "📴": {
      "name": "Switch off your phopne"
    },
    "🫦": {
      "name": "Feeling horny"
    },
    "🍃": {
      "name": "Falling leaf"
    },
    "☠️": {
      "name": "Your are dead"
    },
    "🫠": {
      "name": "melting face"
    },
    "😉": {
      "name": "winking face"
    },
    "😊": {
      "name": "smiling face with smiling eyes"
    },
    "😇": {
      "name": "smiling face with halo"
    },
    "🥰": {
      "name": "smiling face with hearts"
    },
    "😍": {
      "name": "smiling face with heart-eyes"
    },
    "🤩": {
      "name": "star-struck"
    },
    "😘": {
      "name": "face blowing a kiss"
    },
    "😗": {
      "name": "kissing face"
    },
    
}

const emojiList = Object.keys(emojiDict);

function App() {
  // const [likeCounter, setLikeCounter] = useState(0);

  // function likeHandler() {
  //   var newlikeCounter = likeCounter + 1;
  //   setLikeCounter(newlikeCounter);
  // }
  const [emojiInput, setEmojiInput] = useState("");
  const [emojipr , emojiset] = useState("")

  function onChangeHandler(event) {
    var input = event.target.value;
    emojiset(input);
    

    if(input in emojiDict){
      setEmojiInput(emojiDict[input].name);
    }else if(input===""){
      setEmojiInput("");
    }
    else{
      setEmojiInput("Click on the emoji below 👇")
    }

    

    // console.log("Changed " + event.target.value);
  }
  function getKeyByValue(emojiDict, setEmojiInput) {
    return Object.keys(emojiDict).find(key => emojiDict[key] === setEmojiInput);
  }
  

  function emojiDetector(emoji){
    console.log(emoji);
    setEmojiInput(emojiDict[emoji].name);
    emojiset(emoji);
  }

  return (
    <div className="App">
      <Header/>
      {/* <h1>{likeCounter}</h1> */}
      {/* <button onClick={likeHandler}>Like</button> */}
      <input className="input" onChange={onChangeHandler} value={emojipr} ></input> 
      <br/>
      <h3 className="text">{emojiInput}</h3>
      <br/>
      {emojiList.map((emoji)=> {
        return (
          <span key={emoji} className="emoji" onClick={()=>emojiDetector(emoji)}>
            {emoji}
          </span>
        )
      })}
      <Footer/>
      
    </div>
  );
}

export default App;