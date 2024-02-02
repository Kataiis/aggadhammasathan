"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import Headerregister from '../components/headerregister';

function Register() {
  const router = useRouter();

  return (
    <div className='m-6'>
      <div>
        <Headerregister />
      </div>
      <div className='flex justify-end mt-2'>
        <p>เลือกสถานะ</p>
      </div>



      <div className="divide-y divide-slate-200 mt-6">

        <div></div>
        <div className='grid grid-cols-2 text-2xl p-2' onClick={() => router.replace('formregistercommon/general')} >
          <span> ฆราวาส </span> <span className='flex justify-end'>{'>'}</span>
        </div>


        <div className='grid grid-cols-2 text-2xl text-[#AB9355] p-2' onClick={() => router.replace('formregisterbuddha/general')} >
          <span> พระสงฆ์ </span> <span className='flex justify-end'>{'>'}</span>
        </div>

        <div className='grid grid-cols-2 text-2xl text-[#AB9355] p-2' onClick={() => router.replace('formregisterbuddha/general')}>
          <span> สามเณร </span> <span className='flex justify-end'>{'>'}</span>
        </div>

        <div className='grid grid-cols-2 text-2xl text-[#AB9355] p-2' onClick={() => router.replace('formregisterbuddha/general')} >
          <span> แม่ชี </span> <span className='flex justify-end'>{'>'}</span>
        </div>

        <div></div>
      </div>


    </div>
  )
}

export default Register