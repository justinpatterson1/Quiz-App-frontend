import React, { useContext, useEffect, useState } from 'react'
import Screen from './Screen'
import TriviaContext from '../Context/TriviaContext';
import {rearrangeQuestions} from'../utils/QuestionArrange'
import Tabs from './Tabs';
import { useNavigate } from 'react-router-dom';


function DisplayArea() {
  const {setTriviaCollection,triviaCollection,activeQuestion,setActiveQuestion,usedQuestions,setUsedQuestions,screen,setScreen,answers,setQuestions,tabDisplayBoxVisibility,setTabDisplayBoxVisibility,score,setScore,gameSettings} = useContext(TriviaContext) 
  let num = Math.floor(Math.random() * 4)
  const questionArr = []

  const navigate = useNavigate()
   useEffect(()=>{
 
   
   
   //console.log(triviaCollection[0].question)
 
//  setScreen(triviaCollection[0].question)

//    questionArr.push(...triviaCollection[0].incorrect_answers)
  
//   questionArr.splice(num,0,triviaCollection[0].correct_answer)

//   setQuestions(questionArr)
//   setActiveQuestion(triviaCollection[0])


    

    },[])

   console.log(triviaCollection)


//    console.log(activeQuestion.incorrect_answers)


  return (
    <div className='h-full w-full '>
          
        <div className='h-full w-full absolute '>

        <p className='text-center text-white  relative h-10 top-10'>{score}</p>
        <Screen/>
        <div  className={
            tabDisplayBoxVisibility.value === true? 
             'grid grid-cols-2 items-center justify-items-center  h-48' 
              : 
              'hidden'
              }>
         {
           answers.map((q,i)=>(<Tabs key={i} id={i} ans={q} />))
         }
         </div>
         <div className={
            tabDisplayBoxVisibility.value === true?
            ' hidden' 
              : 
              'text-center h-auto '  
              }>

              <div className='h-auto'>
                        <div className='mb-5'>
                        <span className='text-white text-4xl'>{score}</span> <span className='text-red-300 text-xl'>/ {gameSettings.question}</span>
                        </div>
                   
                   <div className="flex justify-center space-x-4">
                        <button className='w-1/3 h-10 text-center bg-green-400' onClick={(evt)=>{
                          evt.preventDefault()
                          setTabDisplayBoxVisibility({value:true})
                          setTriviaCollection([]);
                          setScore(0)
                          navigate("/start")
                        }}>Play Again ?</button>
                        <button className='w-1/3 h-10 text-center bg-red-400' onClick={(evt)=>{
                          evt.preventDefault()
                          navigate("/")
                        }}>Logout</button>
                  </div>
              </div>
                  
                  
         </div>
       
        </div>
       
    </div>
  )
}

export default DisplayArea