import {DEPOSIT_INTO_ACCOUNT, SET_BALANCE, WITHDRAW_FROM_ACCOUNT} from "./constants";

export const setBalance = (newBalance) => {
    return {
        type: SET_BALANCE,
        balance: newBalance
    }
};

export const deposit = (addedValue) => {
    return {
        type: DEPOSIT_INTO_ACCOUNT,
        deposit: addedValue
    }
};

export const withdraw = (amountToRemove) => {
    return {
        type: WITHDRAW_FROM_ACCOUNT,
        amount: amountToRemove
    }
};