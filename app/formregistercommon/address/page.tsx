"use client"
import axios from "axios";
import { Router } from 'next/router'
import React, { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";



const pathUrl = process.env.pathUrl;


function Address() {

    const router = useRouter();
    const [province, setprovince] = useState([]);
    const [districts, setdistricts] = useState([]);
    const [subdistricts, setsubdistricts] = useState([]);


    const getprovince = async () => {
        const res: any = await axios.get(`${pathUrl}/province`);
        console.log("resda", res)

        if (res.data.ok) {
            setprovince(res.data.message);
        } else {
            throw new Error("getprovince Error : ", res.error);
        }
    };
    console.log(province)


    const getdistrictsovince = async (id: any) => {
        const res: any = await axios.get(`${pathUrl}/district/` + id);
        console.log("resda", res)

        if (res.data.ok) {
            setdistricts(res.data.message);
        } else {
            throw new Error("districts Error : ", res.error);
        }
    };
    console.log(districts)

    const getsubdistricts = async (id: any) => {
        const res: any = await axios.get(`${pathUrl}/subdistrict/`+ id);
        console.log("resda", res)

        if (res.data.ok) {
            setsubdistricts(res.data.message);
        } else {
            throw new Error("subdistrict Error : ", res.error);
        }
    };
    console.log(subdistricts)


    const onChangeProvince = (id: any) => {
        getdistrictsovince(id)


    }
    const onChangedistrictsovince = (id: any) => {
        getsubdistricts(id)

        console.log(id)


    }

    useEffect(() => {
        getprovince();

    }, []);


    return (
        <div className='m-6'>

            <p className='text-[#D9A41C] font-semibold	' onClick={() => router.replace('./general')} >{`<`} ย้อนกลับ  </p>
            <p className=' text-xl flex justify-end font-bold'>  ที่อยู่ปัจจุบัน</p>


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



                <div className='grid grid-cols-2 gap-3  mt-4'>
                    <div>
                        <p>หมายเลขห้อง</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            id="name"
                        />
                    </div>

                    <div>
                        <p>ชั้น</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            id="name"
                        />

                    </div>



                </div>
                <div className='mt-4'>

                    <p>*ที่อยู่</p>
                    <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                        inputMode="text"
                        id="name"
                    />
                </div>


                <div className=' gap-3 mt-4'>
                    {/* จังหวัด */}
                    <div className="grid grid-cols-2">
                        <span>*จังหวัด</span>
                        <span>
                            <select id="province" onChange={(e) => onChangeProvince(e.target.value)}>
                                <option selected disabled >
                                    กรุณาเลือก
                                </option>
                                {province.map((item: any) => (
                                    <option className=" text-black" value={item.id} key={item.id} >  {item.name_in_thai}</option>
                                ))}
                            </select>
                        </span>
                    </div>

                    {/* อำเภอ */}
                    <div className="grid grid-cols-2">
                        <span>*อำเภอ</span>
                        <span>
                            <select id="districts" onChange={(e) => onChangedistrictsovince(e.target.value)}>
                                <option selected disabled >
                                    กรุณาเลือก
                                </option>
                                {districts.map((item: any) => (
                                    <option className=" text-black" value={item.id} key={item.id} >  {item.name_in_thai}</option>
                                ))}

                            </select>
                        </span>
                    </div>
                    <div>
                        <p className='mt-4'>* ตำบล / แขวง</p>

                        <select id="subdistrict" >
                            <option selected disabled >
                                กรุณาเลือก
                            </option>
                            {subdistricts.map((item: any) => (
                                <option className=" text-black" value={item.id} key={item.id} >  {item.name_in_thai}</option>
                            ))}
                        </select>
                    </div>


                    {/* <div>
                        <p className='mt-4'>รหัสไปรษณีย์</p>
                        <input className="block w-full border-b-2 border-grey-500  appearance-none focus:outline-none bg-transparent text-black"
                            inputMode="text"
                            // placeholder="กรุณากรอกเลขบัตรประชาชน"
                            id="name"
                        />
                    </div> */}



                </div>
                <div className="mt-5 flex justify-center ">
                    <Button
                        className="bg-[#8F8C7D] text-[#ffffff] border border-[#ffffff] text-xl h-[58px] w-[178px] rounded-lg shadow-md shadow-gray-500/100  hover:bg-[#eaefe8] disabled:bg-gray-500
                      hover:text-[#00AE91] hover:text-xl mt-5"
                        type="submit"
                        onClick={() => router.replace('/showdetail')} > ตกลง </Button>
                </div>


            </div>
        </div>
    )
}

export default Address