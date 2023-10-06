import {useState,useContext, useEffect} from 'react'
import background from './assets/img/Quiz-Background.jpg'
import Screen from './Components/Screen';
import LoginPage from './Components/LoginPage';
import TriviaContext from './Context/TriviaContext';
import DisplayArea from './Components/DisplayArea';
import AppLayout from './Components/AppLayout';
import { assignQuestions,getAnswers ,updateCount} from './utils/QuestionArrange';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import StartPage from './Components/StartPage';

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
const [answers,setAnswers] = useState([]);
const [correctAnswer,setCorrectAnswer] = useState();
const [count,setCount] = useState(0)
const [tabDisplayBoxVisibility,setTabDisplayBoxVisibility] = useState({value:true});
const [login,setLogin] = useState({})
const [gameSettings,setGameSettings] = useState({
                                                  difficulty:"",
                                                  question:"",
                                                  catergory:""
                                                })


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
         <Route indexed path="login" element={<LoginPage/>}/>
         <Route  path="/" element={<DisplayArea/>}/>
         <Route path="start" element={<StartPage/>}/>

    </Route>
  )
)

// const assignQuestions = (json)=>{
//   const questionArr = [];
//   let num = Math.floor(Math.random() * 4)
//   setActiveQuestion(json.results[0])
    
//   setScreen(json.results[0].question)
  
//   questionArr.push(...json.results[0].incorrect_answers)
  
//   questionArr.splice(num,0,json.results[0].correct_answer)

//   setQuestions(questionArr)
//   setActiveQuestion(json.results[0])
// }

  useEffect(()=>{
   const abortController = new AbortController();
   const signal = abortController.signal
  //  / console.log("hi")
    fetch(`https://opentdb.com/api.php?amount=${gameSettings.question}&category=${gameSettings.catergory}&difficulty=${gameSettings.difficulty}&type=multiple`,{
      signal :abortController.signal
    })
    .then(res=>res.json())
    .then(json=>{

      //console.log(json.results)
      setTriviaCollection(json.results);
      setScreen(json.results[0].question);
      setAnswers(getAnswers(json.results[0]));
      setCorrectAnswer(json.results[0].correct_answer);
      updateCount(count,setCount)
      

    
  
       
      
       
  
       //assignQuestions(json.results,setActiveQuestion,setScreen,setQuestions,setCorrectAnswer,activeQuestion,setTriviaCollection)
       
        
  
        //console.log(json.results)
      
    
      //console.log(activeQuestion)
      
    })
    .catch(error => {
      if (error.name !== 'AbortError') {
          console.error(error.message)
      }
  })

    //console.log(triviaCollection)
   

   


    

  
    // /console.log("New Collection")
  return ()=> abortController.abort();

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
    <TriviaContext.Provider value={{triviaCollection,setTriviaCollection,activeQuestion,setActiveQuestion,usedQuestions,setUsedQuestions,screen,setScreen,answers,setAnswers,correctAnswer,setCorrectAnswer,count,setCount,tabDisplayBoxVisibility,setTabDisplayBoxVisibility,login,setLogin,gameSettings,setGameSettings}}>
    <div  style={BG}>
      <RouterProvider router={router}/>

    </div>
    </TriviaContext.Provider>
  );
}

export default App;
