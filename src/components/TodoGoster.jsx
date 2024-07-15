import React from 'react'


const TodoGoster = ({todos, setTodos}) => {
  return (
    <div>

    {todos.map((e)=>(
        
        <div key={e.id}>
            <h3>
                {e.text}

                
            </h3>

        </div>
    ))}

    </div>
  )
}

export default TodoGoster