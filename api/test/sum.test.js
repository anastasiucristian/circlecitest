const sumFunction = require('../src/sum');

test('adds 1 + 2 to equal 3', sumTest);

function sumTest(){
    expect(sumFunction(1,2)).toBe(3);
}