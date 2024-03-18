import React from "react"

function AnswersStats({ questions, onCloseAnswers }) {
  return (
    <div className='relative'>
      <p className="text-center font-bold text-2xl my-4">Your answers:</p>
      <ul className=''>
        {questions.map((question, index) => (
          <p
            className={`my-2  text-white p-8 rounded-xl ${
              question.correctAnswer === question.userAnswer
                ? " bg-green-500"
                : question.userAnswer === null
                ? " bg-yellow-400"
                : " bg-red-400"
            }`}
          >
            <p className='text-center text-xl font-bold p-2'>{question.text}</p>
            <p className='text-lg text-center underline'>
              Correct answer: {question.correctAnswer}
            </p>
            <p>
              {question.userAnswer !== null
                ? `Your answer: ${question.userAnswer}`
                : "You did not answer this question"}
            </p>
          </p>
        ))}
      </ul>
      <button
        className='w-24 h-10 rounded-full hover:text-white absolute top-0 right-2 border-2 border-primary text-center hover:bg-primary bg-white text-primary font-semibold'
        onClick={() => onCloseAnswers(false)}
      >
        Close
      </button>
    </div>
  )
}

export default AnswersStats
