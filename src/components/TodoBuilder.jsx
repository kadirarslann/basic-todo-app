import React from 'react'

function TodoBuilder() {
  return (
    <div className='p-5 m-5 bg-slate-200 '>
        <div className="flex h-52">
            <div className="w-3/4 h-full">
                <textarea className="text-area w-full h-full p-4">

                </textarea>
            </div>
            <div className="w-1/4 h-full  flex flex-col justify-start content-center text-center text-2xl leading-10">
                <div className="bg-slate-300 m-2 rounded-md hover:bg-slate-600 cursor-pointer hover:text-white">asas</div>
                <div className="bg-slate-300 m-2 rounded-md hover:bg-slate-600 cursor-pointer hover:text-white">asas</div>
                <div className="bg-slate-300 m-2 rounded-md hover:bg-slate-600 cursor-pointer hover:text-white">asas</div>
            </div>
        </div>
    </div>
  )
}

export default TodoBuilder