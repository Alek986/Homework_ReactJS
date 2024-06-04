import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Greetings } from './function_components/Greetings'
import { Trips } from './function_components/Trips'
import { AboutMe } from './function_components/AboutMe'


function App() {
  const fullName = "Alek Strezovski";
  const from = "Macedonia - Skopje";
  const favoriteMovies = ["Everything from Quentin Tarantino"]
  return (
    <>
    <div>
      <h1>Hello first homework in REACT</h1>

      <Greetings />
      <Trips />
      <AboutMe fullName={fullName} from={from} favoriteMovies={favoriteMovies} />
    </div>
    </>
  )
}

export default App
