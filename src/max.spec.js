const max = require('./max');

describe('Max', () => {

    it('Max of [] is undefined', () => {
        expect(max([])).toEqual(undefined);
    });
    it('Max of [3,6,31,2] is null', () => {
        expect(max([3,6,31,2])).toEqual(31);
    });
    it('Max of [-3,-6,-31,-2] is null', () => {
        expect(max([-3,-6,-31,-2])).toEqual(-2);
    });

})