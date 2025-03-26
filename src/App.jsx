import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react'





const App = () => {
  
  const [answer, setAnswer] = useState("loading....")
const handlePostRequest = async () => {
    try {
      const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCzSc8Vi_MfwfqLUz2Veg7pKU-ULcYmtec", {
  "contents": [{
    "parts":[{"text": "Explain how AI works"}]
    }]
   });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
<button onClick={handlePostRequest}>send request</button>
<p>{answer}</p>
</>
    )
}
export default App;