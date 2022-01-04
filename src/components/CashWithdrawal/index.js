// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balanceAmt: 10000}

  changeBalance = value => {
    this.setState(prevState => ({balanceAmt: prevState.balanceAmt - value}))
  }

  render() {
    const {balanceAmt} = this.state
    const {denominationsList} = this.props
    const name = 'Rahul Somani'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="app-card">
          <div className="name-image-container">
            <p className="icon">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-container">
            <p className="balance-header">Your Available Balance</p>
            <p className="balance-amt">
              {balanceAmt}
              <br />
              <span className="rupees-tag">In Rupees</span>{' '}
            </p>
          </div>

          <p className="withdraw-header">Withdraw</p>
          <p className="withdraw-tag">Choose Denomination (IN RUPEES)</p>
          <ul className="button-list">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                details={eachItem}
                changeBalance={this.changeBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
