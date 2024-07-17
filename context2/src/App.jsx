
import './App.css'
import React , {useState} from 'react'
import Counter from './components/Counter'
import { useContext } from 'react'
import { CounterContext } from './context/Counter'
function App() {

  const counterState = useContext(CounterContext)
  console.log(counterState)
  return (
    <>
  <h1>Context {counterState.count}</h1>
  <Counter />
  <Counter />
  <Counter />
  <Counter />
    </>
  )
}

export default App
