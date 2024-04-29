
import './App.css'
import { Routes, Route} from 'react-router-dom';
import Main from './pages/Main/Main';

import Notfound from './pages/Notfound/Notfound';
import Widget from './pages/Widget/Widget';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/:id' element={<Widget/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </>
  )
}

export default App
