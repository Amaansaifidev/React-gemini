import './index.css';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"


import React from 'react'
import { useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import SendIcon from '@mui/icons-material/Send';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useState } from 'react'

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { jwtDecode } from "jwt-decode";
import GoogleAuth from './Components/GoogleAuth.jsx'

const App = () => {
  const inputref = useRef(null)
  const [copySucces, setCopySucces] = useState("")
  function renew() {
    setQuestion("")
  }        
  function click() {


    renew();
    handlePostRequest();
  }
  const copyhandler = async () => {
    
  if (!answer) {
    setCopySucces("No text to copy!");
    return;
  }
     try {
    await navigator.clipboard.writeText(answer);
    setCopySucces("Copied successfully!");
  } catch (err) {
    setCopySucces("Failed to copy!");
  }
};
  const [name, setName] = useState("")
const [question, setQuestion] = useState("");

 const [answer, setAnswer] = useState("")
  const handleChange = (e) => {
    setQuestion(e.target.value)
  }

const handlePostRequest = async () => {
    try {
      setAnswer("loading...")
      const response = await axios.post(import.meta.env.VITE_API_URL, {
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
  background: "slate", // Example gradient
  height: "100%",
  width: "100%",
  minHeight: "100vh"
  
  
}}>
      <Menubar className="bg-gray-900 text-white border-gray-700 dark">
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent className="bg-gray-800 text-white">
      <MenubarItem>New Tab</MenubarItem>
      <MenubarItem>Open File</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
     <GoogleAuth />

          <div style={{
          
            marginRight:"5%",
            marginLeft:"5%",
            
            
            justifyContent:"center",
            alignItems:"center",
            width:"90%",
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
<Button variant="outlined" size="small" endIcon={
  <ContentCopyIcon />
} onClick={copyhandler}>copy Answer</Button>

<TextField ref={inputref} variant="outlined" id="input" placeholder="type your msg" 
type="text"
onChange={handleChange}
onKeyDown={handleKeyPress} 
value={question}
style={{
  display:"block",
  padding:"-1px"
}}
/>


<Button variant="contained" endIcon={<SendIcon />} size="small" onClick={click}
className="ans"
style={{
   border: "1px solid black",
   backgroundColor: "grey"
  
}}>send request</Button>
</div>

</div
    >
    );
  
}
export default App;
