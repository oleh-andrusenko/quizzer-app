import React from "react"
import startScreenImage from '../assets/start-screen.png'
function StartScreen({ onStart }) {
  return (
    <div className='h-[600px] w-[700px] bg-white rounded-xl p-10 flex flex-col justify-center items-center'>
      <h2 className='text-center text-black text-4xl font-bold my-4 '>
        Welcome to Quizzer!
      </h2>
      <img src={startScreenImage} alt="Start screen img" className="w-[350px] h-[250px]"/>
      <p className='text-black text-center text-lg mb-10'>
        You can start quiz by pressing the button below.
      </p>
      <button
        onClick={() => {
          onStart()
        }}
        className='w-2/3 p-3 rounded-full text-white bg-primary uppercase text-2xl font-semibold  my-8 border-2 border-primary hover:bg-white hover:text-primary'
      >
        Start quiz
      </button>
    </div>
  )
}

export default StartScreen
