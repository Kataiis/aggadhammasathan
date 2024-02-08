"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DateDropdown from '@/component/date-dropdown';
import Headerregister from "@/app/components/headerregister";
import { Form, Button } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
// import dayjs from "dayjs";
// import th from "dayjs/locale/th";
import Select from "react-select";


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

    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [isOpen, setIsOpen] = useState(true);
    const [selected, setSelected] = useState(true);
    // const [selectman, setselectman] = useState(true);

    const [selectedOption, setSelectedOption] = useState<String>();
    const [selectedman, setSelectedman] = useState<String>();
    const [selectedgirl, setSelectedgirl] = useState<String>();

    const [isOpen, setIsOpen] = useState(true);

    const onSubmit = (data: any) => {
        console.log(data);
        router.replace("/formregistercommon/address")

    }

    function onClickman() {
        setIsOpen(true);
    }
    function onClickgirl() {
        setIsOpen(false);
    }


    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedOption(value);
        console.log("value", value)
    };

    const selectman = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valueman = event.target.value;
        setSelectedman(valueman);
        setIsOpen(true);

    };

    const selectwoman = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const valuewoman = event.target.value;
        setSelectedgirl(valuewoman);
        setIsOpen(false);
    };




    const handleChange = (selectedOption: any) => {
        setSelected(selectedOption);
        setSelected(true);
        console.log(`Option selected:`, selectedOption);
    };


    return (

        <div className='m-6'>
            <div className='text-[#D9A41C] font-semibold	text-lg mb-5' onClick={() => router.replace('/menu')}>{`<`} ย้อนกลับ </div>
            <div>
                <Headerregister />
            </div>




            <div className="flex justify-end"> ระบุข้อมูล</div>
            <Form className="text-neutral-400" onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>เลขบัตรประชาชน</label>
                    {errors.citizen && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกเลขบัตรประชาชน</p>}
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="numeric"
                        id="citizen"
                        type="numeric"

                        {...register("citizen", { required: true, maxLength: 13 })} />
                </Form.Field>

                <Form.Field>
                    <label>เบอร์โทรศัพท์</label>
                    {errors.telephone && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกเบอร์โทรศัพท์</p>}

                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black "
                        inputMode="numeric"
                        type="numeric"
                        id="telephone"
                        maxLength={10}
                        {...register("telephone", { required: true, maxLength: 10 })} />
                </Form.Field>

                <Form.Field>
                    <div className="mt-4 mb-4">

                        <span>  ระบุเพศ :</span>
                        {errors.gender && <p className="text-xs italic text-red-500 mt-2">กรุณาระบุเพศ</p>}
                        <span className="ml-5">

                            <select onChange={selectChange} id="gender"  >
                                <option selected disabled >
                                    กรุณาเลือก
                                </option>
                                <option value="man" {...register("gender", { required: true })}>ชาย</option>
                                <option value="woman" {...register("gender", { required: true })}>หญิง</option>

                            </select>


                            <span className="ml-5">

                                {selectedOption && (selectedOption === "man") ?

                                    (<select onChange={selectman} >
                                        <option selected disabled>
                                            กรุณาเลือก
                                        </option>
                                        <option value="boy">ด.ช.</option>
                                        <option value="mr">นาย</option>

                                    </select>) : null}
                                {selectedOption && (selectedOption === "woman") ?

                                    (<select onChange={selectwoman} >
                                        <option selected disabled>
                                            กรุณาเลือก
                                        </option>
                                        <option value="girl">ด.ญ.</option>
                                        <option value="mrs">นาง</option>
                                        <option value="m">นางสาว</option>

                                    </select>) : null}
                            </span>
                        </span>
                    </div>
                </Form.Field>


                <Form.Field>
                    <label>ชื่อ (ภาษาไทย)</label>
                    {errors.firstname && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกชื่อ</p>}

                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black "
                        inputMode="text"
                        type="text"
                        id="firstname"
                        maxLength={10}
                        {...register("firstname", { required: true })} />
                </Form.Field>


                <Form.Field>
                    <label>นามสกุล (ภาษาไทย)</label>
                    {errors.lastname && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกนามสกุล</p>}

                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black "
                        inputMode="text"
                        type="text"
                        id="lastname"
                        maxLength={10}
                        {...register("lastname", { required: true })} />
                </Form.Field>


                <div className='grid grid-cols-2 gap-4 mt-4'>


                    <Form.Field>
                        {/* 
                        <label>เชื่อชาติ</label>
                        {errors.race && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกเชื่อชาติ</p>}
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                            inputMode="text"
                            type="text"
                            id="race"
                            {...register("race", { required: true })}

                        /> */}

                        <label>สัญชาติ</label>
                        {errors.nationality && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกสัญชาติ</p>}

                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                            inputMode="text"
                            id="nationality"
                            {...register("nationality", { required: true })}
                        />


                    </Form.Field>

                    <Form.Field>

                        <label>ศาสนา</label>
                        {errors.cult && <p className="text-xs italic text-red-500 mt-2">กรุณากรอกศาสนา</p>}

                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                            inputMode="text"
                            type="cult" id="cult"
                            {...register("cult", { required: true })}

                        />
                    </Form.Field>

                </div>
                {/* <Form.Field>
                  
                </Form.Field> */}

                <Form.Field>
                    <div className='mt-4 grid grid-cols-1 gap-5 justify-items-center '>
                        <DateDropdown
                            onDateChange={() => { }}
                        />


                    </div>
                </Form.Field>


                <p className='mt-8'>ที่อยู่ปัจจุบัน</p>

                <label className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent  text-black"
                    inputMode="text"
                    id="address"
                />

                <div className="relative">

                    <div className="absolute bottom-0 left-45  right-5 ">
                        <button className='text-[#D9A41C] text-2xl'

                            type='submit'
                        > {'>'} </button>
                    </div>
                </div>


            </Form>

        </div>

    )
}

export default General