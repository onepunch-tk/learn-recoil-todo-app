import styled from "styled-components";
import ToDoList from "../components/ToDoList";
import CreateToDo from "../components/CreateToDo";

const ToDoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ToDo() {

    return (
        <ToDoWrapper>
            <CreateToDo/> d
            <ToDoList/>
        </ToDoWrapper>
    );
}

export default ToDo;