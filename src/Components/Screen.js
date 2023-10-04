import React,{useContext} from 'react'
import TriviaContext from '../Context/TriviaContext'

function Screen() {

  const {screen} = useContext(TriviaContext)
  return (
    <div className='h-2/3 grid grid-cols-1 justify-items-center  '>
        <div className='w-1/2 h-1/2 bg-white border-double border-black border-4 mt-20 grid grid-cols-1 justify-items-center items-center' >{screen}</div>
    </div>
  )
}

export default Screen