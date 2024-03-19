import React, { useRef } from "react"

function Answers({ answers, onAnswer }) {
    const shuffledAnswers = useRef()
    if (!shuffledAnswers.current) {
      shuffledAnswers.current = [...answers]
      shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

  return (
    <ul className='flex flex-col items-center justify-center w-full '>
      {shuffledAnswers.current.map((answer) => (
        <li className='w-full'>
          <button
            onClick={() => {
              onAnswer(answer)
            }}
            className='w-full p-4 rounded-full text-primary font-semibold text-xl bg-white my-2 border-2 border-primary hover:bg-primary hover:text-white'
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Answers
