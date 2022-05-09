import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'

import { contractABI, contractAddress } from '../utils/constants'

export const TransactionContext = React.createContext()

const { ethereum } = window

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const TransactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  )

  return TransactionContract
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const [formData, setFormData] = useState({
    addressTo: '',
    amount: '',
    keyword: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [transactionCount, setTransactionCount] = useState(
    localStorage.getItem('transactionCount')
  )
  const [transactions, setTransactions] = useState([])

  const handleChange = (e, name) => {
    setFormData(prevState => ({ ...prevState, [name]: e.target.value }))
  }

  const getAllTransactions = async () => {
    try {
      if (!ethereum) {
        return alert('Please install metamask')
      }
      const transactionContract = getEthereumContract()
      const availableTransactions =
        await transactionContract.getAllTransactions()

      const structuredTransactions = availableTransactions.map(transaction => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timeStamp: new Date(
          transaction.timestamp.toNumber() * 1000
        ).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / 10 ** 18 // convert hew to eth
      }))
      setTransactions(structuredTransactions)
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  const checkIfWalletConnected = async () => {
    try {
      if (!ethereum) return alert('Please install metamask')

      const accounts = await ethereum.request({ method: 'eth_accounts' })

      if (accounts.length) {
        setCurrentAccount(accounts[0])

        getAllTransactions()
      } else {
        console.log('No accounts found')
      }
      console.log(accounts)
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert('Please install metamask')
      }
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
      throw new Error('No ethereum object.')
    }
  }

  const checkIfTransactionsExist = async () => {
    try {
      const transactionContract = getEthereumContract()
      const transactionCount = transactionContract.getTransactionCount()
      window.localStorage.setItem('transactionCount', transactionCount)
    } catch (error) {
      console.log(error)
      throw new Error('No Ethereum object')
    }
  }

  const sendTransaction = async () => {
    try {
      if (!ethereum) {
        return alert('Please install metamask')
      }
      const { addressTo, amount, keyword, message } = formData
      const transContract = getEthereumContract()
      const parsedAmount = ethers.utils.parseEther(amount)
      await ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: currentAccount,
            to: addressTo,
            gas: '0x5208', // 21000 GWEI
            value: parsedAmount._hex // 0.00001
          }
        ]
      })

      const transactionHash = await transContract.addToBlockchain(
        addressTo,
        parsedAmount,
        message,
        keyword
      )

      setIsLoading(true)
      console.log('Loading: ' + transactionHash.hash)
      await transactionHash.wait()
      setIsLoading(false)
      console.log('Success: ' + transactionHash.hash)

      const transactionCount = await transContract.getTransactionCount()
      setTransactionCount(transactionCount.toNumber())
    } catch (error) {
      console.log(error)
      throw new Error('No Ethereum object')
    }
  }

  useEffect(() => {
    checkIfWalletConnected()
    checkIfTransactionsExist()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        currentAccount,
        formData,
        setFormData,
        handleChange,
        sendTransaction,
        transactions,
        isLoading,
        transactionCount
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}
