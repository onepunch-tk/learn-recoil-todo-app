import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {themeState} from "./modules/states/todo-atom";
import {darkTheme, lightTheme} from "./styles/theme";
import {GlobalStyle} from "./styles/reset-css";
import styled, {ThemeProvider} from "styled-components";
import LearnRHF from "./views/screens/Learn-RHF";
import ToDo from "./views/screens/ToDo";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
`;

function App() {
    const [isDark, setThemeState] = useRecoilState(themeState);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <Container>
                <ToDo/>
            </Container>
        </ThemeProvider>
    )
}

export default App
