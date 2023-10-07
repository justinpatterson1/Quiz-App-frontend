import React, { useContext,useState } from 'react'
import {Navigate,useNavigate} from 'react-router-dom'
import {answerCheck,wrongAnswer,nextQuestion} from '../utils/QuestionArrange'
import TriviaContext from '../Context/TriviaContext'




function Tabs({ans}) {

  

  const {correctAnswer,setCorrectAnswer,activeQuestion,setTriviaCollection,triviaCollection,setActiveQuestion,setScreen,answers,setUsedQuestion,count,setCount,setAnswers,setTabDisplayBoxVisibility,score,setScore} = useContext(TriviaContext)
  const [blink,setBlink] = useState(false)
  const navigate = useNavigate()
    return (
   
        <button className={
          blink !== true ?
        'w-1/2 h-2/3 bg-white border-double border-black border-4 text-center grid grid-cols-1 items-center'
        :
        'w-1/2 h-2/3 bg-red-400 border-double border-black border-4 text-center grid grid-cols-1 items-center'
      } 
        value={ans}
        onClick={(evt)=>{
          
          answerCheck(evt.target.value,correctAnswer,triviaCollection,setScreen,setAnswers,count,setCount,setBlink,setCorrectAnswer,setTabDisplayBoxVisibility,score,setScore)
          console.log(score)

        }}
        
        >
                {ans}
        </button>
    
  )
}

export default Tabs