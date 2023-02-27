import styled, {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/theme";
import {GlobalStyle} from "./styles/reset-css";
import {useRecoilValue} from "recoil";
import {themeState} from "./modules/states/todo-atom";



function App() {
    const isDark = useRecoilValue(themeState);

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <GlobalStyle/>
            <h1>Home</h1>
        </ThemeProvider>
    )
}

export default App
