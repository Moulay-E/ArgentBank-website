import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/home/home";
import Banner from './component/Banner/Banner';
import Registration from './pages/registration/registration';
import Footer from './component/footer/Footer';
import User from './pages/user/user';

function App() {
  return (
    <div className="App">
       <Router>
            <Banner />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/Registration" element={<Registration />} />
               <Route path="/Registration/user" element={<User />} />
            </Routes>
            <Footer />
         </Router>
    </div>
  );
}

export default App;
