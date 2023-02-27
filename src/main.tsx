import ReactDOM from 'react-dom/client'
import App from './App'
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./styles/theme";
import {GlobalStyle} from "./styles/reset-css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={darkTheme}>
        <GlobalStyle/>
        <App />
    </ThemeProvider>
)
