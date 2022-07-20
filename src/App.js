import './App.css';
import Landing from './components/Landing'
import AnimeDetailPage from './pages/AnimeDetailPage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing page={'anime'} />} />
        <Route path="/anime" element={<Landing page={'anime'} />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
        <Route path="/collection" element={<Landing page={'collection'} />} />
        <Route path="/collection/:name" element={<Landing page={'collection'} />} />
      </Routes>
    </Router>
  );
}

export default App;