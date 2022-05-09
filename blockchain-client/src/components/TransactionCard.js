import styles from '../scss/TransactionCard.module.scss'
import useFetch from '../hooks/useFetch'

const TransactionCard = ({
  addressTo,
  addressFrom,
  timeStamp,
  message,
  keyword,
  amount,
  url
}) => {
  const gifUrl = useFetch({ keyword })

  const shortenAddress = account => {
    return `${account.slice(0, 5)}...${account.slice(account.length - 4)}`
  }
  return (
    <div className={styles.container}>
      <div className={styles.timeStamp}>{timeStamp}</div>

      <div className={styles.textGroup}>
        <a
          href={`https://ropsten.etherscan.io/address/${addressFrom}`}
          className={styles.hyperlink}
          target_="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.text}>From: {shortenAddress(addressFrom)} </p>
        </a>
        <a
          href={`https://ropsten.etherscan.io/address/${addressTo}`}
          className={styles.hyperlink}
          target_="_blank"
          rel="noopener noreferrer"
        >
          <p className={styles.text}>To: {shortenAddress(addressTo)}</p>
        </a>
        <p className={styles.text}>Amount: {amount}</p>
        {message && <p className={styles.text}>Amount: {amount} ETH</p>}
      </div>
      <img src={gifUrl || url} alt="gif" className={styles.gifs}></img>
    </div>
  )
}
export default TransactionCard
