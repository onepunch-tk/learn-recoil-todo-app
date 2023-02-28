import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/theme";
import {GlobalStyle} from "./styles/reset-css";
import {RecoilRoot, useRecoilValue} from "recoil";
import {themeState} from "./modules/states/todo-atom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <App/>
    </RecoilRoot>
)
