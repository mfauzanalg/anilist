import './App.css';
import Landing from './components/Landing'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing page={'anime'} />} />
        <Route path="/anime" element={<Landing page={'anime'} />} />
        <Route path="/collection" element={<Landing page={'collection'} />} />
      </Routes>
    </Router>
  );
}

export default App;