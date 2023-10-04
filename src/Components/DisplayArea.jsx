import React, { useContext, useEffect, useState } from 'react'
import Screen from './Screen'
import TriviaContext from '../Context/TriviaContext';
import {rearrangeQuestions} from'../utils/QuestionArrange'
import Tabs from './Tabs';


function DisplayArea() {

   

   const {setTriviaCollection,triviaCollection,activeQuestion,setActiveQuestion,usedQuestions,setUsedQuestions,screen,setScreen,questions} = useContext(TriviaContext) 
   
  
  //  useEffect(()=>{

    

  //  },[])

   //console.log(triviaCollection[0])


//    console.log(activeQuestion.incorrect_answers)


  return (
    <div className='h-full'>
        <div className='h-full'>
        <Screen/>
        <div className='grid grid-cols-2 items-center justify-items-center  h-48'>
         {
           questions.map((q,i)=>(<Tabs key={i} id={i} ans={q} />))
         }
         </div>
        </div>
       
    </div>
  )
}

export default DisplayArea