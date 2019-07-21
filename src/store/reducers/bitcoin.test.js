import React from 'react';
import {FETCH_BITCOIN} from "../actions/constants";
import bitcoinReducer from './bitcoin';

describe("Bitcoin reducer", () => {

    const bitcoinData = { bpi: 'bitcoin price index'};

    it('fetches and sets a bitcoin price', () => {
        expect(bitcoinReducer(undefined, {type: FETCH_BITCOIN, bitcoin: bitcoinData})).toEqual(bitcoinData);
    });
    it('returns initial state for unknown action', () => {
        expect(bitcoinReducer(20, {type: 'SOME_UNKNOWN_TYPE', payload: undefined})).toEqual(20);
    });

});