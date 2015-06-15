var chai = require('chai');
var should = chai.should();
var expect = chai.expect;


var recursive_factorial = require('../js/recursive_factorial');

describe('recursive_factorial function', function() {


  it('recursive_factorial is a function', function() {

    recursive_factorial.should.be.a('function');
  });

  it('should return an error string if input is not a valid number', function() {

    recursive_factorial('').should.equal('Invalid input.');
    recursive_factorial(NaN).should.equal('Invalid input.');
    recursive_factorial({}).should.equal('Invalid input.');
  })

  var out

  it('input 4 should return 24 ', function() {

    recursive_factorial(4).should.equal(24);
  })

  it('input 3 should return 6', function() {

    recursive_factorial(3).should.equal(6);
  })


})