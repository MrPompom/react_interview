import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './component/HomePage';
import FilmDetails from './component/FilmDetails'

function App() {
  return (
    <div className="App">
      <header></header>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/film_detail" element={<FilmDetails />} />
      </Routes>
    </div>
  );
}

export default App;
