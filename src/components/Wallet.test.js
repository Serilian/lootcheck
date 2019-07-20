import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe("Given a wallet component", ()=>{
    let wallet;
    let MOCK_BALANCE = 20;

    beforeEach(()=>{
     const props = {balance: MOCK_BALANCE};
      wallet  = shallow(<Wallet {...props}/>);
    });

    it('Then it renders correctly', ()=>{
        expect(wallet.debug()).toMatchSnapshot();
    });
    it('Then displays the balance from props', ()=>{
        expect(wallet.find('.balance').text()).toEqual(`Balance is: ${MOCK_BALANCE}`)
    });

});