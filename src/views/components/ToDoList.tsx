import {categoriesState, ICategory, IToDo, selectedCategoryState, toDoListState} from "../../modules/states/todo-atom";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {Button, SubTitle, Title, Wrapper} from "../../styles/modules";
import styled from "styled-components";

const ChangeButton = styled(Button)`
  margin: 0 5px;
`;

const List = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`

interface IToDoListProps {
    toDos:IToDo[],
}


function ToDoList({toDos}:IToDoListProps) {
    const setToDos = useSetRecoilState(toDoListState);
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
        <Wrapper>
            <Title>{title}</Title>
            <ul>
                {toDos?.map(todo =>
                    <List key={todo.id}>
                        <SubTitle>{todo.text}</SubTitle>

                        {categories.map((cat,index)=>Object.keys(cat).join() !== Object.keys(currentCategory).join()
                            && <ChangeButton key={index} onClick={() => changeCategory(todo.id, cat)}>{Object.values(cat).join()}</ChangeButton>)}
                    </List>
                )}
            </ul>
        </Wrapper>

    );
}

export default ToDoList;