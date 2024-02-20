import styles from "./Navbar.module.css"

export const Navbar = () =>{
  return(
    <nav className={styles.navbar}>
      <h1 className={styles.title}>Smart House</h1>
    </nav>
  )
}