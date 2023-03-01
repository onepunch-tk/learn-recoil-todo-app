import {atom, selector} from "recoil";
import {EToDoCategory} from "../defines/enums";

export const themeState = atom({
    key: "theme",
    default: true,
});

export interface IToDo {
    text: string;
    category: ICategory;
    id: number;
}

export interface ICategory {
    [key: string]: string;
}

export const selectedCategoryState = atom<ICategory>({
    key: "selectedCategory",
    default: {"TODO": "To Do"}
});

export const categoriesState = atom<ICategory[]>({
    key: "categories",
    default: [{"TODO": "To Do"}, {"DOING": "Doing"}, {"DONE": "Done"}]
});

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: []
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const allToDos = get(toDoState);
        const category = get(selectedCategoryState);
        return allToDos.filter(toDo => toDo.category === category);
    },
});