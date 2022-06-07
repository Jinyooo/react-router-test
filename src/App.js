import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './pages/Layout';
import About from './pages/About';
import BoardList from './pages/BoardList';
import Board from './components/Board';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/boardlist' element={<BoardList />}>
            <Route path=':id' element={<Board />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
