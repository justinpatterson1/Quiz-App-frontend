import {useState,useContext, useEffect} from 'react'
import background from './assets/img/Quiz-Background.jpg'
import Screen from './Components/Screen';
import TriviaContext from './Context/TriviaContext';
import DisplayArea from './Components/DisplayArea';

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
const [triviaCollection,setTriviaCollection] = useState([]);
const [activeQuestion,setActiveQuestion] = useState();
const [usedQuestions,setUsedQuestions] = useState([]);
const [screen,setScreen] = useState();
const [questions,setQuestions] = useState([])

const questionArr = [];
  useEffect(()=>{
   

    fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple")
    .then(res=>res.json())
    .then(json=>{
      setTriviaCollection(json.results)

      if(triviaCollection.length !== 0){
        let num = Math.floor(Math.random() * 4)
      setActiveQuestion(triviaCollection[0])
  
      setScreen(triviaCollection[0].question)
      questionArr.push(...triviaCollection[0].incorrect_answers)
  
      questionArr.splice(num,0,triviaCollection[0].correct_answer)

      setQuestions(questionArr)

      }
      //setActiveQuestion(json.results[0])
    })
   

   


    

  
    // /console.log("New Collection")
  

  },[])

//   const rearrangeQuestions = (arr)=>{
//     const questions = []
//     const num =  Math.floor(Math.random()*4)

//    questions.push(...arr.incorrect_answers) ;

//    questions.splice(num,0,arr.correct_answer)
//    return questions
//    //questions;
// }



//   if(usedQuestions.length === 0 ){
//     const newQuestion = triviaCollection[0]
//     setActiveQuestion (newQuestion);
//     console.log(newQuestion)
//     //setScreen(newQuestion.question)
//    } else {
//        const listofUnusedTrivia =  usedQuestions.find((q)=> usedQuestions.id !== q.id)

//        setTriviaCollection(listofUnusedTrivia);

//        setActiveQuestion(triviaCollection[0])
//    }
   

   

  return (
    <TriviaContext.Provider value={{triviaCollection,setTriviaCollection,activeQuestion,setActiveQuestion,usedQuestions,setUsedQuestions,screen,setScreen,questions,setQuestions}}>
    <div  style={BG}>
      <DisplayArea/>

    </div>
    </TriviaContext.Provider>
  );
}

export default App;
