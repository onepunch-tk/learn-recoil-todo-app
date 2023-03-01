import {object, string} from "yup";

export const toDoSchema = object({
    toDo: string()
        .required("This field is required!")
        .max(25, "todo is too long!")
        .min(2, "todo is too short!")
});

export const categorySchema = object({
    key:string()
        .required("This field is required!"),
    value:string()
        .required("This field is required!")
});
