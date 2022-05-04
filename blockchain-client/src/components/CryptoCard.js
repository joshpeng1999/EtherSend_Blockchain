import styles from '../scss/CryptoCard.module.scss'
import ethLogo from '../assets/ethLogo.svg'

const CryptoCard = props => {
  const address = 'Address'
  return (
    <div className={styles.container}>
      <img src={ethLogo} alt={ethLogo} className={styles.logo} />
      <p className={styles.title}>Ethereum</p>
      <p className={styles.address}>{address}</p>
    </div>
  )
}

export default CryptoCard
