import React from 'react'

const TodoEkle = () => {
  return (
    <div>
        <header>
            <h1>Todo List</h1>
            <button>
                CLOSE ADD TASK
            </button>
        </header>

        <form>
            <div className="formControl">
                <label htmlFor="text">Task</label>
                <input type="text" id='text' />
            </div>
            <div className="formControl">
                <label htmlFor="day">Day & Time</label>
                <input type="datetime-local" id='day' />
            </div>

            <button type="submit" className='btn btn-submit'>SUBMIT</button>
        </form>
    </div>
  )
}

export default TodoEkle