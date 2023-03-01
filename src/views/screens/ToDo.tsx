import styled from "styled-components";
import ShowToDoList from "../components/ShowToDoList";
import CreateToDo from "../components/CreateToDo";
import {useRecoilValue} from "recoil";
import {toDoListState} from "../../modules/states/todo-atom";

const ToDoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function ToDo() {
    const toDos = useRecoilValue(toDoListState);
    return (
        <ToDoWrapper>
            <CreateToDo/>
            <ShowToDoList/>
        </ToDoWrapper>
    );
}

export default ToDo;