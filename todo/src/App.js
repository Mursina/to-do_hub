import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from "./NavBar"
import ToDoPage from './pages/ToDoPage';
import LoggingPage from './pages/LoggingPage';
import StatisticsPage from './pages/StatistcsPage';
import SettingPage from './pages/SettingPage';
import SupportPage from './pages/SupportPage'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Let's be productive</h1>
        <NavBar/>
      </div>
      <div id="page-body">
        <Routes>
          <Route path='/Home' element={<ToDoPage/>}/>
          <Route path='/Statistics' element={<StatisticsPage/>}/>
          <Route path='/Help' element={<SupportPage/>}/>
          <Route path='/Setting' element={<SettingPage/>}/>
          <Route path='/LogIn' element={<LoggingPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
