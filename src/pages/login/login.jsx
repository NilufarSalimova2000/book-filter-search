import React from "react";
import { useForm } from "react-hook-form";
import { useLoginCreate } from "../../service/mutation/useLoginCreate";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate();
    const {mutate,isError} = useLoginCreate()
    const submit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                
                navigate("/app"); 
            },
            onError: (err) => {
                console.log(err);
              },
        });
        console.log(data);
        reset();
    };

    return (
        <>
        <div className="absolute rounded w-[400px] p-[20px] bg-pink-300 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                
                <form onSubmit={handleSubmit(submit)} className="pt-[20px]">
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="email" {...register("email")} placeholder="Name" />
                    </div>
                    <div className="mb-[10px]">
                        <input className="rounded w-full p-[10px]" type="password" {...register("password")} placeholder="Password" />
                    </div>
                    <button className="rounded w-full p-[10px] bg-pink-400 text-[#fff]">Send</button>
                </form>
            </div>
        </>
    )
}