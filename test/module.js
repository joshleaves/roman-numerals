var assert = require('assert');
var module = require('./../index.js');

describe('romanNumerals Module:', function () {
  it('Got a toArabic() function', function () {
    assert.strictEqual('function', typeof module.toArabic);
  });
  it('Got a toRoman() function', function () {
    assert.strictEqual('function', typeof module.toRoman);
  });
});
