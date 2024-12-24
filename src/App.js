import './App.css';
import Auth from './Components/Auth';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex w-full min-h-screen bg-[#FAFAFA]">
        <Routes>
          <Route path="/" Component={Auth} />
          <Route path="/dashboard" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
