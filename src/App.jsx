
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Route, Routes } from "react-router-dom";
import UserInformationView from './Views/UserInformationView';
import UsersView from './Views/UsersView';
import axios from 'axios';


axios.defaults.baseURL = "https://reqres.in/api";

function App() {
  

  return (
    <Routes>
      <Route path="/users" element={<UsersView/>}/>
      <Route path="/users/:id" element={<UserInformationView/>}/>
    </Routes>

  )
}

export default App
