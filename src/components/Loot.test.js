import React from "react";
import {shallow, mount} from "enzyme";
import {Loot} from './Loot';

describe("Given wallet component", () => {
    const MOCK_BALANCE = 10;
    const MOCK_BITCOIN_DATA = {};


    let props = {balance: MOCK_BALANCE, bitcoin: MOCK_BITCOIN_DATA};

    let loot = shallow(<Loot {...props}/>);

    it("Then it renders correctly", () => {
        expect(loot.debug()).toMatchSnapshot();
    });

    describe("When mounted", () => {
        let mockFetchBitcoin = jest.fn();
        beforeEach(() => {
            props.fetchBitcoin = mockFetchBitcoin;
            loot = mount(<Loot {...props}/>);
        });

        it('dispatches `fetchBitcoin()` action', () => {
            expect(mockFetchBitcoin).toHaveBeenCalled();
        });

    });

    describe("when there are valid bitcoin props", () => {
        beforeEach(() => {
            props = {balance: 10, bitcoin: {bpi: {USD: {rate: `1,000`}}}};
            loot = shallow(<Loot {...props} />);
        });

        it('displays the value of bitcoin balance', () => {
            expect(loot.find(".bitcoin-balance").text()).toEqual(`Bitcoin Balance: 0.01`);
        });
    });


});