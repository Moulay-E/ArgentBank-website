import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import Banner from './component/Banner/Banner';
import Login from './pages/login/login';
import Footer from './component/footer/Footer';
import ProfileUser from './pages/profileUser/profileUser';

function App() {
  return (
    <div className="App">
       <Router>
            <Banner />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Registration" element={<Login />} />
               <Route path="/Registration/user" element={<ProfileUser />} />
            </Routes>
            <Footer />
         </Router>
    </div>
  );
}

export default App;
