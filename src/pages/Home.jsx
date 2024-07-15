import React, { useState } from 'react'
import TodoEkle from '../components/TodoEkle'
import TodoGoster from '../components/TodoGoster'
import Data from "../helper/data"

const Home = () => {
  const [todos, setTodos] = useState(Data)
  return (
    <div>
      <TodoEkle todos={todos} setTodos={setTodos}/>
      <TodoGoster todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default Home