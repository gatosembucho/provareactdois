import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  
  const [user, setUser] = useState([])
  const [endereco, setEndereco] = useState({})
  const [habilidades, setHabilidades] = useState({})
  const [projetos, setProjetos] = useState({})
    useEffect (() => {
     getUser();
  },[])

  const getUser = async () =>{
    const response = await axios.get('https://avaliacao-bosch.onrender.com/usuario')
    setUser(response.data);
    setEndereco(response.data.endereco);
    setHabilidades(response.data.habilidades);
    setProjetos(response.data.projetos);
  }
  return (
    <>
    <ul className='flex gap-4 flex-wrap'>
      <div className='mb-6 p-10 bg-pink-200 rounded flex flex-row space-x-25 w-150 h-100'>
        <div className='space-y-4'>
          <div className='font-bold'>{user.nome} </div>
          <div>Idade: {user.idade} </div>
          <div>Email: {user.email}</div>
          <div>Endereço: {endereco.rua} {endereco.numero}</div>
            <div>Cidade: {endereco.cidade} {endereco.estado}</div>
        </div>
        <div>
          <div className='font-bold'>Habilidades:</div>
          <div>•{habilidades[0]}</div>
          <div>•{habilidades[1]}</div>
          <div>•{habilidades[2]}</div>
          <div>•{habilidades[3]}</div>
        </div>

        <div className='space-y-4'>
          <div className='font-bold'>Projetos:</div>
          <div>•{projetos[0].nome}</div>
          <div>{projetos[0].status}</div>
          <div>•{projetos[1].nome}</div>
          <div>{projetos[1].status}</div>
          <div>•{projetos[2].nome}</div>
          <div>{projetos[2].status}</div>
        </div>
      </div>
    </ul>
    {/* nicolas nn deu tempo eu juro q eu nn tenho um senso estetico tao ruim assim */}
    </>
  )
}

export default App
