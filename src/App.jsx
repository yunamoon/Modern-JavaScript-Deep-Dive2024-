
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main/Main';
import ToDoList from './pages/ToDoList/ToDoList';
import Weather from './pages/Weather/Weather';
import Notfound from './pages/Notfound/Notfound';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/todo' element={<ToDoList/>}/>
      <Route path='/weather' element={<Weather/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App
