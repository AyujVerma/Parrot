import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer"
import Writing from "./pages/Writing";
import Analytics from "./pages/Analytics";
import {Route, Routes} from 'react-router-dom';
import PeppaPigVideo from "./pages/PeppaPigVideo";
import ReadingMenu from "./pages/Reading";
import PigeonBook from "./pages/PigeonBook";
  
function App() {
  return (
    <>
       <NavBar/>
       <div className="myContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Reading" element={<ReadingMenu />} />
            <Route path="/Writing" element={<Writing />} />
            <Route path="/Analytics" element={<Analytics/>} />
            <Route path="/PeppaPigVideo" element={<PeppaPigVideo/>} />
            <Route path="/PigeonBook" element={<PigeonBook/>} />
          </Routes>
       </div>
       <Footer/>
    </>
  );
}
  
export default App;
