/**                                                                                                                               
* GPL licenses                                                                                                                    
* A module for my-browser-fingerprint
* @module my-browser-fingerprint                                                                                             
*/
'use strict';


/**
* Load the Module
@param {boolean} - debug - optional
@param {array} - myspec list of specs to generate a unique hash
@returns {objet}
@example                                                                                                                          
import my_browser_fingerprint from '../node_modules/my-browser-fingerprint/src/index.js';
var fingerprint =my_browser_fingerprint({debug:false,myspec:['appCodeName',
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
*/
const my_browser_fingerprint = ({ debug = false
				  , myspec = [
				      'appCodeName',
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
				      'webglInfo',
				  ]				  

				} = {}) => {


  const spec = [];
  if(myspec.includes('appCodeName'))
  {
    spec.push(window.navigator.appCodeName);
  }
  if(myspec.includes('appName'))
  {
    spec.push(window.navigator.appName);
  }
  if(myspec.includes('appVersion'))
  {
    spec.push(window.navigator.appVersion);
  }
  if(myspec.includes('cookieEnabled'))
  {
    spec.push(window.navigator.cookieEnabled);
  }
  if(myspec.includes('deviceMemory'))
  {
    spec.push(window.navigator.deviceMemory);
  }
  if(myspec.includes('doNotTrack'))
  {
    spec.push(window.navigator.doNotTrack);
  }
  if(myspec.includes('hardwareConcurrency'))
  {
    spec.push(window.navigator.hardwareConcurrency);
  }
  if(myspec.includes('language'))
  {
    spec.push(window.navigator.language);
  }
  if(myspec.includes('maxTouchPoints'))
  {
    spec.push(window.navigator.maxTouchPoints);
  }
  if(myspec.includes('platform'))
  {
    spec.push(window.navigator.platform);
  }
  if(myspec.includes('language'))
  {
    spec.push(window.navigator.language);
  }
  if(myspec.includes('product'))
  {
    spec.push(window.navigator.product);
  }
  if(myspec.includes('productSub'))
  {
    spec.push(window.navigator.productSub);
  }
  if(myspec.includes('userAgent'))
  {
    spec.push(window.navigator.userAgent);
  }
  if(myspec.includes('vendor'))
  {
    spec.push(window.navigator.vendor);
  }				    				    				    				    				    				    
  if(myspec.includes('vendorSub'))
  {
    spec.push(window.navigator.vendorSub);
  }

  if(myspec.includes('webgl'))
  {
    const webgl = getWebglID(debug);
    spec.push(webgl);
  }

  if(myspec.includes('webgl'))
  {
   const webgl_info = getWebglInfo(debug);
    spec.push(webgl_info);
  }				    				    

  if(myspec.includes('colorDepth'))
  {
    spec.push(window.screen.colorDepth);
  }				    				    

  if(myspec.includes('colorDepth'))
  {
    spec.push(window.screen.colorDepth);
  }

  if(myspec.includes('touchSupport'))
  {
    const touch_support = 'ontouchstart' in window;					
    spec.push(touch_support);
  }				    				    				    

  const data =JSON.stringify({spec});

  const datastring = JSON.stringify(data, null, 4);

  if (debug) console.log('fingerprint data', datastring);

  const result = get_hash(datastring);
  return result;
};


/**
* Function what generates your WebglID
@alias module:my-browser-fingerprint
@param {boolean} - debug - optional
@returns {objet} getWeblID
@example
const webgl = getWebglID(debug);
*/
export const getWebglID = (debug) => {
  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('webgl');
    canvas.width = 256;
    canvas.height = 128;

    const f =
      'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}';
    const g = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}';
    const h = ctx.createBuffer();

    ctx.bindBuffer(ctx.ARRAY_BUFFER, h);

    const i = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.7321, 0]);

    ctx.bufferData(ctx.ARRAY_BUFFER, i, ctx.STATIC_DRAW), (h.itemSize = 3), (h.numItems = 3);

    const j = ctx.createProgram();
    const k = ctx.createShader(ctx.VERTEX_SHADER);

    ctx.shaderSource(k, f);
    ctx.compileShader(k);

    const l = ctx.createShader(ctx.FRAGMENT_SHADER);

    ctx.shaderSource(l, g);
    ctx.compileShader(l);
    ctx.attachShader(j, k);
    ctx.attachShader(j, l);
    ctx.linkProgram(j);
    ctx.useProgram(j);

    j.vertexPosAttrib = ctx.getAttribLocation(j, 'attrVertex');
    j.offsetUniform = ctx.getUniformLocation(j, 'uniformOffset');

    ctx.enableVertexAttribArray(j.vertexPosArray);
    ctx.vertexAttribPointer(j.vertexPosAttrib, h.itemSize, ctx.FLOAT, !1, 0, 0);
    ctx.uniform2f(j.offsetUniform, 1, 1);
    ctx.drawArrays(ctx.TRIANGLE_STRIP, 0, h.numItems);

    const n = new Uint8Array(canvas.width * canvas.height * 4);
    ctx.readPixels(0, 0, canvas.width, canvas.height, ctx.RGBA, ctx.UNSIGNED_BYTE, n);

    const result = JSON.stringify(n).replace(/,?"[0-9]+":/g, '');

    if (debug) {
      document.body.appendChild(canvas);
    } else {
      ctx.clear(ctx.COLOR_BUFFER_BIT | ctx.DEPTH_BUFFER_BIT | ctx.STENCIL_BUFFER_BIT);
    }

    return get_hash(result);
  } catch {
    return null;
  }
};

/**
* Function what generates your getWebglInfo
@alias module:my-browser-fingerprint
@param {boolean} - debug - optional
@returns {objet} WebglID
@example
const webglinfo = getWebglInfo(debug);
*/
export const getWebglInfo = () => {
  try {
    const ctx = document.createElement('canvas').getContext('webgl');

    const result = {
      VERSION: ctx.getParameter(ctx.VERSION),
      SHADING_LANGUAGE_VERSION: ctx.getParameter(ctx.SHADING_LANGUAGE_VERSION),
      VENDOR: ctx.getParameter(ctx.VENDOR),
      SUPORTED_EXTENSIONS: ctx.getSupportedExtensions(),
    };

    return result;
  } catch {
    return null;
  }
};

/**
* Function what generates the final fingerprint Hash
@alias module:my-browser-fingerprint
@param {object} - key
@returns {integer} returns a positive unique number
@example
const myfingerprinthash = get_hash(debug);
*/
export const get_hash = (key) => {
  let  hash = 0,
    i, chr;
  if (key.length === 0) return hash;
  for (i = 0; i < key.length; i++) {
    chr = key.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; 
  }
  hash = Math.abs(hash);  
  return hash;
};


window.my_browser_fingerprint = my_browser_fingerprint;
export default my_browser_fingerprint;
