import React from 'react';
import App from './App.js';
import {shallow} from 'enzyme';


describe("Given App component", () => {
    let app;

    beforeEach(() => {
        app = shallow(<App/>);
    });

    it('renders properly', () => {
        expect(app.debug()).toMatchSnapshot();
    });

    it("contains a connected Wallet component", () => {
        expect(app.find("Connect(Wallet)").exists()).toBe(true);
    });

    it('contains a Loot component', () => {
        expect(app.find("Connect(Loot)").exists()).toBe(true);
    });
    it("displays a link to coindesk", () => {
        expect(app.find('.coin-link').text()).toEqual("Powered by CoinDesk");
        expect(app.find('a').props().href).toBe('https://www.coindesk.com/price');
    });

});