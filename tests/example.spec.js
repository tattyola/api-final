import { expect } from 'chai';

describe('operation with numbers', function (){
    it('addition works correctly', function (){
        const a = 5;
        const b = 7;
        const result = a + b;
        expect(result, 'result should equal 12').to.eq(12);
    })
})
