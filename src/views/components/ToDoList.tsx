import {EToDoCategory} from "../../modules/defines/enums";
import {categoriesState, ICategory, IToDo, selectedCategoryState, toDoState} from "../../modules/states/todo-atom";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Title} from "../../styles/modules";

interface IToDoListProps {
    toDos:IToDo[],
}

function ToDoList({toDos}:IToDoListProps) {
    const setToDos = useSetRecoilState(toDoState);
    const currentCategory= useRecoilValue(selectedCategoryState);
    const categories = useRecoilValue(categoriesState);
    const title = Object.values(currentCategory).join();

    const changeCategory = (id: number, newCategory: ICategory) => {
        setToDos(oldToDos => {
            const targetIndex = oldToDos.findIndex(toDo => toDo.id == id);
            const changeToDo = {...oldToDos[targetIndex], category: newCategory};

            return [...oldToDos.slice(0, targetIndex), changeToDo, ...oldToDos.slice(targetIndex + 1)];
        });
    };
    return (
        <>
            <Title>{title}</Title>
            <ul>
                {toDos?.map(todo =>
                    <li key={todo.id}>
                        <span>{todo.text}</span>

                        {categories.map((cat,index)=>Object.keys(cat).join() !== Object.keys(currentCategory).join()
                            && <button key={index} onClick={() => changeCategory(todo.id, cat)}>{Object.values(cat).join()}</button>)}
                    </li>
                )}
            </ul>
        </>

    );
}

export default ToDoList;