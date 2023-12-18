import Header from '../src/components/views/Header';
import Heading from '../src/components/views/Heading';
import styles from "../src/components/css/App.modules.css";
import React from "react"
import Footer from '../src/components/views/Footer';
import Shop from '../src/components/views/Shop';
import ItemPage from '../src/components/views/ItemPage';
import Cart from '../src/components/views/Cart';
import Success from '../src/components/views/Success'
import PurchaseForm from './components/views/Form';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header className={styles.header} exact="true"/>
      <Routes>
        <Route path='/' element={<Heading className={styles.heading}/>} exact="true" />
        <Route path='/shop' element={<Shop className={styles.shop} />} exact="true" />
        <Route path='/item/:id' element={<ItemPage />} exact />
        <Route path='/cart' element={<Cart />} exact="true" />
        <Route path='/success' element={<Success />} exact="true" />
        <Route path='/purchaseForm' element={<PurchaseForm/>} exact="true"/>
      </Routes>
      <Footer className={styles.footer} exact="true"/>
    </Router>
  );
}

export default App;
