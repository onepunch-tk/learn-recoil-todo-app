import React from 'react';
import styled from "styled-components";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {InferType} from "yup";
import {toDoSchema} from '../../models/todo-schema';
import {useSetRecoilState} from "recoil";
import {toDoState} from "../../modules/states/todo-atom";
import {EToDoCategory} from "../../modules/defines/enums";

const ToDoForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.span`
  color: red;
  font-weight: bold;
  font-size: 14px;
`;

interface IToDoForm extends InferType<typeof toDoSchema>{}

function CreateToDo() {
    const setToDos = useSetRecoilState(toDoState);
    const {
        register,
        handleSubmit,
        setValue,
        formState: {
            errors
        }
    } = useForm<IToDoForm>({
        resolver: yupResolver(toDoSchema)
    });

    const addToDo = ({toDo}: IToDoForm) => {
        setToDos(oldToDos =>
            [...oldToDos, {
                id: Date.now(),
                category: EToDoCategory.TO_DO,
                text: toDo
            }]
        );
        setValue("toDo", "");
    };

    return (
        <ToDoForm onSubmit={handleSubmit(addToDo)}>
            <input {...register("toDo")} placeholder={"Write ToDo!"}/>
            {errors.toDo && <ErrorMessage>{errors.toDo.message}</ErrorMessage>}
            <button>Add</button>
        </ToDoForm>
    );
}

export default CreateToDo;