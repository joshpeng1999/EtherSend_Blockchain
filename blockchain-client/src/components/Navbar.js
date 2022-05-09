import styles from '../scss/Navbar.module.scss'
import ethLogoMain from '../assets/ethLogoMain.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleGroup}>
        <img className={styles.ethLogo} src={ethLogoMain} alt={ethLogoMain} />
        <p className={styles.title}>Blockchain App</p>
      </div>
    </div>
  )
}

export default Navbar
