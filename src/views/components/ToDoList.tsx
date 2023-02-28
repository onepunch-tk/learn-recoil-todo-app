import {useRecoilValue} from "recoil";
import {toDoState} from "../../modules/states/todo-atom";

function ToDoList() {
    const toDos = useRecoilValue(toDoState);
    return (
        <ul>
            {toDos?.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
}

export default ToDoList;