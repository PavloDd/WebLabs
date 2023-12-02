import Header from './components/Header';
import Heading from './components/Heading';
import styles from "./App.module.css";
import React from "react"
import Footer from './components/Footer';
import Shop from './components/Shop'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header className={styles.header} />
      <Routes>
        <Route path='/' element={<Heading className={styles.heading}/>} />
        <Route path='/shop' element={<Shop className={styles.shop} />}/>
      </Routes>
      <Footer className={styles.footer} />
    </Router>
  );
}

export default App;