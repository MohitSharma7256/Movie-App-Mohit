import React from 'react'
import Loader from "../assets/Loader.gif";
import Spinner from "../assets/Spinner-3.gif";


function Loading() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-zinc-800'>
        <img className='w-[100%] mix-blend-darken' src={Loader} alt="" />
    </div>
  )
}

export default Loading