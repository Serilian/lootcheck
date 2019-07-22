import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchBitcoin} from "../store/actions/bitcoin";

export class Loot extends Component {

    componentDidMount() {
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const {bitcoin} = this.props;
        if (!bitcoin.bpi) {
            return '';
        }

        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);

    }

    render() {
        return (
            <div>
                <h3 className={'bitcoin-balance'}>Bitcoin Balance: {this.computeBitcoin()}</h3>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    balance: state.balance,
    bitcoin: state.bitcoin
});

export default connect(mapStateToProps, {fetchBitcoin})(Loot);