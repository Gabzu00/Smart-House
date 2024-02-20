import React from 'react'
import styles from './App.module.css'
import { Navbar } from './components/navbar/Navbar'
import { Panel } from './components/panel/Panel'

function App() {
  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Panel />
    </div>
    </>
  )
}

export default App
