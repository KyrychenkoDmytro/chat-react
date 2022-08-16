import './App.scss';
import Main from '../Containers/Main/Main';
import Sidebar from '../Containers/Sidebar/Sidebar';
import Footer from '../Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Sidebar />
      <Main />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
