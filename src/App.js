import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ForgetPassword from './components/ForgetPassword';
import Home from './components/Home';
import CaseStatus from './components/CaseStatus';
import Judges from './components/Judges';
import Calendar from './components/Calendar';
import CauseList from './components/CauseList';
import PriorityCases from './components/PriorityCases';
import Link from './components/Link';
import Contact from './components/Contact';
import eLibrary from './components/eLibrary';
import HomeMain from './components/HomeMain';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/home" element={<HomeMain />} />
        <Route path="/priority-cases" element={<Home />} />
        <Route path="/casestatus" element={<CaseStatus />} />
        <Route path="/judges" element={<Judges />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/causelist" element={<CauseList />} />
        {/* <Route path="/prioritycases" element={<PriorityCases />} /> */}
        <Route path="/link" element={<Link />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elibrary" element={<eLibrary />} />
      </Routes>
    </div>
  );
}

export default App;
