import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Wallet extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {balance} = this.props;

        return (
            <div>
                <h2>Wallet</h2>
                <h4 className={'balance'}>Balance is: {balance}</h4>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    balance: state.balance
});

export default connect(mapStateToProps)(Wallet);