import rootReducer from './index.js';

describe("Root reducer", ()=>{
    it("initializes default state", ()=>{
        expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}})
    });
});