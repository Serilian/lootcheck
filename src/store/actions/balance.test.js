import React from 'react';
import * as constants from './constants';
import * as actions from './balance.js';

it("creates an action to set a balance", () => {
    const balance = 0;
    const expectedAction = {type: constants.SET_BALANCE, balance};
    expect(actions.setBalance(0)).toEqual(expectedAction);
});

it("creates an action to deposit into account", () => {
    const addedValue = 10;
    const expectedAction = {type: constants.DEPOSIT_INTO_ACCOUNT, deposit: addedValue};
    expect(actions.deposit(addedValue)).toEqual(expectedAction);
});

it('creates an action to withdraw from account', () => {
    const valueToRemove = 10;
    const expectedAction = {type: constants.WITHDRAW_FROM_ACCOUNT, amount: valueToRemove};

    expect(actions.withdraw(valueToRemove)).toEqual(expectedAction);

});

