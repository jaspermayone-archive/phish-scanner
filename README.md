# Phish-Scanner

To use this package, please refer to the snippet below:

```typescript
import { PhishScanner } from 'phish-scanner';

const keys {}

const phishScanner = PhishScanner(link, keys);

// this returns a promise, so you can use async/await or .then()

if (phishscanner) {
    // this is a phish link, do something
}
```

This is the bare minimum with this package, and will call **several** APIs that have open endpoints. However, for the most accurate results, you should use your own API keys for some services we use. You can get these keys from the following services:

- [Phisherman](https://phisherman.gg)
- [Google Safe Browsing](https://developers.google.com/safe-browsing/v4/get-started)
- [urlscan.io](https://urlscan.io/about-api/)
- [VirusTotal](https://developers.virustotal.com/reference#url-scan)
- More to come soon!

To provide your own keys, add them to the keys object like so:

```typescript
const keys = {
  googleSafeBrowsing: "Your Google Safe Browsing key here",
  phisherman: "Your Phisherman key here",
  urlScan: "Your urlscan.io key here",
  virusTotal: "Your VirusTotal key here",
};
```

this will then automaticaly enable these services during the scan.
