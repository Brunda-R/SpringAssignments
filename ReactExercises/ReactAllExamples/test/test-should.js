var should = require('chai').should()
var foo = 'bar'
var beverages = { tea: ['chai', 'matcha', 'oolong'] };

describe('Equality check', () => {
    it('Equals to ', () => {
        foo.should.be.a('string')
    });
    it('Beverages property ', () => {
        beverages.should.have.property('tea').with.length(3);
    });
});