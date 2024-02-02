"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DateDropdown from '@/component/date-dropdown';
import Headerregister from "@/app/components/headerregister";

interface IDateDropdown {
    /** Required. Callback for date change: Format: YYYY-MM-DD */
    onDateChange: (date: string) => void;
    /** Default Date set: Format: YYYY-MM-DD */
    defaultDate?: string;

    /** className for container */
    containerClass?: string;
    /** className for <option/> */
    optionClass?: string;
    /** className for <select/> */
    selectClass?: string;

    /** Placeholder for <select/> input */
    selectPlaceholder?: {
        year: string;
        month: string;
        day: string;
    };
    /** Starting year: Format: YYYY */
    yearStart?: number;
    /** Ending year: Format: YYYY */
    yearEnd?: number;
}


function General() {
    const router = useRouter();



    return (
        <div className='m-6'>
      <div>
        <Headerregister />
      </div>
            <form>
                <div className='flex justify-end'>
                    <p>ระบุข้อมูล</p>
                </div>

                <div className='text-neutral-400	'>
                    <div className='mt-6'>
                        <p>เลขบัตรประชาชน</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="numeric"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="citizen"
                            maxLength={13} />

                        <p className='mt-4'>เบอร์โทรศัพท์</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black "
                            inputMode="numeric"
                            // placeholder="กรุณากรอกเบอร์โทรศัพท์"
                            id="citizen"
                            maxLength={10} />
                    </div>


                    <div className="flex gap-3 mt-4">
                        <input id="MR" className="peer/MR accent-yellow-700" type="radio" name="status" defaultChecked />
                        <label htmlFor="MR" className="peer-checked/MR:text-black	">นาย</label>


                        <input id="MS" className="peer/MS  accent-yellow-700" type="radio" name="status" />
                        <label htmlFor="MS" className="peer-checked/MS:text-black	">นาง</label>

                        <input id="M" className="peer/M  accent-yellow-700" type="radio" name="status" />
                        <label htmlFor="M" className="peer-checked/M:text-black	">นางสาว</label>

                    </div>

                    <div className='mt-4 text-neutral-400'>
                        <p>ชื่อ (ภาษาไทย)</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />

                        <p className='mt-4'>นามสกุล (ภาษาไทย)</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                        <div className='grid grid-cols-2 gap-4 mt-4'>
                            <div>
                                <p>เชื่อชาติ</p>
                                <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                                    inputMode="text"
                                    // placeholder="กรุณากรอกเลขบัตรประชาชน"
                                    id="race"
                                />
                            </div>
                            <div>
                                <p>สัญชาติ</p>
                                <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                                    inputMode="text"
                                    // placeholder="กรุณากรอกเลขบัตรประชาชน"
                                    id="nationality"
                                />
                            </div>

                        </div>
                        <div className='mt-4'>
                            <p>ศาสนา</p>
                            <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                                inputMode="text"
                                // placeholder="กรุณากรอกเลขบัตรประชาชน"
                                id="cult"
                            />
                        </div>

                        <div className='mt-4 grid grid-cols-1 justify-items-center '>
                            <DateDropdown
                                onDateChange={() => { }}
                            />
                        </div>

                        <p className='mt-8'>ที่อยู่ปัจจุบัน</p>
                       
                        <label className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="address"
                        />






                    </div>

                </div>
            </form>
            <div className="relative">

                <div className="absolute bottom-0 left-45  right-5 ">
                    <button className='text-[#D9A41C] text-2xl'
                        onClick={() => router.replace('./address')}

                    > {'>'} </button>
                </div>
            </div>
        </div>
    )
}

export default General