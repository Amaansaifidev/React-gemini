import React from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react'
import ButtonAppBar from './Components/Navbar.jsx'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const App = () => {
const [question, setQuestion] = useState("");

 const [answer, setAnswer] = useState("loading....")
  const handleChange = (e) => {
    setQuestion(e.target.value)
  }

const handlePostRequest = async () => {
    try {
      const response = await axios.post("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCzSc8Vi_MfwfqLUz2Veg7pKU-ULcYmtec", {
  "contents": [{
    "parts":[{"text": `${question}`}]
    }]
   });

      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
        <>
          <ButtonAppBar />
          <div style={{
          
            marginRight:"10%",
            marginLeft:"10%",
            marginTop:"10%",
            
            justifyContent:"center",
            alignItems:"center",
            width:"50%",
          }}>
<p style={{
 display:"block",
  fontSize: "12px",
}}>{answer}</p>

<TextField variant="outlined" id="input" placeholder="type your msg" 
type="text"
onChange={handleChange}
value={question}
style={{
  display:"block",
  padding:"-1px"
}}
/>

<Button variant="contained" endIcon={<SendIcon />} size="small" onClick={handlePostRequest}
className="ans"
style={{
   border: "1px solid black",
   backgroundColor: "grey"
  
}}>send request</Button>
</div>

</>
    );
  
}
export default App;