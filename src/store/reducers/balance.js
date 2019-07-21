import {DEPOSIT_INTO_ACCOUNT, SET_BALANCE, WITHDRAW_FROM_ACCOUNT} from "../actions/constants";
import {read_cookie, bake_cookie} from 'sfcookies';

const BALANCE_COOKIE = 'BALANCE_COOKIE';

const reducer = (state = 0, action) => {

    let balance;

    switch (action.type) {
        case SET_BALANCE:
            balance = action.balance;
            break;
        case DEPOSIT_INTO_ACCOUNT:
            balance = state + action.deposit;
            break;
        case WITHDRAW_FROM_ACCOUNT:
            balance = state - action.amount;
            break;
        default:
            balance = parseInt(read_cookie(BALANCE_COOKIE, 10)) || state;
    }

    bake_cookie(BALANCE_COOKIE, balance);

    return balance;

};

export default reducer;