import React from 'react';
import {shallow} from 'enzyme';
import {Wallet} from './Wallet';

describe("Given a wallet component", () => {
    let wallet;
    let MOCK_BALANCE = 20;
    const mockDeposit = jest.fn();
    const mockWithdraw = jest.fn();

    const props = {balance: MOCK_BALANCE, deposit: mockDeposit, withdraw: mockWithdraw};

    beforeEach(() => {

        wallet = shallow(<Wallet {...props}/>);
    });

    it('Then it renders correctly', () => {
        expect(wallet.debug()).toMatchSnapshot();
    });

    it('Then displays the balance from props', () => {
        expect(wallet.find('.balance').text()).toEqual(`Balance is: ${MOCK_BALANCE}`)
    });

    it('initializes with 0 balance', ()=>{
        expect(wallet.state().balance).toBe(0);
    });

    it("creates input to deposit into or withdraw from balance", () => {
        expect(wallet.find(".input-wallet").exists()).toBe(true);
    });


    describe("When user types into the wallet input", () => {

        const userBalance = '25';

        beforeEach(() => {
            wallet.find('.input-wallet').simulate('change', {target: {value: userBalance}});
        });

        it('updates the local balance in `state` and converts it to number', () => {
            expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));

        });

        describe("And user makes the deposit", () => {
            beforeEach(() => {
                wallet.find('.btn-deposit').simulate('click');
            });

            it('dispatches `deposit()` function from props with local balance', () => {
                expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });

        });

        describe("And user makes the withdraw", () => {
            beforeEach(() => {
                wallet.find('.btn-withdraw').simulate('click');
            });

            it('dispatches `withdraw()` function from props with local balance', () => {
                expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10));
            });

        })


    });


});