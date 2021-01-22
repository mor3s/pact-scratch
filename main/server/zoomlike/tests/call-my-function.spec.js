const callMyFunction = require('../call-my-function.js');

describe('callMyFunction function', () => {
    it('calls the passed function', () => {
        const callback = jest.fn();

        callMyFunction(callback);

        expect(callback).toHaveBeenCalledTimes(1);
    });
});