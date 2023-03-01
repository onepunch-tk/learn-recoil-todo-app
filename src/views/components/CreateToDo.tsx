import styled from "styled-components";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {InferType} from "yup";
import {categorySchema, toDoSchema} from '../../models/todo-schema';
import {useRecoilState, useSetRecoilState} from "recoil";
import {categoriesState, selectedCategoryState, toDoListState} from "../../modules/states/todo-atom";
import {Button, ColumnFlexBox, ErrorMessage, RowFlexBox, SubTitle, Title, Wrapper} from "../../styles/modules";
import React from "react";


const ToDoForm = styled(RowFlexBox)`
  margin-top: 5px;

  input {
    margin-right: 10px;
    border-radius: .25em;
    border: none;
    padding: 3px;
  }
`;

const MessageWrapper = styled.div`
  height: 20px;
  width: 100%;
  padding: 3px 0;
`

const FormWrapper = styled(ColumnFlexBox)`
  background-color: ${props => props.theme.subBgColor};
  border-radius: 15px;
  padding: 10px 20px;
  margin: 10px 0;
  width: 230px;
`;



const CategoryTitle = styled(SubTitle)`
  color: ${props => props.theme.subTextColor};
  font-size: 11px;
  margin-top: 5px;
`;

const SelectBox = styled.div`
  position: relative;
  display: flex;
  border-radius: .25em;
  overflow: hidden;
  margin-bottom: 10px;
  margin-top: 5px;


  select {
    /* Reset Select */
    appearance: none;
    outline: 0;
    border: 0;
    box-shadow: none;
    /* Personalize */
    flex: 1;
    padding: 0 1em;
    background-image: none;
    cursor: pointer;
    color: black;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    ::-ms-expand {
      display: none;
    }
  }

  ::after {
    content: '\\25BC';
    position: absolute;
    top: 0;
    left: 80px;
    right: 0;
    width: 20px;
    height: 20px;
    background-color: ${props => props.theme.accentColor};
    transition: .25s all ease;
    pointer-events: none;
    text-align: center;
    font-size: 15px;
    color: ${props => props.theme.mainBgColor};
  }
`;

const CategoryForm = styled(ColumnFlexBox)`

`;


interface IToDoForm extends InferType<typeof toDoSchema> {
}

interface ICategoryForm extends InferType<typeof categorySchema> {

}

function CreateToDo() {
    const [categories, setCategories] = useRecoilState(categoriesState);
    const [currentCategory, setCurrentCategory] = useRecoilState(selectedCategoryState);
    const setToDos = useSetRecoilState(toDoListState);
    const {
        register: todoRegister,
        handleSubmit: todoSubmit,
        setValue: todoSetValue,
        formState: {
            errors: todoErrors
        }
    } = useForm<IToDoForm>({
        resolver: yupResolver(toDoSchema)
    });

    const {
        register: catRegister,
        handleSubmit: catSubmit,
        setError,
        reset,
        formState: {
            errors: catErrors,
        }
    } = useForm<ICategoryForm>({
        resolver: yupResolver(categorySchema)
    });

    const addToDo = ({toDo}: IToDoForm) => {
        setToDos(oldToDos =>
            [...oldToDos, {
                id: Date.now(),
                category: currentCategory,
                text: toDo
            }]
        );
        todoSetValue("toDo", "");
    };

    const addCategory = ({key, value}: ICategoryForm) => {
        const existsCategory = categories.find(cat => cat[key.toUpperCase()]);
        if (existsCategory) {
            setError(
                "key",
                {message: "Already Exists Category!"},
                {shouldFocus: true}
            );

            return;
        }
        setCategories(oldCategories => [...oldCategories, {[key.toUpperCase()]:value}]);
        reset({key: "", value: ""});
    };

    const selectedCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const {currentTarget: {value}} = e;
        const selectedCategory = categories.find(cat => cat[value]);

        if (selectedCategory) {
            setCurrentCategory(selectedCategory);
        }
    };

    return (
        <Wrapper>
            <Title>Create To Do!</Title>
            <FormWrapper>
                <SubTitle>Add Category</SubTitle>
                <CategoryForm as={"form"} onSubmit={catSubmit(addCategory)}>
                    <CategoryTitle>Category Name : </CategoryTitle>
                    <input {...catRegister("key")} placeholder={"Write Category Name"}/>
                    <MessageWrapper>
                        {catErrors.key && <ErrorMessage>{catErrors.key.message}</ErrorMessage>}
                    </MessageWrapper>
                    <CategoryTitle>Category Value : </CategoryTitle>
                    <input {...catRegister("value")} placeholder={"Write Category Value"}/>
                    <MessageWrapper>
                        {catErrors.value && <ErrorMessage>{catErrors.value.message}</ErrorMessage>}
                    </MessageWrapper>
                    <Button>Add</Button>
                </CategoryForm>

            </FormWrapper>
            <FormWrapper>
                <SubTitle>Choose a category:</SubTitle>
                <SelectBox>
                    <select onChange={selectedCategory}>
                        {categories.map((cat, index) =>
                            <option key={index} value={Object.keys(cat).join()}>
                                {Object.values(cat).join()}
                            </option>
                        )}
                    </select>
                </SelectBox>
                <SubTitle>Add To Do : </SubTitle>
                <ToDoForm as={"form"} onSubmit={todoSubmit(addToDo)}>
                    <input {...todoRegister("toDo")} placeholder={"Write To Do!"}/>
                    <Button>Add</Button>
                </ToDoForm>
                <MessageWrapper>
                    {todoErrors.toDo && <ErrorMessage>{todoErrors.toDo.message}</ErrorMessage>}
                </MessageWrapper>
            </FormWrapper>
        </Wrapper>
    );
}

export default CreateToDo;