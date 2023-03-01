import {useRecoilValue} from "recoil";
import {selectedCategoryState, toDoSelector} from "../../modules/states/todo-atom";
import styled from "styled-components";
import ToDoList from "./ToDoList";

const ToDoListWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 20px;

  ul {
    margin-top: 10px;
  }
`

function ShowToDoList() {
    const toDoList = useRecoilValue(toDoSelector);

    return (
        <ToDoListWrapper>
            <ToDoWrapper>
                <ToDoList toDos={toDoList}/>
            </ToDoWrapper>
        </ToDoListWrapper>
    );
}

export default ShowToDoList;