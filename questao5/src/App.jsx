import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'



function App() {
   const [users, setUser] = useState([])
    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await axios.get('https://avaliacao-bosch.onrender.com/all')
        setUser(response.data)
    }
  return (
    <>
      <ul className="flex flex-wrap gap-4 justify-center">
          {users.map(user => ( 
            <li 
            key={user.id}
            className="mb-6 p-10 bg-pink-50 shadow-pink-100 shadow-lg rounded w-50 h-60"
            style={{minWidth: '150px'}}
            >
            <div className=" flex flex-col justify-center items-center h-full text-[14px] text-pink-500">
               <div className='font-bold justify-center'>{user.nome} {user.sobrenome} </div>
               <div><img src={user.imagem} className='w-50 h-30'/></div>
                <div> </div>
                <div>{user.apelido} </div>
                <div className='text-green-600 font-bold'>{user.status} </div>
                <div>{user.id} </div>
                  
            </div>
            </li>
          ))}
      </ul>
    </>
  )
}

export default App

