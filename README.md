<img src="my-browser-fingerprint.svg" alt="my-browser-fingerprint" width="120">
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
<a name="module_my-browser-fingerprint"></a>

## my-browser-fingerprint
GPL licenses                                                                                                                    
A module for my-browser-fingerprint


* [my-browser-fingerprint](#module_my-browser-fingerprint)
    * [exports.getWebglID](#exp_module_my-browser-fingerprint--exports.getWebglID) ⇒ <code>objet</code> ⏏
    * [exports.getWebglInfo](#exp_module_my-browser-fingerprint--exports.getWebglInfo) ⇒ <code>objet</code> ⏏
    * [exports.get_hash](#exp_module_my-browser-fingerprint--exports.get_hash) ⇒ <code>integer</code> ⏏

<a name="exp_module_my-browser-fingerprint--exports.getWebglID"></a>

### exports.getWebglID ⇒ <code>objet</code> ⏏
Function what generates your WebglID

**Kind**: Exported constant  
**Returns**: <code>objet</code> - getWeblID  

| Type | Description |
| --- | --- |
| <code>boolean</code> | debug - optional |

**Example**  
```js
const webgl = getWebglID(debug);
```
<a name="exp_module_my-browser-fingerprint--exports.getWebglInfo"></a>

### exports.getWebglInfo ⇒ <code>objet</code> ⏏
Function what generates your getWebglInfo

**Kind**: Exported constant  
**Returns**: <code>objet</code> - WebglID  

| Type | Description |
| --- | --- |
| <code>boolean</code> | debug - optional |

**Example**  
```js
const webglinfo = getWebglInfo(debug);
```
<a name="exp_module_my-browser-fingerprint--exports.get_hash"></a>

### exports.get\_hash ⇒ <code>integer</code> ⏏
Function what generates the final fingerprint Hash

**Kind**: Exported constant  
**Returns**: <code>integer</code> - returns a positive unique number  

| Type | Description |
| --- | --- |
| <code>object</code> | key |

**Example**  
```js
const myfingerprinthash = get_hash(debug);
```
