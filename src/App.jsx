
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Route, Routes } from "react-router-dom";

import axios from 'axios';


axios.defaults.baseURL = "https://reqres.in/api";

function App() {
  

  return (
    <Routes>
      <Route path="/users" element={<UsersPage/>}/>
      <Route path="/users/:id" element={<UserInfoPage/>}/>
    </Routes>

  )
}

export default App
