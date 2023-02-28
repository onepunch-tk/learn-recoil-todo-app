import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {themeState} from "./modules/states/todo-atom";
import {darkTheme, lightTheme} from "./styles/theme";
import {GlobalStyle} from "./styles/reset-css";
import styled, {ThemeProvider} from "styled-components";
import ToDoList from "./views/screens/ToDoList";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
`;

function App() {
    const [isDark, setThemeState] = useRecoilState(themeState);
    const onClicked = () => setThemeState(prev => !prev);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <Container>
                <button onClick={onClicked}>dark mode</button>
                <ToDoList/>
            </Container>
        </ThemeProvider>
    )
}

export default App
