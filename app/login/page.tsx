"use client"
import React, { useState } from "react";
import { Input } from "@/components/ui/input"
import { FormProvider, useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { userStore } from "../store";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import Image from 'next/image'
import logo from '@/public/AMC_logo.png'
import BG from '@/public/BG pix.png'

import liff from "@line/liff"

import { Prompt } from "next/font/google";

const inter: any = Prompt({
    subsets: ["latin"],
    weight: "500",
    display: "swap",
    adjustFontFallback: true,
});



const Login = () => {
    const [isDisble, setIsDisble] = useState(false);
    const updateUserData = userStore((state: any) => state.updateUserData);
    const [lineId, setLineId] = useState("");
    const [profile, setProfile] = useState<any>({});
    const pathUrl: any = process.env.pathUrl;
    const router = useRouter();

    const LoginFormSchema = z.object({
        username: z.string({ required_error: "กรุณาใส่ Username" }),
        password: z.string({ required_error: "กรุณาใส่ Password" }),
    });

    type LoginFormValues = z.infer<typeof LoginFormSchema>;

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });


    const onSubmit = async (data: LoginFormValues) => {

        // setIsDisble(true);


        // const res = await axios.post(`${pathUrl}/health/hie_staff/`, {username : data.username, password : data.password})
        // // check ว่าเป็น hie_staff 
        // console.log("res login : ", res.data);
        // if (res.data.ok) {
        //     console.log("message : ", res.data.message);
        //     if (res.data.message.length > 0){
        //         // เป็น hie_staff
        //         const stafftype = res.data.message[0].staff_type;
        //         if(stafftype === 1 || stafftype === 0){
        //             const profile = await liff.getProfile()
        //             console.log(profile);
        //             setProfile(profile)
        //             setLineId(profile?.userId);

        //             console.warn(lineId);

        //             console.log("dataSend : ", profile);

        //             const dataSend = {
        //                 staff_id: res.data.message[0].staff_id,
        //                 token_line: `${profile.userId}`
        //             }

        //             const resUpdate: any = await axios.put(`${pathUrl}/health/hie_staff/updatetoken/`, dataSend )
        //             console.log("resUpdate", resUpdate.data)    
        //             if (resUpdate.data.ok) {
        //                 if  (resUpdate.data.message  === 1){
        //                     router.replace("/idcard"); 
        //                 }else{
        //                     throw new Error(res.data.error);
        //                 }          
        //             }else{
        //                 throw new Error(res.data.error);
        //             }
        //         }else{
        //             Swal.fire({
        //                 title: "ไม่มีสิทธ์เข้าใช้งาน",
        //                 icon: "error",
        //                 html: "สำหรับแพทย์เท่านั้น",
        //                 showCloseButton: true,
        //                 showConfirmButton: false,
        //             }).then(() => {
        //                 form.reset();
        //                 setIsDisble(false);
        //             });
        //         }
        //     }else{
        //         // ไม่มีข้อมูลใน DB
        //         Swal.fire({
        //             title: "เข้าสู่ระบบไม่สำเร็จ",
        //             icon: "error",
        //             html: "Username หรือ Password ไม่ถูกต้อง<br>" + "กรุณาลองอีกครั้ง",
        //             showCloseButton: true,
        //             showConfirmButton: false,
        //           }).then(() => {
        //             form.reset();
        //             setIsDisble(false);
        //           });
        //     }
        // } else {
        //     throw new Error(res.data.error);
        // }
    };

    return (
        <div className="cla"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                background: "#C2AE7B",
            }}
        >
            <span className="absolute top-10">
                <Image
                    priority
                    src={BG}
                    alt="scan"
                    width={1000}
                 

                />
            </span>


            <span className="absolute  top-10 bottom-auto">
                <Image
                    priority
                    src={logo}
                    alt="scan"
                    width={140}
                />
            </span>

            <span className="absolute top-44 bottom-auto">
                <p className={` text-5xl text-center text-[#7B5800]`}>ญาติธรรม</p>
                <p className={`text-3xl text-center  text-[#7B5800]`}>อัคคธัมมสถาน</p>
            </span>


            {/* <Card className=" rounded-2xl ">
                <br></br>

                <CardContent className="mt-6"> */}

            <div className="absolute  top-75 ">
                <FormProvider {...form}>
                    <form
                        id="frmLogin"
                        className="space-y-8"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >

                        <div className="grid w-full items-center gap-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex flex-col">
                                            <FormControl>
                                                <Input
                                                    className="text-center text-lg"
                                                    id="CID"
                                                    type="username"
                                                    placeholder="เลขบัตรประชาชน"
                                                    {...field}
                                                />
                                            </FormControl>
                                        </div>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex flex-col  mb-5">
                                            <FormControl>
                                                <Input
                                                    className="text-center text-lg"
                                                    id="password"
                                                    type="password"
                                                    placeholder="เบอร์โทรศัพท์"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <div className='flex justify-center '>
                                <Button
                                    type="submit"
                                    variant="outline"
                                    className="bg-[#AB9355] text-[#ffffff] drop-shadow-md text-2xl  h-[58px] w-[178px] rounded-lg shadow-lg hover:bg-[#eaefe8] hover:text-grey hover:text-lg"
                                    disabled={isDisble}
                                >
                                    ตกลง
                                </Button>
                            </div>
                        </div>
                    </form>
                </FormProvider>
                {/* </CardContent>
            </Card> */}
            </div>
            <div className="absolute top-3/4 flex justify-center ">
                <Button
                    type="submit"
                    variant="outline"
                    className="bg-[#C1AE7B] text-[#ffffff] drop-shadow-md text-lg  h-[48px] w-[250px] rounded-lg shadow-lg hover:bg-[#eaefe8] hover:text-grey hover:text-lg"
                    onClick={() => router.replace('/menu')}
                >ลงทะเบียนธาติธรรมใหม่</Button>
            </div>
        </div>
    );
};
export default Login;
