
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import User from './routes/user';
import Admin from './routes/admin';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
      <Routes>
       <Route path="/*" element={ < User />}/>
       <Route path="/admin/*" element={  <Admin />}/>
     
      
       

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
