import {atom} from "recoil";
import {EToDoCategory} from "../defines/enums";

export const themeState = atom({
    key: "theme",
    default: true,
});

interface IToDo {
    text:string;
    category:EToDoCategory;
    id:number;
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: []
});