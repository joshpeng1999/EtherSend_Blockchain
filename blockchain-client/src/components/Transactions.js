import styles from '../scss/Transactions.module.scss'
import TransactionCard from './TransactionCard'

const Transactions = ({ transactions }) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Latest Transactions</p>
      <div className={styles.cards}>
        {transactions.reverse().map((transaction, i) => (
          <TransactionCard key={i} {...transaction} />
        ))}
      </div>
    </div>
  )
}

export default Transactions
