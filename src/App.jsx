import { useState } from 'react'
import { TablaDinamica } from './Table.jsx'
import './Table.css'
import './index.css'


function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  function Button({ text }) {
    return (
      <button onClick={handleClick}>{text} {count} </button>
    )
  }

  return (
    <>
    <header className='Principal'>Random Bus Line Valencia</header>
      <TablaDinamica>
      </TablaDinamica>
      <Button text={'Aleatorizar'}></Button>
   </>
  )
}

export default App
