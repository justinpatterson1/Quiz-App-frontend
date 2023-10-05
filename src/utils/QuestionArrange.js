const getAnswers = (arr)=>{
    const answer = []
    const num =  Math.floor(Math.random()*4)

    answer.push(...arr.incorrect_answers) ;

    answer.splice(num,0,arr.correct_answer)
    console.log(arr)
   return answer
   //questions;
}

const nextQuestion = (arr,screen,answers,count,setCount,setCorrectAns,setTabVisibile)=>{
    if(count!==9){
       

        screen(arr[count].question)
        answers(getAnswers(arr[count]))
        setCorrectAns(arr[count].correct_answer)
        
       console.log(count)
        console.log(arr[count])
         updateCount(count,setCount)
    //    // console.log(count)
    } else {
        screen("The Game has Ended")
        setTabVisibile({value:false})
    }
 
//console.log(count)
}


const updateCount = (count,setCount)=>{
    let newCount = count;

    
     newCount++
     setCount(newCount)
    //console.log(newCount)
}
const assignQuestions = (trivia,setQuestion,screen,setQuestions,setCorrectAns,actQuestion,setTrivia)=>{
    const questionArr = [];

    let num = Math.floor(Math.random() * 4)

        // let newLisit = trivia

        // //     //usedQuestion(activeQuestion)

        //     let unusedQuestions = newLisit.filter((question)=>{return question.question !== actQuestion.question})
        // //     console.log(unusedQuestions)
        //     setTrivia(unusedQuestions)

        setQuestion(trivia[0])
      
        screen(trivia[0].question)
        
        questionArr.push(...trivia[0].incorrect_answers)
        
        questionArr.splice(num,0,trivia[0].correct_answer)
      
        setCorrectAns(trivia[0].correct_answer)
        setQuestions(questionArr)
   
   
   
  }


  

const answerCheck=  (ans,correct_ans,arr,screen,answers,count,setCount,setBlink,setCorrectAns,setTabVisibile)=>{

    if(correct_ans === ans){
       
       nextQuestion(arr,screen,answers,count,setCount,setCorrectAns,setTabVisibile)
   
        return true;
    } else {
        
        wrongAnswer(arr,screen,answers,count,setCount,setBlink,setCorrectAns,setTabVisibile)
        return false;
    }

}

const wrongAnswer =(arr,screen,answers,count,setCount,setBlink,setCorrectAns,setTabVisibile)=>{
    let counter = 0
    setBlink(true)
  let timer =  setInterval(()=>{

         
          
          //console.log("hello")
         

      
          setBlink(true)
          //console.log(count)


          counter++

          if(counter===1){
            clearInterval(timer)
            nextQuestion(arr,screen,answers,count,setCount,setCorrectAns,setTabVisibile)
            setBlink(false)
          }
          
         
          
      },1000)

    
  //     //clearInterval(timer)
  //    // setBlink(false)

     


   }

module.exports = {getAnswers,answerCheck,assignQuestions,nextQuestion,updateCount,wrongAnswer}