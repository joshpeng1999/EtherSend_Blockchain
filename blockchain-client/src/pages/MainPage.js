import React, { useContext } from 'react'
import ConnectWallet from '../components/ConnectWallet'
import CryptoCard from '../components/CryptoCard'
import InputValue from '../components/InputValue'
import Navbar from '../components/Navbar'
import Transactions from '../components/Transactions'
import { TransactionContext } from '../context/TransactionContext'
import styles from '../scss/MainPage.module.scss'

const MainPage = props => {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction,
    isLoading,
    transactions
  } = useContext(TransactionContext)

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.innerContainer}>
        <div className={styles.connectWallet}>
          <ConnectWallet
            connectWallet={connectWallet}
            currentAccount={currentAccount}
          />
        </div>
        <div className={styles.sendSection}>
          <div className={styles.cryptoCard}>
            <CryptoCard currentAccount={currentAccount} />
          </div>
          <div className={styles.inputBoxes}>
            <InputValue
              formData={formData}
              setFormData={setFormData}
              handleChange={handleChange}
              sendTransaction={sendTransaction}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <div className={styles.prevTransactions}>
        <Transactions transactions={transactions} />
      </div>
    </div>
  )
}

export default MainPage
