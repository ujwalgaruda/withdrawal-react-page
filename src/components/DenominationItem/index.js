// Write your code here
// Write your code here
import './index.css'

const DenominationItem = props => {
  const {details, changeBalance} = props
  const {value} = details

  const onButtonClick = () => {
    changeBalance(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={onButtonClick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
