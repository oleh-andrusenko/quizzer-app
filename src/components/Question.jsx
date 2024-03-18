import React, { useState, useEffect } from "react"
import QUESTIONS from "../questions"

function Question({ currentQuestion, onAnswer, onSkip, timer }) {
  const [remainingTime, setRemainingTime] = useState(timer)
  useEffect(() => {
    const answerTimer = setTimeout(onSkip, timer)
    return () => {
      clearTimeout(answerTimer)
    }
  }, [onSkip, timer])

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10)
    }, 10)

    return () => {
      clearInterval(timerInterval)
    }
  }, [remainingTime])

  return (
    <div className='w-full p-8 bg-white rounded-xl md:w-2/3 md:m-auto md:h-2/3 flex flex-col items-center'>
      <div className='w-hull p-2 flex items-center justify-between font-bold'>
        <p>
          Question {currentQuestion + 1} of {QUESTIONS.length}
        </p>
        <p className='flex items-center justify-between'>
          <i className='bx bx-time mr-2'></i>
          {Math.round(remainingTime / 1000)}
        </p>
      </div>
      <p className='text-black text-center text-xl my-4 font-bold'>
        {QUESTIONS[currentQuestion].text}
      </p>
      <ul className="flex flex-col items-center justify-center w-full ">
        {QUESTIONS[currentQuestion].answers.map((answer) => (
          <li className="w-full md:w-2/3">
            <button
              onClick={() => {
                onAnswer(answer)
              }}
              className='w-full p-2 rounded-full text-primary font-semibold text-[12px] bg-white my-2 border-2 border-primary hover:bg-primary hover:text-white md:text-lg'
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
