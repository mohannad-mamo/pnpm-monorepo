import { useState } from 'react'
import './App.css'
import {PetsComponent} from '@mohannad/lib_b'
import {PeopleComponent} from '@mohannad/lib_a'

export function App() {
  const [showNames, setShowNames] = useState(false)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setShowNames((prev) => !prev)}>
        {showNames ? 'Hide' : 'Show'} names
        </button>
      </div>
      <PetsComponent showNames={showNames} />
      <PeopleComponent showNames={showNames} />

    </>
  )
}
