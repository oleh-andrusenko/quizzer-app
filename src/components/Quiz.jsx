import React, { useState } from "react"
import StartScreen from "./StartScreen"
import Question from "./Question"
import QUESTIONS from "../questions"
import Results from "./Results"
function Quiz() {
  const [isStarted, setIsStarted] = useState(false)
  const [answers, setAnswers] = useState([])

  let currentQuestionIndex = answers.length

  function handleQuizStart() {
    setIsStarted(true)
  }

  function handleAddAnswer(answer) {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, answer]
    })
  }

  function handleSkipAnswer() {
    setAnswers((prevAnswers) => {
      return [...prevAnswers, null]
    })
  }

  function handleRetryQuiz() {
    setAnswers([])
    setIsStarted(false)
  }

  let isQuizOver = currentQuestionIndex === QUESTIONS.length
  return (
    <div className='w-full h-full flex items-center justify-center'>
      {!isStarted && <StartScreen onStart={handleQuizStart} />}
      {isStarted && !isQuizOver && (
        <Question
          key={currentQuestionIndex}
          currentQuestion={currentQuestionIndex}
          onAnswer={handleAddAnswer}
          onSkip={handleSkipAnswer}
          timer={10000}
        />
      )}
      {isQuizOver && (
        <Results answers={answers} onRetryQuiz={handleRetryQuiz} />
      )}
    </div>
  )
}

export default Quiz
