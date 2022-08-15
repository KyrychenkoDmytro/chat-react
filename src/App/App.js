import './App.scss';
import Main from '../Components/Main/Main';
import Sidebar from '../Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Sidebar />
      <Main />
      </div>
    </div>
  );
}

export default App;
