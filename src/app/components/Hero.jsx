import React from 'react'

const Hero = () => {
  return (
    <div className='text-white max-w-[1340px] m-auto my-[50px] p-[5px]'>
      <div>
        <div className='bg-slate-700 w-[230px] flex items-center justify-center rounded-full h-[30px]'>1# best software fest 2024</div>
        <div className='text-[35px] w-[350px] font-sans font-bold my-[20px]'>THE SOLUTION TO YOUR PARKING PROBLEMS</div>
        <div className='w-[500px] text-slate-400'>The mobile parking app that is integrated with GPS that it can make it easier for you to find the nearest parking lot with a variety of price ranges.</div>
        <div className='w-[600px] my-[40px] p-1 h-[50px] flex items-center justify-start'><input className='bg-slate-700 h-[50px] rounded-full w-[450px]' type="text" placeholder='Enter your Email Address'/><button className='bg-blue-700 rounded-full w-[120px] h-[40px] absolute left-[463px]'>GET ACCESS</button></div>
      </div>
    </div>
  )
}

export default Hero