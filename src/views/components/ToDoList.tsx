import {useRecoilState} from "recoil";
import {toDoState} from "../../modules/states/todo-atom";
import {EToDoCategory} from "../../modules/defines/enums";

function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);

    const changeCategory = (id: number, newCategory: EToDoCategory) => {
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id == id);
            const oldToDo = oldToDos[targetIndex];
            const changeToDo = {...oldToDo, category:newCategory};

            return [...oldToDos.slice(0,targetIndex), changeToDo, ...oldToDos.slice(targetIndex+1)];
        });
    };
    return (
        <ul>
            {toDos?.map(todo =>
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    {todo.category !== EToDoCategory.TO_DO &&
                        <button onClick={() => changeCategory(todo.id, EToDoCategory.TO_DO)}>To Do</button>}
                    {todo.category !== EToDoCategory.DOING &&
                        <button onClick={() => changeCategory(todo.id, EToDoCategory.DOING)}>Doing</button>}
                    {todo.category !== EToDoCategory.DONE &&
                        <button onClick={() => changeCategory(todo.id, EToDoCategory.DONE)}>Done</button>}
                </li>
            )}
        </ul>
    );
}

export default ToDoList;