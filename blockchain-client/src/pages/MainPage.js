import ConnectWallet from '../components/ConnectWallet'
import CryptoCard from '../components/CryptoCard'
import InputValue from '../components/InputValue'
import styles from '../scss/MainPage.module.scss'

const MainPage = props => {
  return (
    <div className={styles.container}>
      <div className={styles.connectWallet}>
        <ConnectWallet />
      </div>
      <div className={styles.sendSection}>
        <div className={styles.cryptoCard}>
          <CryptoCard />
        </div>
        <div className={styles.inputBoxes}>
          <InputValue />
        </div>
      </div>
    </div>
  )
}

export default MainPage
