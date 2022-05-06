import styles from '../scss/ConnectWallet.module.scss'

const ConnectWallet = ({ connectWallet, currentAccount }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Send Crypto across the World</p>
      <p className={styles.textDescription}>
        Explore the crypto world. Buy and sell cryptocurrencies easily on this
        application.
      </p>
      {!currentAccount && (
        <div className={styles.button} onClick={connectWallet}>
          Connect Wallet
        </div>
      )}
    </div>
  )
}

export default ConnectWallet
