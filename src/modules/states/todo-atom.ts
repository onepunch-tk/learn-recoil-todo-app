import {atom} from "recoil";

export const themeState = atom({
    key: "theme",
    default: true,
});

type Category = "TO_DO" | "DOING" | "DONE"
interface IToDo {
    text:string;
    category:Category;
    id:number;
}

export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: []
});