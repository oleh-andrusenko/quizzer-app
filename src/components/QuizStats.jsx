import React from "react"
import quizOverImage from "../assets/quiz-over.png"
function QuizStats({ answers, onShowAnswers, onRetryQuiz }) {
  const { correct, skipped, wrong } = answers
  return (
    <div className='flex flex-col items-center'>
      <p className='text-center font-bold text-4xl my-8'>Quiz is over!</p>
      <p className='text-2xl mb-2'>There is your results:</p>
      <div className='w-full flex items-center justify-center gap-10'>
        <p className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold text-green-500'>{correct}%</span>
          <span className='text-xl uppercase text-green-600'>correct</span>
        </p>
        <p className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold text-yellow-500'>{skipped}%</span>
          <span className='text-xl uppercase text-yellow-600'>skipped</span>
        </p>
        <p className='flex flex-col items-center gap-2'>
          <span className='text-4xl font-bold text-red-500'>{wrong}%</span>
          <span className='text-xl uppercase text-red-600'>wrong</span>
        </p>
      </div>
      <img
        className='w-[300px] h-[275px]'
        src={quizOverImage}
        alt='Quiz is over!'
      />

      <button
        onClick={() => onShowAnswers(true)}
        className='w-96 p-3 rounded-full text-white bg-primary text-2xl font-semibold my-1 border-2 border-primary hover:bg-white hover:text-primary'
      >
        Show answers
      </button>
      <button
        onClick={() => onRetryQuiz()}
        className='w-96 p-3 rounded-full text-white bg-primary my-1 text-2xl font-semibold   border-2 border-primary hover:bg-white hover:text-primary'
      >
        Retry
      </button>
    </div>
  )
}

export default QuizStats
