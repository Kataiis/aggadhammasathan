"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import Headerregister from '../formregister/components/headerregister';

function Register() {
  const router = useRouter();

  return (
    <div className='m-10'>
      <div>
        <Headerregister />
      </div>
      <div className='flex justify-end'>
        <p>เลือกสถานะ</p>
      </div>



      <div className="divide-y divide-slate-200 mt-6">

        <div></div>
        <div className='grid grid-cols-2 text-2xl p-2' onClick={() => router.replace('/formregister')} >
          <span> ฆราวาส </span> <span className='flex justify-end'>{'>'}</span>
        </div>


        <div className='grid grid-cols-2 text-2xl text-[#AB9355] p-2' onClick={() => router.replace('/formregister')} >
          <span> พระสงฆ์ </span> <span className='flex justify-end'>{'>'}</span>
        </div>

        <div className='grid grid-cols-2 text-2xl text-[#AB9355] p-2' onClick={() => router.replace('/formregister')} >
          <span> สามเณร </span> <span className='flex justify-end'>{'>'}</span>
        </div>

        <div className='grid grid-cols-2 text-2xl text-[#AB9355] p-2' onClick={() => router.replace('/formregister')} >
          <span> แม่ชี </span> <span className='flex justify-end'>{'>'}</span>
        </div>

        <div></div>
      </div>


    </div>
  )
}

export default Register