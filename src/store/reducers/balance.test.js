import React from 'react';
import {DEPOSIT_INTO_ACCOUNT, SET_BALANCE, WITHDRAW_FROM_ACCOUNT} from '../actions/constants';
import balanceReducer from './balance';

describe("balanceReducer", () => {
    it("set a balance", () => {
        const balance = 10;
        expect(balanceReducer(undefined, {type: SET_BALANCE, balance})).toEqual(balance);
    });
    it('deposits into account', () => {
        const addedValue = 10;
        expect(balanceReducer(0, {type: DEPOSIT_INTO_ACCOUNT, deposit: addedValue})).toEqual(10);
    });

    it('withdraws from account', ()=>{
        const valueToRemove = 10;
        expect(balanceReducer(20, {type: WITHDRAW_FROM_ACCOUNT, amount: valueToRemove})).toEqual(10);
    })
});