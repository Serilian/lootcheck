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

``});