import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Breakfast from './components/Breakfast/Breakfast';
import Footer from './components/Footer/Footer';
import Header2 from './components/Header2/Header2';
import NavFood from './components/NavFood/NavFood';
import CheckOutButton from './components/CheckOutButton/CheckOutButton';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Checkout from './components/CheckoutHandle/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        {/* <Header2></Header2> */}
        <NavFood></NavFood>
        <Routes>
          <Route element={<Lunch></Lunch>} path='/'></Route>
          <Route element={<Lunch></Lunch>} path='/home'></Route>
          <Route element={<Lunch></Lunch>} path='/lunch'></Route>
          <Route element={<Dinner></Dinner>} path='/dinner'></Route>
          <Route element={<Breakfast></Breakfast>} path='/breakfast'></Route>
          <Route element={<Checkout></Checkout>} path='/checkout'></Route>
          <Route element={<SignUp></SignUp>} path='/signup'></Route>
          <Route element={<Login></Login>} path='/login'></Route>
        </Routes>
        <CheckOutButton></CheckOutButton>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
