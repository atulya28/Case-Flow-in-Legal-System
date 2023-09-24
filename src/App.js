import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './components/LoginPage';
import { Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginPage />}></Route>   
        <Route exact path="/forgot-password" element={<ForgetPassword />}></Route>   
        <Route exact path="/home" element={<Home />}></Route>   
      </Routes>
    </div>
  );
}

export default App;
