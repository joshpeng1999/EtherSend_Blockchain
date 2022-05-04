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

const InputValue = () => {
  const [sendRequest, setSendRequest] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Input
          placeholder="Address To"
          name="addressTo"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Amount (ETH)"
          name="amount"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Keyword (GIF)"
          name="keyword"
          type="text"
          handleChange={() => {}}
        />
        <Input
          placeholder="Enter Message"
          name="enterMessage"
          type="text"
          handleChange={() => {}}
        />
        <div className={styles.line} />
        {sendRequest ? (
          <Spinner />
        ) : (
          <button
            className={styles.button}
            onClick={() => {
              setSendRequest(true)
            }}
          >
            Send Now
          </button>
        )}
      </div>
    </div>
  )
}

export default InputValue
