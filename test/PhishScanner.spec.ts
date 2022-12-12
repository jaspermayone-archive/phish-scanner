import { PhishScanner } from '../src/index';
import { expect } from 'chai'
import { keys } from '../src/types/keys';

// a test suite that tests the PhishScanner function, that when passed "google.com", returns false
describe('PhishScanner', () => {
    it('should return false when passed "google.com"', async () => {
        const keys: keys = {};
        const result = await PhishScanner('google.com', keys);
        expect(result).to.equal(false);
    });
    it('should return true when passed "steamcommunityl.com"', async () => {
        const keys: keys = {};
        const result = await PhishScanner('steamcommunityl.com', keys);
        expect(result).to.equal(true);
    });
});

// a test suite that checks to make sure the keys type has the correct properties
describe('keys', () => {
    it('should have the correct properties', () => {
        const keys: keys = {
            googleSafeBrowsing: 'test',
            phisherman: 'test',
            urlScan: 'test',
            virusTotal: 'test'
        };
        expect(keys).to.have.property('googleSafeBrowsing');
        expect(keys).to.have.property('phisherman');
        expect(keys).to.have.property('urlScan');
        expect(keys).to.have.property('virusTotal');
    });
});
