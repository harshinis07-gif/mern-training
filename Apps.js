
import {Routes,Route}from 'react-router-dom';
import Login from './Login'; 
import Dashboard from './Dashboard';
import Dashboards from './dashboards'
function App() {
  return (
    <Routes>
      <Route path = "/" element={<Login />}/>
      <Route path="/Dashboard"element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
