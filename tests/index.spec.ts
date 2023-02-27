import 'mocha';
import { assert } from 'chai';

import checkDomain from '../src/index';
import npmPackage from '../src/index';

describe('Phish-Scanner NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a checkDomain property', () => {
    assert.property(npmPackage, 'checkDomain');
  });
});

describe('Check Domain Function', () => {
  it('should be a function', () => {
    assert.isFunction(checkDomain);
  });

  it('should return false for "google.com" ', () => {
    const expected = 'true';
    const actual = checkDomain("google.com");
    assert.equal(actual, expected);
  });

  it('should return true for "steamcomnunitly.pp.ru" ', () => {
    const expected = 'false';
    const actual = checkDomain("steamcomnunitly.pp.ru");
    assert.equal(actual, expected);
  });
});