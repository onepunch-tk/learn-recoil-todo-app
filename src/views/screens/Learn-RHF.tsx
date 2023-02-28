import styled from "styled-components";
import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";

const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

interface Inputs {
    email:string;
    firstName:string;
    lastName:string;
    password:string;
    passwordConfirm:string;
}

const schema = yup.object({
    email:yup.string().email("only email form"),
    firstName:yup.string().max(15).min(5),
    lastName:yup.string().max(15).min(5),
    password:yup.string().max(15).min(5),
    passwordConfirm:yup.string().oneOf([yup.ref("password")],"do not match password")
}).required("this field is required");

type FormData = yup.InferType<typeof schema>;

function LearnRHF() {
    /*
    * input field 를 등록하는 register
    * register 함수는 두 개의 아규먼트를 받는다. 하나는, input field 의 이름, 다른 하나는 해당 태그의 옵션 e.g. required:true
    * input field 의 상태 변화를 주시하는 watch
    * form submit event 를 담당하는 handleSubmit
    * submit 시 form 의 상태를 체크하는 formState
    * setValue() 는 해당 field 의 값을 임의로 설정할 수 있다.*/
    // const {register, watch, handleSubmit, formState:{errors}} = useForm<Inputs>();
    const {register, watch, handleSubmit, formState:{errors}} = useForm<FormData>({
        resolver:yupResolver(schema)
    });
    const onSubmit = (data:FormData) => console.log(data);
    console.log(watch());
    return (
        <TodoWrapper>
            <h1>todo list</h1>
            <div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    {/*<input {...register("email", {*/}
                    {/*    pattern:{*/}
                    {/*        value:/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,*/}
                    {/*        message:"check for email"*/}
                    {/*    }*/}
                    {/*})} placeholder={"Email"}/>*/}
                    <input {...register("email")} placeholder={"Email"}/>
                    {errors.email && <span>{errors.email.message}</span>}
                    <input {...register("firstName")} placeholder={"First Name"}/>
                    {errors.firstName && <span>{errors.firstName.message}</span>}
                    <input {...register("lastName")} placeholder={"Last Name"}/>
                    {errors.lastName && <span>{errors.lastName.message}</span>}
                    <input type={"password"} {...register("password")} placeholder={"Password"}/>
                    {errors.password && <span>{errors.password.message}</span>}
                    {/*<input type={"password"} {...register("passwordConfirm",{*/}
                    {/*    validate:{*/}
                    {/*        confirmed:value => watch("password") !== value ? "password do not match" : true,*/}
                    {/*        includesTK:value => value?.includes("TK") ? "no TK allowed" : true*/}
                    {/*    }*/}
                    {/*})} placeholder={"Password Confirm"}/>*/}
                    <input type={"password"} {...register("passwordConfirm")} placeholder={"Password Confirm"}/>
                    {errors.passwordConfirm && <span>{errors.passwordConfirm.message}</span>}
                    <input type={"submit"}/>
                </Form>
            </div>
        </TodoWrapper>
    );
}

export default LearnRHF;