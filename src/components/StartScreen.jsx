import React from "react"

function StartScreen({ onStart }) {
  return (
    <div className=' min-h-[80%] bg-white my-2 rounded-lg p-6 flex flex-col gap-8 items-center md:min-w-[64rem] md:gap-20'>
      <h2 className='text-center text-black text-4xl font-bold my-4 md:text-6xl md:p-10'>
        Welcome to Quizzer!
      </h2>
      <p className='text-black text-center text-xl mb-10 md:text-3xl'>
        You can start quiz by pressing the button below.
      </p>
      <button
        onClick={() => {
          onStart()
        }}
        className='w-full p-4 rounded-full text-primary uppercase text-2xl font-semibold bg-white my-8 border-2 border-primary hover:bg-primary hover:text-white md:w-2/3'
      >
        Start quiz
      </button>
    </div>
  )
}

export default StartScreen
