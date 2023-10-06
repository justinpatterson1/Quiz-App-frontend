import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import TriviaContext from '../Context/TriviaContext';
import jwtDecode from 'jwt-decode';


function LoginPage() {

    const {setLogin} = useContext(TriviaContext)

    const [myusername,setUserName] = useState("");
    const [mypassword,setPassword] = useState("");
    const [error,setError] = useState("");

    const navigate = useNavigate()
    const loginUser = async(evt)=>{
        evt.preventDefault()

      
        
        try {

            let response = await fetch("http://localhost:4000/users/auth",{
                method:'POST',
                headers : {
                    'Content-Type': 'application/json',
                     
                },
                body:JSON.stringify({userName:myusername,password:mypassword})
            })

            if(response.status === 200){
               

                const json = await response.json();
                localStorage.setItem("token",json.jwt);
                const token = localStorage.getItem("token")

                const user = jwtDecode(token)

                setLogin(user)

                console.log(user)
                setError("")
                navigate("/")
            } 
                else {
                    setError("Incorrect Email/Password")
                }
            console.log(response)
            
        } catch (error) {

                
                console.log(error.message)
        }

        // console.log(myusername)
        // console.log(mypassword)
      

      
    }
  return (
    <div className=' h-screen grid grid-cols-1 justify-items-center items-center'>

            <form action="">
                <p className='text-red-500 text-md text-center'>{error}</p>
                <div className=' grid grid-cols-1 gap-4 mt-3'>   
                    <input type="text" className='border border-6 border-black w-48 py-2 px-2 placeholder:px-2' placeholder='Username...' value={myusername} 
                    onChange={(evt)=>{
                        setUserName(evt.target.value)
                    }} />
                    <input type="password" className='border border-6 border-black w-48 py-2 px-2 placeholder:px-2' placeholder='Password...' value={mypassword} 
                    onChange={(evt)=>{
                        setPassword(evt.target.value)
                    }} />
                </div>
               
                <div className='flex space-x-4 justify-center mt-5'>
                    <button type="submit" className="px-4 py-2 bg-green-300 rounded-md"onClick={loginUser}> Sumbit</button>
                    <button type="reset" className="px-4 py-2 bg-red-300 rounded-md">Reset</button>
                </div>
               
            </form>

    </div>
  )
}

export default LoginPage