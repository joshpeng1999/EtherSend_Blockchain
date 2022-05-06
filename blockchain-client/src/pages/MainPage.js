import React, { useContext } from 'react'
import ConnectWallet from '../components/ConnectWallet'
import CryptoCard from '../components/CryptoCard'
import InputValue from '../components/InputValue'
import { TransactionContext } from '../context/TransactionContext'
import styles from '../scss/MainPage.module.scss'

const MainPage = props => {
  const {
    connectWallet,
    currentAccount,
    formData,
    setFormData,
    handleChange,
    sendTransaction
  } = useContext(TransactionContext)

  return (
    <div className={styles.container}>
      <div className={styles.connectWallet}>
        <ConnectWallet
          connectWallet={connectWallet}
          currentAccount={currentAccount}
        />
      </div>
      <div className={styles.sendSection}>
        <div className={styles.cryptoCard}>
          <CryptoCard />
        </div>
        <div className={styles.inputBoxes}>
          <InputValue
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
            sendTransaction={sendTransaction}
          />
        </div>
      </div>
    </div>
  )
}

export default MainPage
