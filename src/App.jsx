import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import HomePage from './component/HomePage';

function App() {
  return (
    <div className="App">
      <header></header>
      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
