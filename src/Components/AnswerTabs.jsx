import React, { useCallback, useContext } from 'react'
import Tabs from './Tabs'
import TriviaContext from '../Context/TriviaContext'

function AnswerTabs() {

    const{activeQuestion,setActiveQuestion} = useContext(TriviaContext);

    
  return (
    <div>
        {
            activeQuestion.map((question,i)=>(<Tabs key={i} id={i} ans={question}/>))
        }
    </div>
  )
}

export default AnswerTabs