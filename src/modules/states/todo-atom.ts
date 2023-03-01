import {atom, selector} from "recoil";
import {recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist({key:"toDoPersist"});

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
    default: {"TODO": "To Do"},
    effects_UNSTABLE:[persistAtom]
});

export const toDoListState = atom<IToDo[]>({
    key: "toDoList",
    default: [],
    effects_UNSTABLE:[persistAtom]
});

export const categoriesState = atom<ICategory[]>({
    key: "categories",
    default: [{"TODO": "To Do"}, {"DOING": "Doing"}, {"DONE": "Done"}],
    effects_UNSTABLE:[persistAtom]
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({get}) => {
        const allToDos = get(toDoListState)
        const category = get(selectedCategoryState);
        return allToDos.filter(toDo => Object.keys(toDo.category).join() === Object.keys(category).join());
    },

});