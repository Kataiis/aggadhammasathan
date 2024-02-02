"use client"

import React from "react";
import { useRouter } from "next/navigation";
import Headerregister from '../components/headerregister';
import { Button } from '@/components/ui/button';



function Showdetail() {

  const router = useRouter();



  return (

    <div className='m-6'>
      <div>
        <Headerregister />
      </div>

      <div className='grid grid-cols-2 mt-3'>

        <span className='flex justify-start text-[#949494]'
        onClick={() => router.replace('/formregister/general')}
        >  {`<`}  แก้ไข</span>

        <span className='flex justify-end text-[#AB9355] font-semibold	text-lg'> ข้อมูลพื้นฐาน</span>

        <span className='flex justify-start text-[#949494] mt-2 text-sm	'> เบอร์โทรศัพท์</span>
        <span className='flex justify-end mt-2 text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>ชื่อ-นามสกุล </span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>วันเดือนปีเกิด</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>อายุ</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>เชื้อชาติ, สัญชาติ</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>ศาสนา</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>


      </div>

      <div className='grid grid-cols-2 mt-5'>

        <span className='flex justify-start text-[#949494]' 
        onClick={() => router.replace('/formregistercommon/address')}
        > {`<`}  แก้ไข</span>
        <span className='flex justify-end text-[#AB9355] font-semibold	text-lg'> ข้อมูลพื้นฐาน</span>

        <span className='flex justify-start text-[#949494] mt-2 text-sm	'> หมู่บ้าน, อาคาร</span>
        <span className='flex justify-end mt-2 text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>หมายเลขห้อง, ชั้น</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>บ้านเลขที่, หมู่ที่</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>ซอย, ถนน</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>ตำบล/เขต</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>อำเภอ/แขวง</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>จังหวัด</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>

        <span className='flex justify-start text-[#949494] mt-1 text-sm	'>รหัสไปรษณีย์</span>
        <span className='flex justify-end text-black font-semibold	text-lg'> 3900700618204</span>



      </div>

      <div>
        <div className="mt-5 flex justify-center ">
          <Button
            className="bg-[#0BB262] text-[#ffffff] border border-[#ffffff] text-xl h-[50px] w-[178px] rounded-lg shadow-md shadow-gray-500/100  hover:bg-[#eaefe8] disabled:bg-gray-500
                      hover:text-[#00AE91] hover:text-xl mt-5"
            type="submit"
            onClick={() => router.replace('/showdetail')}> ยืนยันข้อมูล </Button>
        </div>
      </div>
    </div>
  )
}

export default Showdetail