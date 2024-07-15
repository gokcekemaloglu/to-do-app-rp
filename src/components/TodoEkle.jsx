import React, { useState } from 'react'

const TodoEkle = ({ todos, setTodos }) => {
    const [button, setButton] = useState(true)
    const [input, setInput] = useState("")
    const [date, setDate] = useState("")

    const sabmitOldugunda = (e) => {
        e.preventDefault();

        setTodos([...todos, {id: new Date().getTime(), text: input, day: date, isDone: false}]);


        setInput("");
        setDate("");

    }


  return (    
    <div>
        <header>
            <h1>To-do List</h1>
            <button onClick={()=>setButton(!button)} className='btn'>
                {button ? "CLOSE" : "SHOW"} ADD TASK
            </button>
        </header>
        {button && (
            <form onSubmit={sabmitOldugunda}>
                <div className="formControl">
                    <label htmlFor="text">Task</label>
                    <input onChange={(e)=>setInput(e.target.value) } type="text" id='text' value={input}/>
                </div>
                <div className="formControl">
                    <label htmlFor="day">Day & Time</label>
                    <input onChange={(e)=>setDate(e.target.value)} type="datetime-local" id='day' value={date}/>
                </div>

                <button type="submit" className='btn btn-submit' >SUBMIT</button>
            </form>
        )}

        
    </div>
  )
}

export default TodoEkle