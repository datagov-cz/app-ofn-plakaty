(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216214"],{c0c4:function(e,t,n){
/*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var t=Object.hasOwnProperty,n=Object.setPrototypeOf,r=Object.isFrozen,o=Object.keys,i=Object.freeze,a=Object.seal,l=Object.create,c="undefined"!==typeof Reflect&&Reflect,s=c.apply,u=c.construct;s||(s=function(e,t,n){return e.apply(t,n)}),i||(i=function(e){return e}),a||(a=function(e){return e}),u||(u=function(t,n){return new(Function.prototype.bind.apply(t,[null].concat(e(n))))});var d=w(Array.prototype.forEach),p=w(Array.prototype.indexOf),f=w(Array.prototype.join),m=w(Array.prototype.pop),y=w(Array.prototype.push),h=w(Array.prototype.slice),g=w(String.prototype.toLowerCase),v=w(String.prototype.match),b=w(String.prototype.replace),T=w(String.prototype.indexOf),A=w(String.prototype.trim),x=w(RegExp.prototype.test),S=L(RegExp),k=L(TypeError);function w(e){return function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return s(e,t,r)}}function L(e){return function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return u(e,n)}}function _(e,t){n&&n(e,null);var o=t.length;while(o--){var i=t[o];if("string"===typeof i){var a=g(i);a!==i&&(r(t)||(t[o]=a),i=a)}e[i]=!0}return e}function E(e){var n=l(null),r=void 0;for(r in e)s(t,e,[r])&&(n[r]=e[r]);return n}var M=i(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=i(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),N=i(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),R=i(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),O=i(["#text"]),F=i(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns"]),H=i(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),C=i(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),z=i(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),I=a(/\{\{[\s\S]*|[\s\S]*\}\}/gm),U=a(/<%[\s\S]*|[\s\S]*%>/gm),j=a(/^data-[\-\w.\u00B7-\uFFFF]/),P=a(/^aria-[\-\w]+$/),G=a(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),W=a(/^(?:\w+script|data):/i),B=a(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),q="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function K(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var V=function(){return"undefined"===typeof window?null:window},Y=function(e,t){if("object"!==("undefined"===typeof e?"undefined":q(e))||"function"!==typeof e.createPolicy)return null;var n=null,r="data-tt-policy-suffix";t.currentScript&&t.currentScript.hasAttribute(r)&&(n=t.currentScript.getAttribute(r));var o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V(),t=function(e){return J(e)};if(t.version="2.0.14",t.removed=[],!e||!e.document||9!==e.document.nodeType)return t.isSupported=!1,t;var n=e.document,r=!1,a=e.document,l=e.DocumentFragment,c=e.HTMLTemplateElement,s=e.Node,u=e.NodeFilter,w=e.NamedNodeMap,L=void 0===w?e.NamedNodeMap||e.MozNamedAttrMap:w,X=e.Text,$=e.Comment,Q=e.DOMParser,Z=e.trustedTypes;if("function"===typeof c){var ee=a.createElement("template");ee.content&&ee.content.ownerDocument&&(a=ee.content.ownerDocument)}var te=Y(Z,n),ne=te&&He?te.createHTML(""):"",re=a,oe=re.implementation,ie=re.createNodeIterator,ae=re.getElementsByTagName,le=re.createDocumentFragment,ce=n.importNode,se=E(a).documentMode?a.documentMode:{},ue={};t.isSupported=oe&&"undefined"!==typeof oe.createHTMLDocument&&9!==se;var de=I,pe=U,fe=j,me=P,ye=W,he=B,ge=G,ve=null,be=_({},[].concat(K(M),K(D),K(N),K(R),K(O))),Te=null,Ae=_({},[].concat(K(F),K(H),K(C),K(z))),xe=null,Se=null,ke=!0,we=!0,Le=!1,_e=!1,Ee=!1,Me=!1,De=!1,Ne=!1,Re=!1,Oe=!1,Fe=!1,He=!1,Ce=!0,ze=!0,Ie=!1,Ue={},je=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","plaintext","script","style","svg","template","thead","title","video","xmp"]),Pe=null,Ge=_({},["audio","video","img","source","image","track"]),We=null,Be=_({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),qe=null,Ke=a.createElement("form"),Ve=function(e){qe&&qe===e||(e&&"object"===("undefined"===typeof e?"undefined":q(e))||(e={}),e=E(e),ve="ALLOWED_TAGS"in e?_({},e.ALLOWED_TAGS):be,Te="ALLOWED_ATTR"in e?_({},e.ALLOWED_ATTR):Ae,We="ADD_URI_SAFE_ATTR"in e?_(E(Be),e.ADD_URI_SAFE_ATTR):Be,Pe="ADD_DATA_URI_TAGS"in e?_(E(Ge),e.ADD_DATA_URI_TAGS):Ge,xe="FORBID_TAGS"in e?_({},e.FORBID_TAGS):{},Se="FORBID_ATTR"in e?_({},e.FORBID_ATTR):{},Ue="USE_PROFILES"in e&&e.USE_PROFILES,ke=!1!==e.ALLOW_ARIA_ATTR,we=!1!==e.ALLOW_DATA_ATTR,Le=e.ALLOW_UNKNOWN_PROTOCOLS||!1,_e=e.SAFE_FOR_JQUERY||!1,Ee=e.SAFE_FOR_TEMPLATES||!1,Me=e.WHOLE_DOCUMENT||!1,Re=e.RETURN_DOM||!1,Oe=e.RETURN_DOM_FRAGMENT||!1,Fe=e.RETURN_DOM_IMPORT||!1,He=e.RETURN_TRUSTED_TYPE||!1,Ne=e.FORCE_BODY||!1,Ce=!1!==e.SANITIZE_DOM,ze=!1!==e.KEEP_CONTENT,Ie=e.IN_PLACE||!1,ge=e.ALLOWED_URI_REGEXP||ge,Ee&&(we=!1),Oe&&(Re=!0),Ue&&(ve=_({},[].concat(K(O))),Te=[],!0===Ue.html&&(_(ve,M),_(Te,F)),!0===Ue.svg&&(_(ve,D),_(Te,H),_(Te,z)),!0===Ue.svgFilters&&(_(ve,N),_(Te,H),_(Te,z)),!0===Ue.mathMl&&(_(ve,R),_(Te,C),_(Te,z))),e.ADD_TAGS&&(ve===be&&(ve=E(ve)),_(ve,e.ADD_TAGS)),e.ADD_ATTR&&(Te===Ae&&(Te=E(Te)),_(Te,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&_(We,e.ADD_URI_SAFE_ATTR),ze&&(ve["#text"]=!0),Me&&_(ve,["html","head","body"]),ve.table&&(_(ve,["tbody"]),delete xe.tbody),i&&i(e),qe=e)},Ye=function(e){y(t.removed,{element:e});try{e.parentNode.removeChild(e)}catch(n){e.outerHTML=ne}},Je=function(e,n){try{y(t.removed,{attribute:n.getAttributeNode(e),from:n})}catch(r){y(t.removed,{attribute:null,from:n})}n.removeAttribute(e)},Xe=function(e){var t=void 0,n=void 0;if(Ne)e="<remove></remove>"+e;else{var o=v(e,/^[\r\n\t ]+/);n=o&&o[0]}var i=te?te.createHTML(e):e;try{t=(new Q).parseFromString(i,"text/html")}catch(s){}if(r&&_(xe,["title"]),!t||!t.documentElement){t=oe.createHTMLDocument("");var l=t,c=l.body;c.parentNode.removeChild(c.parentNode.firstElementChild),c.outerHTML=i}return e&&n&&t.body.insertBefore(a.createTextNode(n),t.body.childNodes[0]||null),ae.call(t,Me?"html":"body")[0]};t.isSupported&&function(){try{var e=Xe("<x/><title>&lt;/title&gt;&lt;img&gt;");x(/<\/title/,e.querySelector("title").innerHTML)&&(r=!0)}catch(t){}}();var $e=function(e){return ie.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,(function(){return u.FILTER_ACCEPT}),!1)},Qe=function(e){return!(e instanceof X||e instanceof $)&&!("string"===typeof e.nodeName&&"string"===typeof e.textContent&&"function"===typeof e.removeChild&&e.attributes instanceof L&&"function"===typeof e.removeAttribute&&"function"===typeof e.setAttribute&&"string"===typeof e.namespaceURI)},Ze=function(e){return"object"===("undefined"===typeof s?"undefined":q(s))?e instanceof s:e&&"object"===("undefined"===typeof e?"undefined":q(e))&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName},et=function(e,n,r){ue[e]&&d(ue[e],(function(e){e.call(t,n,r,qe)}))},tt=function(e){var n=void 0;if(et("beforeSanitizeElements",e,null),Qe(e))return Ye(e),!0;if(v(e.nodeName,/[\u0080-\uFFFF]/))return Ye(e),!0;var r=g(e.nodeName);if(et("uponSanitizeElement",e,{tagName:r,allowedTags:ve}),("svg"===r||"math"===r)&&0!==e.querySelectorAll("p, br").length)return Ye(e),!0;if(!ve[r]||xe[r]){if(ze&&!je[r]&&"function"===typeof e.insertAdjacentHTML)try{var o=e.innerHTML;e.insertAdjacentHTML("AfterEnd",te?te.createHTML(o):o)}catch(i){}return Ye(e),!0}return"noscript"===r&&x(/<\/noscript/i,e.innerHTML)||"noembed"===r&&x(/<\/noembed/i,e.innerHTML)?(Ye(e),!0):(!_e||e.firstElementChild||e.content&&e.content.firstElementChild||!x(/</g,e.textContent)||(y(t.removed,{element:e.cloneNode()}),e.innerHTML?e.innerHTML=b(e.innerHTML,/</g,"&lt;"):e.innerHTML=b(e.textContent,/</g,"&lt;")),Ee&&3===e.nodeType&&(n=e.textContent,n=b(n,de," "),n=b(n,pe," "),e.textContent!==n&&(y(t.removed,{element:e.cloneNode()}),e.textContent=n)),et("afterSanitizeElements",e,null),!1)},nt=function(e,t,n){if(Ce&&("id"===t||"name"===t)&&(n in a||n in Ke))return!1;if(we&&x(fe,t));else if(ke&&x(me,t));else{if(!Te[t]||Se[t])return!1;if(We[t]);else if(x(ge,b(n,he,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==T(n,"data:")||!Pe[e]){if(Le&&!x(ye,b(n,he,"")));else if(n)return!1}else;}return!0},rt=function(e){var n=void 0,r=void 0,i=void 0,a=void 0,l=void 0;et("beforeSanitizeAttributes",e,null);var c=e.attributes;if(c){var s={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Te};l=c.length;while(l--){n=c[l];var u=n,d=u.name,y=u.namespaceURI;if(r=A(n.value),i=g(d),s.attrName=i,s.attrValue=r,s.keepAttr=!0,s.forceKeepAttr=void 0,et("uponSanitizeAttribute",e,s),r=s.attrValue,!s.forceKeepAttr){if("name"===i&&"IMG"===e.nodeName&&c.id)a=c.id,c=h(c,[]),Je("id",e),Je(d,e),p(c,a)>l&&e.setAttribute("id",a.value);else{if("INPUT"===e.nodeName&&"type"===i&&"file"===r&&s.keepAttr&&(Te[i]||!Se[i]))continue;"id"===d&&e.setAttribute(d,""),Je(d,e)}if(s.keepAttr)if(_e&&x(/\/>/i,r))Je(d,e);else if(x(/svg|math/i,e.namespaceURI)&&x(S("</("+f(o(je),"|")+")","i"),r))Je(d,e);else{Ee&&(r=b(r,de," "),r=b(r,pe," "));var v=e.nodeName.toLowerCase();if(nt(v,i,r))try{y?e.setAttributeNS(y,d,r):e.setAttribute(d,r),m(t.removed)}catch(T){}}}}et("afterSanitizeAttributes",e,null)}},ot=function e(t){var n=void 0,r=$e(t);et("beforeSanitizeShadowDOM",t,null);while(n=r.nextNode())et("uponSanitizeShadowNode",n,null),tt(n)||(n.content instanceof l&&e(n.content),rt(n));et("afterSanitizeShadowDOM",t,null)};return t.sanitize=function(r,o){var i=void 0,a=void 0,c=void 0,u=void 0,d=void 0;if(r||(r="\x3c!--\x3e"),"string"!==typeof r&&!Ze(r)){if("function"!==typeof r.toString)throw k("toString is not a function");if(r=r.toString(),"string"!==typeof r)throw k("dirty is not a string, aborting")}if(!t.isSupported){if("object"===q(e.toStaticHTML)||"function"===typeof e.toStaticHTML){if("string"===typeof r)return e.toStaticHTML(r);if(Ze(r))return e.toStaticHTML(r.outerHTML)}return r}if(De||Ve(o),t.removed=[],"string"===typeof r&&(Ie=!1),Ie);else if(r instanceof s)i=Xe("\x3c!--\x3e"),a=i.ownerDocument.importNode(r,!0),1===a.nodeType&&"BODY"===a.nodeName||"HTML"===a.nodeName?i=a:i.appendChild(a);else{if(!Re&&!Ee&&!Me&&-1===r.indexOf("<"))return te&&He?te.createHTML(r):r;if(i=Xe(r),!i)return Re?null:ne}i&&Ne&&Ye(i.firstChild);var p=$e(Ie?r:i);while(c=p.nextNode())3===c.nodeType&&c===u||tt(c)||(c.content instanceof l&&ot(c.content),rt(c),u=c);if(u=null,Ie)return r;if(Re){if(Oe){d=le.call(i.ownerDocument);while(i.firstChild)d.appendChild(i.firstChild)}else d=i;return Fe&&(d=ce.call(n,d,!0)),d}var f=Me?i.outerHTML:i.innerHTML;return Ee&&(f=b(f,de," "),f=b(f,pe," ")),te&&He?te.createHTML(f):f},t.setConfig=function(e){Ve(e),De=!0},t.clearConfig=function(){qe=null,De=!1},t.isValidAttribute=function(e,t,n){qe||Ve({});var r=g(e),o=g(t);return nt(r,o,n)},t.addHook=function(e,t){"function"===typeof t&&(ue[e]=ue[e]||[],y(ue[e],t))},t.removeHook=function(e){ue[e]&&m(ue[e])},t.removeHooks=function(e){ue[e]&&(ue[e]=[])},t.removeAllHooks=function(){ue={}},t}var X=J();return X}))}}]);
//# sourceMappingURL=chunk-2d216214.f98ebe23.js.map