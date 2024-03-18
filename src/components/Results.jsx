import React, { useEffect, useState } from "react"

import QuizStats from "./QuizStats"
import AnswersStats from "./AnswersStats"
import QUESTIONS from "../questions"

function Results({ answers, onRetryQuiz }) {
  const [quizStats, setQuizStats] = useState({
    answers: {
      correct: null,
      skipped: null,
      wrong: null,
    },
    questions: [],
  })

  const [isShownAnswers, setIsShownAnswers] = useState(false)

  function getStats(questions, answers) {
    const stats = []
    if (questions.length !== answers.length) return

    console.log("getStats function started")
    let correctAnswers = 0
    let skippedAnswers = 0
    let wrongAnswers = 0

    for (let i = 0; i < questions.length; i++) {
      let question = {
        text: "",
        correctAnswer: "",
        userAnswer: "",
      }
      question.text = questions[i].text
      question.correctAnswer = questions[i].answers[0]
      question.userAnswer = answers[i]
      stats.push(question)
      if (answers[i] === null) {
        skippedAnswers += 1
        continue
      } else {
        if (answers[i] === questions[i].answers[0]) {
          correctAnswers += 1
          continue
        } else {
          wrongAnswers += 1
          continue
        }
      }
    }

    setQuizStats((prev) => {
      return {
        ...prev,
        answers: {
          correct: Math.round((correctAnswers / questions.length) * 100),
          skipped: Math.round((skippedAnswers / questions.length) * 100),
          wrong: Math.round((wrongAnswers / questions.length) * 100),
        },
        questions: stats,
      }
    })
    console.log(stats)
    console.log("getStats function end")
  }
  useEffect(() => {
    getStats(QUESTIONS, answers)
  }, [])

  return (
    <div className='w-[800px] bg-white h-[700px] rounded-2xl px-8 py-4 overflow-auto flex flex-col items-center justify-between'>
      {!isShownAnswers && (
        <QuizStats
          answers={quizStats.answers}
          onShowAnswers={setIsShownAnswers}
          onRetryQuiz={onRetryQuiz}
        />
      )}
      {isShownAnswers && (
        <AnswersStats
          questions={quizStats.questions}
          onCloseAnswers={setIsShownAnswers}
        />
      )}
    </div>
  )
}

export default Results
