import styles from '../scss/ConnectWallet.module.scss'

const ConnectWallet = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Send Crypto across the World</p>
      <p className={styles.textDescription}>
        Explore the crypto world. Buy and sell cryptocurrencies easily on this
        application.
      </p>
      <div className={styles.button}>Connect Wallet</div>
    </div>
  )
}

export default ConnectWallet
