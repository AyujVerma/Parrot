import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Reading from "./pages/Reading";
import Writing from "./pages/Writing";
import Analytics from "./pages/Analytics";
import {Route, Routes} from 'react-router-dom';
import CatInTheHatVideo from "./pages/CatInTheHatVideo";
 
/*const theme = createTheme({
  typography: {
    fontFamily: [
      'Play', 'san-serif',
    ].join(','),
  },
});*/
  
function App() {
  return (
    <>
       <NavBar/>
       <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Reading" element={<Reading />} />
            <Route path="/Writing" element={<Writing />} />
            <Route path="/Analytics" element={<Analytics/>} />
            <Route path="/CatInTheHatVideo" element={<CatInTheHatVideo/>} />
          </Routes>
       </div>
    </>
  );
}
  
export default App;
