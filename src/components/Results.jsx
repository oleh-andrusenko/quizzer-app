import React from "react"

function Results({ answers }) {
  return (
    <div className='w-full bg-white min-h-[80%] rounded-xl px-2 py-4 overflow-auto'>
      <p className='text-center font-bold text-2xl my-2'>Quiz is over!</p>
      <ul>
        {answers.map((answer) => (
          <li>{answer}</li>
        ))}
      </ul>
    </div>
  )
}

export default Results
