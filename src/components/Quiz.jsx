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

  let isQuizOver = currentQuestionIndex === QUESTIONS.length - 1
  return (
    <>
      {!isStarted && <StartScreen onStart={handleQuizStart} />}
      {isStarted && !isQuizOver && (
        <Question
          key={currentQuestionIndex}
          currentQuestion={currentQuestionIndex}
          onAnswer={handleAddAnswer}
          onSkip={handleSkipAnswer}
          timer={5000}
        />
      )}
      {isQuizOver && <Results answers={answers} />}
    </>
  )
}

export default Quiz
