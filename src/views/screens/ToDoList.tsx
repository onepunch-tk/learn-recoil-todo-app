import styled from "styled-components";
import React, {useState} from "react";

const TodoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ToDoList() {
    const [value, setValue] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {currentTarget:{value}} = e;
        setValue(value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(value);
    };

    return (
        <TodoWrapper>
            <h1>todo list</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={value} placeholder={"write a to do!"}/>
                    <button>Add</button>
                </form>
            </div>
        </TodoWrapper>
    );
}

export default ToDoList;