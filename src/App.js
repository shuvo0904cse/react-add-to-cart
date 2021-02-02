import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyRoute from "./MyRoute";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
   <div>
       <BrowserRouter>
           <Header/>
           <MyRoute/>
           <Footer/>
       </BrowserRouter>
   </div>
  );
}

export default App;
