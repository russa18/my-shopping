import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.js';
import Cart from './components/Cart/Cart.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import store from './store/store';
import { Provider } from 'react-redux';


function App() {
  return (


    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </Provider>
    </div >


  );
}

export default App;
