var assert = require('assert');
var toRoman = require('./../index.js').toRoman;

var literals = [ 1, 4, 8, 15, 16, 23, 42, 84, 100, 256, 512, 1024, 2048, 3999 ];
var objects = literals.map(function (x) { return new Number(x); });
var str_lit = literals.map(function (x) { return x.toString(); });
var str_obj = literals.map(function (x) { return new String(x); });
var answers = [ 'I', 'IV', 'VIII', 'XV', 'XVI', 'XXIII', 'XLII', 'LXXXIV', 'C',
  'CCLVI', 'DXII', 'MXXIV', 'MMXLVIII', 'MMMCMXCIX' ];


var bad_literals = [ {}, [], 'foo', function () {} ];
var bad_objects = [ new Object, new Array, new String('foo'), new Function() ];
var neg_literals = literals.map(function (x) { return x * -1; });

function makeThrow (x) {
  assert.throws(function () { toRoman(x)});
}

function checkResults (x, i) {
  assert.strictEqual(toRoman(x), answers[i]);
}

describe('toRoman function:', function () {
  describe('Checking good inputs', function () {
    it('Accepts literals numbers', function () {
      literals.forEach(toRoman);
    });
    it('Accepts objects numbers', function () {
      objects.forEach(toRoman);
    });
    it('Accepts string literal numbers', function () {
      str_lit.forEach(toRoman);
    });
    it('Accepts string object numbers', function () {
      str_obj.forEach(toRoman);
    });
  });
  describe('Checking wrong inputs', function () {
    it('Throws on non-numbers literals', function () {
      bad_literals.forEach(makeThrow);
    });
    it('Throws on non-number objects', function () {
      bad_objects.forEach(makeThrow);
    });
    it('Throws on NaN', function () {
      makeThrow(NaN);
    });
    it('Throws on negative numbers', function () {
      neg_literals.forEach(makeThrow);
    });
    it('Throws on numbers over 3999', function () {
      [ 4000, 4242 ].forEach(makeThrow)
    });
  });
  describe('Checking results', function () {
    it('Works with a 0', function () {
      assert.strictEqual(toRoman(0), 'nulla');
      assert.strictEqual(toRoman(new Number(0)), 'nulla');
    })
    it('Works with literals', function () {
      literals.forEach(checkResults);
    });
    it('Works with objects', function () {
      objects.forEach(checkResults);
    });
    it('Works with string literal numbers', function () {
      str_lit.forEach(checkResults);
    });
    it('Works with string object numbers', function () {
      str_obj.forEach(checkResults);
    });
  });
});
