import React from 'react';
import Wallet from "./Wallet";
import Loot from './Loot';

function App() {
    return (
        <div>
            <h2>Loot Check</h2>
            <Wallet/>
            <hr/>
            <Loot/>
            <div className={'coin-link'}>Powered by <a href="https://www.coindesk.com/price" target={'_blank'}>CoinDesk</a></div>
        </div>
    );
}


export default App;