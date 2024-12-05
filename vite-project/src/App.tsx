import { useEffect, useState } from 'react'
import './App.css'
import Shrubs from './Components/Shrubs'
import { BrowserRouter } from 'react-router-dom'
import cors from "cors";

function App() {

interface Animal {
  name: string,
  image: string,
  description: string
}

  const [animal, setAnimal] = useState<Animal>({name:'', image:'',description:''})


  useEffect(() => {
    fetch('https://extinct-api.herokuapp.com/api/v1/animal/')
      .then((response) => response.json())
      .then((animal) => {
        console.log(animal)
        setAnimal({
          image: animal.data[0].imageSrc,
          name: animal.data[0].commonName,
          description: animal.data[0].shortDesc
          
        });
      });
  }, []);
  return (
    <>
    <img src={animal.image}/>
    <p>{animal.name}</p>
    <p>{animal.description}</p>
    </>
  )
}

export default App
