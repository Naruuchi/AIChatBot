import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AIChat from "./chatbot.js"
import Layout from "./navLayout.js"
import HomePage from './home.js';
import ViewPage from './view.js';

function Navigation() {
    return (
        <nav>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/AIAssistant" element={<AIChat/>}/>
                        <Route path="/view" element={<ViewPage/>}/>
                        <Route index path="/" element={<HomePage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </nav>
    )
}

export default Navigation;