var assert=require('chai').assert;

describe('Phase 1 testing', () => {
    before(()=>{
        console.log("Before is called");
    });
    beforeEach(()=>{
        console.log("beforeEach for executed case is called");
    });
    it('should return -1 when the value is not present', () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
    });
    it('another case', () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
    });
    // it.only('only this case will be tested', () => {
    //     assert.equal(-1, [1, 2, 3].indexOf(5));
    // });
    it.skip('this case will be skipped for testing', () => {
        assert.equal(-1, [1, 2, 3].indexOf(5));
    });
   
    it('pending...');
    afterEach(()=>{
        console.log("after each is called for executed case")
    });
    after(()=>{
        console.log("after is called")
    });
});