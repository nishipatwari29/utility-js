const filter = require('./filter');

describe('Filter', () => {

    it('Filter of (([],x=>true) is []', () => {
        expect(filter([],x=>true)).toEqual([]);
    });
    it('Filter of ([1,2,3],x=>true) is [1,2,3]', () => {
        const func = (x) => { return true;}
        expect(filter([1,2,3],func)).toEqual([1,2,3]);
    });
    it('Filter of ([1,2,3],x=>false) is []', () => {
        expect(filter([1,2,3],x=>false)).toEqual([]);
    });
    it('Filter of ([1,2,3],x=>x>1) is [2,3]', () => {
        expect(filter([1,2,3],x=>x>1)).toEqual([2,3]);
    });
    it('Filter of ([\'a\',\'B\',\'c\',\'D\'],filterUpperCase) is [\'B\',\'D\']', () => {
        expect(filter(['a','B','c','D'],x=>x==x.toUpperCase())).toEqual(['B','D']);
    });

})