import Header from './components/Header';
import Heading from './components/Heading';
import styles from "./App.module.css";
import React from "react"
import Footer from './components/Footer';
import Shop from './components/Shop'
import ItemPage from './components/ItemPage';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header className={styles.header} />
      <Routes>
        <Route path='/' element={<Heading className={styles.heading}/>} />
        <Route path='/shop' element={<Shop className={styles.shop} />} />
        <Route path='/item/:id' element={<ItemPage />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer className={styles.footer} />
    </Router>
  );
}

export default App;
