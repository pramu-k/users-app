import './App.css';
import { Route, Routes } from "react-router-dom";
import UserInformationView from './Views/UserInformationView';
import UsersView from './Views/UsersView';
import axios from 'axios';


axios.defaults.baseURL = "https://reqres.in/api";

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<UsersView/>}/>
      <Route path="/users/:id" element={<UserInformationView/>}/>
    </Routes>

  )
}

export default App
