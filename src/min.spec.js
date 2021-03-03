const min = require('./min');

describe('Min', () => {

    it('Min of [] is undefined', () => {
        expect(min([])).toEqual(undefined);
    });
    it('Min of [3,6,31,2] is 2', () => {
        expect(min([3,6,31,2])).toEqual(2);
    });
    it('Max of [-3,-6,-31,-2] is -31', () => {
        expect(min([-3,-6,-31,-2])).toEqual(-31);
    });

})