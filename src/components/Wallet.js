import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deposit, withdraw} from "../store/actions/balance";

export class Wallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 0
        }
    }

    handleBalanceChange = (e) => {
        this.setState({
            balance: parseInt(e.target.value, 10)
        })
    };

    handleDeposit = () => {
        this.props.deposit(this.state.balance);
    };

    handleWithdraw = () => {
        this.props.withdraw(this.state.balance);
    };

    render() {
        const {balance} = this.props;

        return (
            <div>
                <h2>Wallet</h2>
                <h4 className={'balance'}>Balance is: {balance}</h4>
                <hr/>
                <input className={"input-wallet"} type={'text'} onChange={this.handleBalanceChange}/>
                <button className={"btn-deposit"} onClick={this.handleDeposit}>Deposit</button>
                <button className={"btn-withdraw"} onClick={this.handleWithdraw}>Withdraw</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    balance: state.balance
});

export default connect(mapStateToProps, {deposit, withdraw})(Wallet);