import styled from "styled-components";
import ShowToDoList from "../components/ShowToDoList";
import CreateToDo from "../components/CreateToDo";

const ToDoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function ToDo() {

    return (
        <ToDoWrapper>
            <CreateToDo/>
            <ShowToDoList/>
        </ToDoWrapper>
    );
}

export default ToDo;