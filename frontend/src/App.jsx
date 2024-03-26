import { useEffect, useState } from 'react';
import axios from 'axios'

import './App.css'

function App() {
  const [jokes,setJokes] = useState([]);

  useEffect(()=>{
    axios.get('/api/jokes')
    .then(response=>setJokes(response.data))
    .catch(error=>console.log(error))
  })

  return (
    <>
     <h1>Full Stack</h1>
     <p>jokes {jokes.length}</p>
     {
      jokes.map(joke=>(
        <div key={joke.id}>
          <h2>{joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
