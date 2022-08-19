import './App.scss';
import UserId from '../Containers/UserId/UserId';
import Sidebar from '../Containers/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';
import Home from '../Components/Home/Home';
import data from '../data.json';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addSend } from '../store/slices/sendSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const messeges = data.filter((item) => localStorage.getItem(item.id));
    messeges.map((item) => dispatch(addSend([item.id, JSON.parse(localStorage.getItem(item.id))])));
  }, [dispatch]);


  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Sidebar data={data} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<UserId data={data} />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
