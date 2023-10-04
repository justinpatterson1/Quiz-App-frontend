const rearrangeQuestions = (arr)=>{
    const questions = []
    const num =  Math.floor(Math.random()*4)

   questions.push(...arr.incorrect_answers) ;

   questions.splice(num,0,arr.correct_answer)
   return questions
   //questions;
}

module.exports = {rearrangeQuestions}