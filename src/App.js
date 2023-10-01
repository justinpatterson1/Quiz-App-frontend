import {useState,useContext, useEffect} from 'react'
import background from './assets/img/Quiz-Background.jpg'
import Screen from './Components/Screen';

const BG = {
  'width':'100%',
  'height': "100vh",
  'backgroundImage': `url(${background})`,
  "backgroundPosition": " center",
  "backgroundRepeat": "no-repeat",
  "backgroundSize": "cover",
  "margin": "0 auto"
}



function App() {

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
    .then(res=>res.json())
    .then(json=>console.log(json))
  },[])
  
  return (
    <div  style={BG}>
     < Screen/>
    </div>
  );
}

export default App;
