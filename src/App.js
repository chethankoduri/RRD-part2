
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Leaves from './components/Leaves';
import Login from './components/Login';
import Signup from './components/Signup';
import Tasks from './components/Tasks';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></
    Route>
    <Route path='/Dashboard' element={<Dashboard/>}></
    Route>
    <Route path='/tasks' element={<Tasks/>}></
    Route>
    <Route path='/leaves' element={<Leaves/>}></
    Route>
    <Route path='*' element={<PageNotFound/>}></
    Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
