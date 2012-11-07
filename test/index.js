
var min = require('..');

var tobi = { name: { first: 'tobi' }, age: 2, role: { name: 'admin' } };
var loki = { name: { first: 'loki' }, age: 1 };
var jane = { name: { first: 'jane' }, age: 8 };

describe('min(arr, fn)', function(){
  it('should return the min value', function(){
    var arr = [1,2,3];
    arr = min(arr, function(n){ return n * 2 });
    arr.should.eql(2);
  })

  it('should support property strings', function(){
    var users = [tobi, loki, jane];
    var arr = min(users, 'age');
    arr.should.eql(1);
  })
})

describe('min(arr)', function(){
  it('should return the min value', function(){
    min([2,5,1]).should.equal(1);
  })
})