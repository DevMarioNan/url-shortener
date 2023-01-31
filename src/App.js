
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route , } from 'react-router-dom';
import Signin from './components/login/Signin';
import Signup from './components/signup/Signup';



function App() {
  return (
    <div className="App h-screen flex flex-col">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
