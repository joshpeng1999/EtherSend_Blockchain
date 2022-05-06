import { useState } from 'react'
import styles from '../scss/InputValue.module.scss'
import Spinner from './Spinner'

const Input = ({ placeholder, name, type, value, handleChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={e => handleChange(e, name)}
      className={styles.inputBox}
    ></input>
  )
}

const InputValue = ({
  formData,
  setFormData,
  handleChange,
  sendTransaction
}) => {
  const [sendRequest, setSendRequest] = useState(false)

  const handleSubmit = e => {
    //setSendRequest(true)
    const { addressTo, amount, keyword, message } = formData
    e.preventDefault()
    console.log(formData)
    if (!addressTo || !amount || !keyword || !message) {
      return
    }

    sendTransaction()
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Input
          placeholder="Address To"
          name="addressTo"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="number"
          handleChange={handleChange}
        />
        <Input
          placeholder="Keyword (GIF)"
          name="keyword"
          type="text"
          handleChange={handleChange}
        />
        <Input
          placeholder="Enter Message"
          name="message"
          type="text"
          handleChange={handleChange}
        />
        <div className={styles.line} />
        {sendRequest ? (
          <Spinner />
        ) : (
          <button className={styles.button} onClick={handleSubmit}>
            Send Now
          </button>
        )}
      </div>
    </div>
  )
}

export default InputValue
