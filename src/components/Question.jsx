import React, { useState, useEffect } from "react"
import QUESTIONS from "../questions"
import Answers from "./Answers"

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
    <div className='w-1/2 h-[600px] p-6 bg-white rounded-xl flex flex-col items-center justify-between'>
      <div className='w-full px-4 py-2 flex items-center justify-between font-bold'>
        <p className='text-xl'>
          <span className='text-primary'>Question</span> {currentQuestion + 1}{" "}
          <span className='text-primary'>of</span> {QUESTIONS.length}
        </p>
        <p className='flex items-center justify-between w-16'>
          <i className='bx bx-time text-3xl text-primary'></i>
          <p className='text-2xl'>{Math.round(remainingTime / 1000)}</p>
        </p>
      </div>
      <p className='text-black text-center text-3xl font-bold '>
        {QUESTIONS[currentQuestion].text}
      </p>
      <Answers
      key={currentQuestion}
        answers={QUESTIONS[currentQuestion].answers}
        onAnswer={onAnswer}
      />
    </div>
  )
}

export default Question
