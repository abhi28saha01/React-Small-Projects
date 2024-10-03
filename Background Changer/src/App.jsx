import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const current_color = localStorage.getItem("current_color");

  const [color , setColor] = useState(current_color ? current_color : "black");

  useEffect(() => {
    localStorage.setItem("current_color",color);
  },[color])

  // const current_color = localStorage.getItem("current_color")

  // const [color,setColor] = useState(current_color ? current_color : "black");

  useEffect(() => {
    localStorage.setItem("current_color",color);
  },[color]);

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}}>


      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 
            rounded-3xl
        '>
            <button className='outline-none px-5 py-3 rounded-full bg-red-600 text-white' onClick={() => {setColor("red")}}>Red</button>
            <button className='outline-none px-5 py-3 rounded-full bg-black text-white' onClick={() => {setColor("black")}}>Black</button>
            <button className='outline-none px-5 py-3 rounded-full bg-green-600 text-white' onClick={() => {setColor("green")}}>Green</button>
            <button className='outline-none px-5 py-3 rounded-full bg-yellow-500 text-white' onClick={() => {setColor("yellow")}}>Yellow</button>
            <button className='outline-none px-5 py-3 rounded-full bg-blue-600 text-white' onClick={() => {setColor("blue")}}>Blue</button>
            <button className='outline-none px-5 py-3 rounded-full bg-orange-600 text-white' onClick={() => {setColor("orange")}}>Orange</button>
            <button className='outline-none px-5 py-3 rounded-full bg-pink-400 text-white' onClick={() => {setColor("pink")}}>Pink</button>
            <button className='outline-none px-5 py-3 rounded-full bg-purple-600 text-white' onClick={() => {setColor("purple")}}>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
