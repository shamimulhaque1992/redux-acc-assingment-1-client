import React from 'react'
import { useSelector } from 'react-redux'

const History = () => {
  const state = useSelector((state) => state.history)
  console.log(state)
  return (
    <div className="grid grid-cols-4 gap-4">
      {state.map((e) => (
        <div class="card  bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{e.title}</h2>
            <p>
              {e.description.length > 80
                ? e.description.slice(0, 100) + ' ...'
                : e.description}
            </p>
            <p>Author: {e.author}</p>
            <p>Tags: {e.tags}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default History
