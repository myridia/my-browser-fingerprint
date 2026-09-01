# AGENTS.md — my-browser-fingerprint

## What this is
A JavaScript module (ESM) that generates a unique browser fingerprint hash from configurable browser spec parameters (WebGL, canvas, hardware, user agent, etc.). Fork of get-browser-fingerprint.

## Stack
- JavaScript (ES module, browser)
- WebGL / Canvas APIs

## Run
```bash
import my_browser_fingerprint from 'my-browser-fingerprint/src/index.js';
var fingerprint = my_browser_fingerprint({ debug:false, myspec:['userAgent','platform',...] });
```

## Structure
- `src/index.js` — module implementation (getWebglID, getWebglInfo, get_hash)
- `package.json` — npm metadata (type: module)

## Conventions
- No comments in code unless asked.
- Verify: `node --check src/index.js`.
