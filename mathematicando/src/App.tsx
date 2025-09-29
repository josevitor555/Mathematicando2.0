
// Import CSS
import './App.css'

// Pages
import Home from './pages/Home';

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        {/* Main route */}
        <Route path='/' element={<Home />} />

        {/* Route for home */}
        {/* <Route path='/home' element={<MainChatApp />} /> */}

        {/* Route not found */}
        <Route path="*" element={<div> 404 - Page Not Found </div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
