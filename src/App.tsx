import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories';
import DailyRoutine from './components/DailyRoutine';
import Header from './components/Header';

function App() {
  return (
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/Lunes" element={<DailyRoutine day="Lunes" />} />
        <Route path="/Martes" element={<DailyRoutine day="Martes" />} />
        <Route path="/Miercoles" element={<DailyRoutine day="Miércoles" />} />
        <Route path="/Jueves" element={<DailyRoutine day="Jueves" />} />
        <Route path="/Viernes" element={<DailyRoutine day="Viernes" />} />
        <Route path="/Sabado" element={<DailyRoutine day="Sábado" />} />
      </Routes>
    </Router>
  );
}

export default App;
