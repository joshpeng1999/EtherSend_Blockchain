import styles from '../scss/CryptoCard.module.scss'
import ethLogo from '../assets/ethLogo.svg'

const CryptoCard = props => {
  const shortenAddress = account => {
    return `${account.slice(0, 5)}...${account.slice(account.length - 4)}`
  }

  return (
    <div className={styles.container}>
      <img src={ethLogo} alt={ethLogo} className={styles.logo} />
      <p className={styles.title}>Ethereum</p>

      <p className={styles.address}>
        {props.currentAccount
          ? shortenAddress(props.currentAccount)
          : 'Please connect wallet'}
      </p>
    </div>
  )
}

export default CryptoCard
