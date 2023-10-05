import React, { useContext, useEffect, useState } from 'react'
import Screen from './Screen'
import TriviaContext from '../Context/TriviaContext';
import {rearrangeQuestions} from'../utils/QuestionArrange'
import Tabs from './Tabs';


function DisplayArea() {
  const {setTriviaCollection,triviaCollection,activeQuestion,setActiveQuestion,usedQuestions,setUsedQuestions,screen,setScreen,answers,setQuestions,tabDisplayBoxVisibility,setTabDisplayBoxVisibility} = useContext(TriviaContext) 
  let num = Math.floor(Math.random() * 4)
  const questionArr = []

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
    <div className='h-full'>
        <div className='h-full'>
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
        </div>
       
    </div>
  )
}

export default DisplayArea