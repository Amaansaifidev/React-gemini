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
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";


const App = () => {
  const [name, setName] = useState("")
const [question, setQuestion] = useState("");

 const [answer, setAnswer] = useState("")
  const handleChange = (e) => {
    setQuestion(e.target.value)
  }

const handlePostRequest = async () => {
    try {
      setAnswer("loading...")
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
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handlePostRequest();
    }
  };
  
  return (
        <div style={{
  background: "linear-gradient( to right, pink, skyblue)", // Example gradient
  height: "100vh", // Ensure it covers the full page height
  
  
}}>
          <ButtonAppBar/>
          
  <GoogleLogin 
        onSuccess={(response) => {
        const name = jwtDecode(response.credential).name
          setName(name)
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
          <div style={{
          
            marginRight:"10%",
            marginLeft:"10%",
            
            
            justifyContent:"center",
            alignItems:"center",
            width:"50%",
          }}>
            <p>
              welcome {name}
            </p>
<p style={{
  
border:"1px solid gold",
borderRadius:"5px",
 display:"block",
  fontSize: "12px",
}}>{answer}</p>

<TextField variant="outlined" id="input" placeholder="type your msg" 
type="text"
onChange={handleChange}
onKeyDown={handleKeyPress} 
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

</div>
    );
  
}
export default App;