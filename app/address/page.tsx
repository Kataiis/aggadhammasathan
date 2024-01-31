"use client"
import { Router } from 'next/router'
import React, { useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


function Address() {
    const router = useRouter();
    const [isSubscribed, setIsSubscribed] = useState(false);

    return (
        <div className='m-10'>

            <p className='text-[#D9A41C] font-semibold	' onClick={() => router.replace('/formregister')} >{`<`} ย้อนกลับ  </p>
            <p className=' text-xl flex justify-end font-bold	'>ที่อยู่ปัจจุบัน</p>


            <div className='text-neutral-400'>
                <p className='mt-5 '>หมู่บ้าน</p>
                <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                    inputMode="text"
                    id="moo"
                />

                <p className=' mt-4'>อาคาร</p>
                <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                    inputMode="text"
                    id="build"
                />



                <div className='grid grid-cols-2 gap-3'>
                    <div>
                        <p>หมายเลขห้อง</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>ชั้น</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                    </div>
                    <div>

                        <p>* บ้านเลขที่ </p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>หมู่ที่</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                    </div>
                    <div>

                        <p>ซอย</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>ถนน</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                    </div>

                </div>
                <div>
                    <p>ถนน</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>* จังหวัด</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>* อำเภอ / เขต</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>* ตำบล / แขวง</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>รหัสไปรษณีย์</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div className="mt-5 flex justify-center ">
                <Button 
                    className="bg-[#8F8C7D] text-[#ffffff] border border-[#ffffff] text-xl h-[58px] w-[178px] rounded-lg shadow-md shadow-gray-500/100  hover:bg-[#eaefe8] disabled:bg-gray-500
                      hover:text-[#00AE91] hover:text-xl mt-5"
                    type="submit"
                    onClick={() => router.replace('/showdetail')}> ตกลง </Button>
                </div>

                
            </div>
        </div>
    )
}

export default Address