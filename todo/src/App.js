import './App.css';
import ToDoPage from './pages/ToDoPage';
import LoggingPage from './pages/LoggingPage';
import NotFoundPage from './pages/NotFoundPage';
import StatisticsPage from './pages/StatistcsPage';
import SettingPage from './pages/SettingPage';
import SupportPage from './pages/SupportPage'


function App() {
  return (
    <div>
    <div className="App">
      <h1>Let's be productive</h1>
    </div>
    <div id="page-body">
      <ToDoPage/>
      <StatisticsPage/>
      <LoggingPage/>
      <NotFoundPage/>
      <SettingPage/>
      <SupportPage/>
    </div> 
    </div>
  );
}

export default App;
