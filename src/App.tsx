import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </div>
    );
}

export default App;
