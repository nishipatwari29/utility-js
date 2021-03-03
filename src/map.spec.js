const map = require('./map');

describe('Map', () => {

    it('Map of (([1,2,3],identity) is [1,2,3]', () => {
        expect(map([1,2,3],x=>x)).toEqual([1,2,3]);
    });
    it('Map of ([],cube) is []', () => {
        expect(map([],x=>x*x*x)).toEqual([]);
    });
    it('Map of ([1,2,3],cube) is []', () => {
        expect(map([1,2,3],x=>x*x*x)).toEqual([1,8,27]);
    });

})