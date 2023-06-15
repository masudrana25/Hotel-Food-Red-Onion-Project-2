import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Breakfast from './components/Breakfast/Breakfast';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header2/Header2';
import NavFood from './components/NavFood/NavFood';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Header2></Header2>
        <NavFood></NavFood>
        <Routes>
          <Route element={<Lunch></Lunch>} path='/lunch'></Route>
          <Route element={<Dinner></Dinner>} path='/dinner'></Route>
          <Route element={<Breakfast></Breakfast>} path='/breakfast'></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
