import React, { useContext } from 'react'
import TriviaContext from '../Context/TriviaContext'
import { useNavigate } from 'react-router-dom'
import { assignQuestions,getAnswers ,updateCount} from '../utils/QuestionArrange';

function StartPage() {
    const navigate = useNavigate()

    
    const setQuestions = () =>{
        fetch(`https://opentdb.com/api.php?amount=${gameSettings.question}&category=${gameSettings.catergory}&difficulty=${gameSettings.difficulty}&type=multiple`)
          .then(res=>res.json())
          .then(json=>{
      
            //console.log(json.results)
            setTriviaCollection(json.results);
            setScreen(json.results[0].question);
            setAnswers(getAnswers(json.results[0]));
            setCorrectAnswer(json.results[0].correct_answer);
            updateCount(count,setCount)
          })
          .catch((err)=>{
            console.log(err.message)
          })    
    }


    const {gameSettings,setGameSettings,setTriviaCollection,setScreen,setAnswers,setCorrectAnswer,updateCount,count,setCount} =useContext(TriviaContext)
  return (
    <div className='h-screen grid grid-cols-1 items-center'>
        <h1 className='text-center text-2xl text-white text'>Select Game</h1>
        <div className='grid grid-cols-1 justify-items-center items-center  h-1/2'>
                <form action="" className='grid  grid-cols-1 justify-items-center items-center  w-2/3 h-full gap-0'>


                    <select name="difficulty" id="difficulty" className='w-1/2 h-10 text-center border-double border-black border-4 hover:border-red-400'
                            onChange={(evt)=>{
                                setGameSettings({...gameSettings,difficulty:evt.target.value})
                            }}
                        >
                        <option value="" selected disabled hidden className=' hover:bg-pink-300 '>Difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>

                    <select name="question" id="question" className='w-1/2 h-10 text-center border-double border-black border-4 hover:border-red-400'
                    onChange={(evt)=>{
                        setGameSettings({...gameSettings,question:evt.target.value})
                    }}>
                        <option value="" selected disabled hidden className=' hover:bg-pink-300 '># of Questions</option>
                        <option value='10'>10</option>
                        <option value='15'>15</option>
                        <option value='20'>20</option>
                    </select>

                    <select name="catergory" id="catergory" className='w-1/2 h-10 text-center border-double border-black border-4 hover:border-red-400' 
                    onChange={(evt)=>{
                        setGameSettings({...gameSettings,catergory:evt.target.value})
                    }}>
                        <option value="" selected disabled hidden className=' hover:bg-pink-300 '>Catergory</option>
                        <option value='21'>Sports</option>
                        <option value='27'>Animals</option>
                        <option value='26'>Celebrities</option>
                        <option value='14'>Television Shows</option>
                    </select>
                    <button className={ 
                        gameSettings.difficulty === "" || gameSettings.question==="" || gameSettings.catergory ===""
                        ? 
                            'hidden'
                        :
                             'w-1/2 h-10 text-center bg-green-400'
                            }
                        onClick={(evt)=>{
                            evt.preventDefault()
                            console.log(gameSettings)
                            setQuestions()
                            navigate("/game")
                        }}>Start</button>
                </form>
        </div>
            
    </div>
  )
}

export default StartPage