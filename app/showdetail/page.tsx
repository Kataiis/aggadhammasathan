"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import Headerregister from '../formregister/components/headerregister';
function page() {

  const router = useRouter();


  return (

    <div className='m-8'>
      <div>
      <Headerregister/>
      </div>

      <div className='grid grid-cols-2'>

        <span className='flex justify-start'> {`<`}  แก้ไข</span>
        <span className='flex justify-end'> ข้อมูลพื้นฐาน</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>


      </div>

      <div className=' grid grid-cols-2 mt-5'>

        <span className='flex justify-start'> {`<`}  แก้ไข</span>
        <span className='flex justify-end'> ที่อยู่ปัจจุบัน</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>

        <span className='flex justify-start'>เลขบัตรประชาชน</span>
        <span className='flex justify-end'> 3900700618204</span>


      </div>

      <div>
        <button
          type="submit"

          className="bg-[#AB9355] text-[#ffffff] drop-shadow-md text-md hover:bg-[#eaefe8] hover:text-grey hover:text-lg"
          onClick={() => router.replace('/showdetail')}
        >ตกลง</button>
      </div>
    </div>
  )
}

export default page