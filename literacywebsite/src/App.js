import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Writing from "./pages/Writing";
import Analytics from "./pages/Analytics";
import {Route, Routes} from 'react-router-dom';
import PeppaPigVideo from "./pages/PeppaPigVideo";
import ReadingMenu from "./pages/Reading";
import PigeonBook from "./pages/PigeonBook";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByOJogGAsBvb_ecjBV7hL_2JKagQvP8Zg",
  authDomain: "parrot-app-ut.firebaseapp.com",
  databaseURL: "https://parrot-app-ut-default-rtdb.firebaseio.com",
  projectId: "parrot-app-ut",
  storageBucket: "parrot-app-ut.appspot.com",
  messagingSenderId: "363325936567",
  appId: "1:363325936567:web:dfef95f92c5214bcad0e32",
  measurementId: "G-ESYY2DLEJW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);
  
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
    </>
  );
}
  
export default App;
