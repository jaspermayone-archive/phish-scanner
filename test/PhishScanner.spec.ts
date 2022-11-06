import { PhishScanner } from '../src/index';
import { expect } from 'chai'

// a test suite that tests the PhishScanner function, that when passed "https://www.google.com", returns false
describe('PhishScanner', () => {
    it('should return false when passed "https://www.google.com"', async () => {
        const result = await PhishScanner('https://www.google.com');
        expect(result).to.equal(false);
    });
    it('should return true when passed "steamcommunityl.com"', async () => {
        const result = await PhishScanner('steamcommunityl.com');
        expect(result).to.equal(true);
    });
});