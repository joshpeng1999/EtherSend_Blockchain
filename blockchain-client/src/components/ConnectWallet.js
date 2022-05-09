import styles from '../scss/ConnectWallet.module.scss'

const ConnectWallet = ({ connectWallet, currentAccount }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Send Crypto across the World</p>
      <p className={styles.textDescription}>
        With the up and coming wave of Web 3.0 projects, this application
        demonstrates a simple example of blockchain technology. In this app, you
        can mimic the transaction process of sending Ethereum (eth) from one
        user to another over the blockchain. Try it out by first connecting a
        Metamask wallet and sending fake eth to another wallet address.
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
