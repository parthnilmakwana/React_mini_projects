import {useState} from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("olive") 

  return (
    <>
    <div className=' w-full h-screen flex  justify-center' style={{backgroundColor : color}}>
      <div className='fixed bottom-12'>
        <div className='bg-white rounded-3xl flex flex-wrap py-2 px-4 justify-center gap-3'>
          <button onClick={()=>setColor("red")} className='bg-red-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Red
          </button>
          <button onClick={()=>setColor("green")} className='bg-green-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Green
          </button>
          <button onClick={()=>setColor("blue")} className='bg-blue-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Blue
          </button>
          <button onClick={()=>setColor("gray")} className='bg-gray-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Gray
          </button>
          <button onClick={()=>setColor("purple")} className='bg-purple-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Purple
          </button>
          <button onClick={()=>setColor("yellow")} className='bg-yellow-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Yellow
          </button>
          <button onClick={()=>setColor("orange")} className='bg-orange-500 px-6 py-2 rounded-3xl text-white cursor-pointer shadow-lg'>
            Orange
          </button>

        </div>

      </div>



    </div>
    
    </>
  )
}

export default App
