import Header from './components/Header';
import Heading from './components/Heading';
import styles from "./App.module.css";
import React from "react"
import Footer  from './components/Footer';

function App() {
  return (
    <>
      <Header className={styles.header} />
      <Heading className={styles.heading} />
      <Footer className={styles.Footer}/>
    </>
  );
}

export default App;
