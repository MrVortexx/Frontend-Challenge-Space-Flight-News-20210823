import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
        <BrowserRouter> 
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}>
              
            </Route>
            
          </Routes>
        </BrowserRouter>
       

    </div>
   
    
  );
}

export default App;
