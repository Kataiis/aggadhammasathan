"use client"
import { Button } from '@material-tailwind/react';
import { Router } from 'next/router'
import React from 'react'
import { useRouter } from "next/navigation";


function Address() {
    const router = useRouter();
    return (
        <div>
            <div>
                <p>ย้อนกลับ {`<`}  </p>
            </div>
            <form>
                <div>
                    <p>ที่อยู่ปัจจุบัน</p>
                </div>
                <div>
                    <p>หมู่บ้าน</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="moo"
                    />

                    <p>อาคาร</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเบอร์โทรศัพท์"
                        id="build"
                    />
                </div>


                <div className='grid grid-cols-2 gap-3'>
                    <div>

                        <p>หมายเลขห้อง</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>ชั้น</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                    </div>
                    <div>

                        <p>* บ้านเลขที่ </p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>หมู่ที่</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                    </div>
                    <div>

                        <p>ซอย</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>ถนน</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                    </div>

                </div>
                <div>
                    <p>ถนน</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>* จังหวัด</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>* อำเภอ / เขต</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>* ตำบล / แขวง</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
                <div>
                    <p>รหัสไปรษณีย์</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent "
                        inputMode="text"
                        // placeholder="กรุณากรอกเลขบัตรประชาชน"
                        id="name"
                    />

                </div>
            </form>
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

export default Address