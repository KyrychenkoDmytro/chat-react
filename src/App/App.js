import './App.scss';
import UserId from '../Containers/UserId/UserId';
import Sidebar from '../Containers/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import data from '../data.json';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Sidebar data={data}/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<UserId data={data}/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
