# my-browser-fingerprint

Fork from https://github.com/damianobarbati/get-browser-fingerprint

With this module, you can define your own Browser Spec parameters to generate a unique fingerprint hash.


## Usage Example (How to add to your browser:)

### HTML page:
```html
<script type="module" src="../js/fingerprint.js"></script>
```
### JavaScript file:
```js
import my_browser_fingerprint from '../node_modules/my-browser-fingerprint/src/index.js';
var fingerprint =  my_browser_fingerprint({debug:false,myspec:['appCodeName',
                                      'appName',
                                      'appVersion',
                                      'colorDepth',
                                      'cookieEnabled',
                                      'deviceMemory',
                                      'doNotTrack',
                                      'hardwareConcurrency',
                                      'language',
                                      'languages',
                                      'maxTouchPoints',
                                      'pixelDepth',
                                      'platform',
                                      'product',
                                      'productSub',
                                      'touchSupport',
                                      'userAgent',
                                      'vendor',
                                      'vendorSub',
                                      'webgl',
                                      'webglInfo']});


console.log(fingerprint);
```

Options available:
- `myspec` (default `false`): leverage only hardware info about device 
- `debug`: log data used to generate fingerprint to console and add canvas/webgl canvas to body to see rendered image (default `false`)



## Demo
- run the src/index.html file on a webserver 
