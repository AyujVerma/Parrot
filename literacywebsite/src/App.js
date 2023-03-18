import "./App.css";

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
// import About component
import Reading from "./components/Reading";
// import ContactUs component
import Writing from "./components/Writing";

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
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/Reading" component={Reading} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/Writing" component={Writing} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}
  
export default App;
