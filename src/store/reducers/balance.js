import {DEPOSIT_INTO_ACCOUNT, SET_BALANCE, WITHDRAW_FROM_ACCOUNT} from "../actions/constants";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case SET_BALANCE:
            return action.balance;
        case DEPOSIT_INTO_ACCOUNT:
            return state + action.deposit;
        case WITHDRAW_FROM_ACCOUNT:
            return state - action.amount;
        default:
            return state;
    }
};

export default reducer;