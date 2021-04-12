/* =============== popper.min.js =============== */

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=window.getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e||-1!==['HTML','BODY','#document'].indexOf(e.nodeName))return window.document.body;var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:window.document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return window.document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=window.document.documentElement,r=window.document.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return+e['border'+o+'Width'].split('px')[0]+ +e['border'+i+'Width'].split('px')[0]}function m(e,t,o,i){return X(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ne()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=window.document.body,t=window.document.documentElement,o=ne()&&window.getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function h(e){return de({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ne())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?c():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return h(r)}function u(e,o){var i=ne(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=+a.borderTopWidth.split('px')[0],m=+a.borderLeftWidth.split('px')[0],c=h({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(c.marginTop=0,c.marginLeft=0,!i&&r){var u=+a.marginTop.split('px')[0],b=+a.marginLeft.split('px')[0];c.top-=f-u,c.bottom-=f-u,c.left-=m-b,c.right-=m-b,c.marginTop=u,c.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(c=l(c,o)),c}function b(e){var t=window.document.documentElement,o=u(e,t),i=X(t.clientWidth,window.innerWidth||0),n=X(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return h(s)}function y(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||y(o(e))}function w(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(e)),'BODY'===a.nodeName&&(a=window.document.documentElement)):'window'===r?a=window.document.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!y(s)){var f=c(),m=f.height,h=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=h+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=w(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return de({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function x(e,t,o){var i=d(t,o);return u(o,i)}function O(e){var t=window.getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function L(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=O(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[L(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function N(t,o,i){var n=void 0===i?t:t.slice(0,C(t,'name',i));return n.forEach(function(t){t.function&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t.function||t.fn;t.enabled&&e(i)&&(o.offsets.popper=h(o.offsets.popper),o.offsets.reference=h(o.offsets.reference),o=i(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=x(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof window.document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function D(e,t,o,i){var r='BODY'===e.nodeName,p=r?window:e;p.addEventListener(t,o,{passive:!0}),r||D(n(p.parentNode),t,o,i),i.push(p)}function H(e,t,o,i){o.updateBound=i,window.addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return D(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function A(){this.state.eventsEnabled||(this.state=H(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return window.removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function I(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function R(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function U(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&R(t[o])&&(i='px'),e.style[o]=t[o]+i})}function Y(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function j(e){return'end'===e?'start':'start'===e?'end':e}function K(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=le.indexOf(e),i=le.slice(o+1).concat(le.slice(0,o));return t?i.reverse():i}function q(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=h(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?X(document.documentElement.clientHeight,window.innerHeight||0):X(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function G(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return q(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){R(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function z(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=R(+i)?[+i,0]:G(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var V=Math.min,_=Math.floor,X=Math.max,Q=['native code','[object MutationObserverConstructor]'],J=function(e){return Q.some(function(t){return-1<(e||'').toString().indexOf(t)})},Z='undefined'!=typeof window,$=['Edge','Trident','Firefox'],ee=0,te=0;te<$.length;te+=1)if(Z&&0<=navigator.userAgent.indexOf($[te])){ee=1;break}var i,oe=Z&&J(window.MutationObserver),ie=oe?function(e){var t=!1,o=0,i=document.createElement('span'),n=new MutationObserver(function(){e(),t=!1});return n.observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute('x-index',o),++o)}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ee))}},ne=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},re=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},pe=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),se=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},de=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},ae=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],le=ae.slice(3),fe={FLIP:'flip',CLOCKWDSE:'clockwise',COUNTERCLOCKWDSE:'counterclockwise'},me=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};re(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=ie(this.update.bind(this)),this.options=de({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o.jquery?o[0]:o,this.popper=i.jquery?i[0]:i,this.options.modifiers={},Object.keys(de({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=de({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return de({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return pe(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return A.call(this)}},{key:'disableEventListeners',value:function(){return I.call(this)}}]),t}();return me.Utils=('undefined'==typeof window?global:window).PopperUtils,me.placements=ae,me.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:se({},d,r[d]),end:se({},d,r[d]+r[a]-p[a])};e.offsets.popper=de({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=w(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=X(p[e],i[e])),se({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=V(p[o],i[e]-('right'===e?p.width:p.height))),se({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=de({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=_,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var n=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(n),a=d?'height':'width',l=d?'Top':'Left',f=l.toLowerCase(),m=d?'left':'top',c=d?'bottom':'right',g=O(i)[a];s[c]-g<p[f]&&(e.offsets.popper[f]-=p[f]-(s[c]-g)),s[f]+g>p[c]&&(e.offsets.popper[f]+=s[f]+g-p[c]);var u=s[f]+s[a]/2-g/2,b=t(e.instance.popper,'margin'+l).replace('px',''),y=u-h(e.offsets.popper)[f]-b;return y=X(V(p[a]-g,y),0),e.arrowElement=i,e.offsets.arrow={},e.offsets.arrow[f]=Math.round(y),e.offsets.arrow[m]='',e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=w(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=L(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case fe.FLIP:p=[i,n];break;case fe.CLOCKWDSE:p=K(i);break;case fe.COUNTERCLOCKWDSE:p=K(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=L(i);var a=e.offsets.popper,l=e.offsets.reference,f=_,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),c=f(a.left)<f(o.left),h=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&c||'right'===i&&h||'top'===i&&g||'bottom'===i&&u,y=-1!==['top','bottom'].indexOf(i),w=!!t.flipVariations&&(y&&'start'===r&&c||y&&'end'===r&&h||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),w&&(r=j(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=de({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=N(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=L(t),e.offsets.popper=h(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},c={left:_(n.left),top:_(n.top),bottom:_(n.bottom),right:_(n.right)},h='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=B('transform');if(d='bottom'==h?-f.height+c.bottom:c.top,s='right'==u?-f.width+c.right:c.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[h]=0,m[u]=0,m.willChange='transform';else{var y='bottom'==h?-1:1,w='right'==u?-1:1;m[h]=d*y,m[u]=s*w,m.willChange=h+', '+u}var E={"x-placement":e.placement};return e.attributes=de({},E,e.attributes),e.styles=de({},m,e.styles),e.arrowStyles=de({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return U(e.instance.popper,e.styles),Y(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&U(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=x(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),U(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},me});
//# sourceMappingURL=popper.min.js.map

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});

/*
 * SmartMenus jQuery v1.1.0+
 * http://www.smartmenus.org/
 *
 * Copyright Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com/
 *
 * Released under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

(function(factory) {
   if (typeof define === 'function' && define.amd) {
     // AMD
     define(['jquery'], factory);
   } else if (typeof module === 'object' && typeof module.exports === 'object') {
     // CommonJS
     module.exports = factory(require('jquery'));
   } else {
     // Global jQuery
     factory(jQuery);
   }
 } (function($) {

   var menuTrees = [],
       mouse = false, // optimize for touch by default - we will detect for mouse input
       touchEvents = 'ontouchstart' in window, // we use this just to choose between toucn and pointer events, not for touch screen detection
       mouseDetectionEnabled = false,
       requestAnimationFrame = window.requestAnimationFrame || function(callback) { return setTimeout(callback, 1000 / 60); },
       cancelAnimationFrame = window.cancelAnimationFrame || function(id) { clearTimeout(id); },
       canAnimate = !!$.fn.animate;

   // Handle detection for mouse input (i.e. desktop browsers, tablets with a mouse, etc.)
   function initMouseDetection(disable) {
     var eNS = '.smartmenus_mouse';
     if (!mouseDetectionEnabled && !disable) {
       // if we get two consecutive mousemoves within 2 pixels from each other and within 300ms, we assume a real mouse/cursor is present
       // in practice, this seems like impossible to trick unintentianally with a real mouse and a pretty safe detection on touch devices (even with older browsers that do not support touch events)
       var firstTime = true,
           lastMove = null,
           events = {
             'mousemove': function(e) {
               var thisMove = { x: e.pageX, y: e.pageY, timeStamp: new Date().getTime() };
               if (lastMove) {
                 var deltaX = Math.abs(lastMove.x - thisMove.x),
                     deltaY = Math.abs(lastMove.y - thisMove.y);
                 if ((deltaX > 0 || deltaY > 0) && deltaX <= 2 && deltaY <= 2 && thisMove.timeStamp - lastMove.timeStamp <= 300) {
                   mouse = true;
                   // if this is the first check after page load, check if we are not over some item by chance and call the mouseenter handler if yes
                   if (firstTime) {
                     var $a = $(e.target).closest('a');
                     if ($a.is('a')) {
                       $.each(menuTrees, function() {
                         if ($.contains(this.$root[0], $a[0])) {
                           this.itemEnter({ currentTarget: $a[0] });
                           return false;
                         }
                       });
                     }
                     firstTime = false;
                   }
                 }
               }
               lastMove = thisMove;
             }
           };
       events[touchEvents ? 'touchstart' : 'pointerover pointermove pointerout MSPointerOver MSPointerMove MSPointerOut'] = function(e) {
         if (isTouchEvent(e.originalEvent)) {
           mouse = false;
         }
       };
       $(document).on(getEventsNS(events, eNS));
       mouseDetectionEnabled = true;
     } else if (mouseDetectionEnabled && disable) {
       $(document).off(eNS);
       mouseDetectionEnabled = false;
     }
   }

   function isTouchEvent(e) {
     return !/^(4|mouse)$/.test(e.pointerType);
   }

   // returns a jQuery on() ready object
   function getEventsNS(events, eNS) {
     if (!eNS) {
       eNS = '';
     }
     var eventsNS = {};
     for (var i in events) {
       eventsNS[i.split(' ').join(eNS + ' ') + eNS] = events[i];
     }
     return eventsNS;
   }

   $.SmartMenus = function(elm, options) {
     this.$root = $(elm);
     this.opts = options;
     this.rootId = ''; // internal
     this.accessIdPrefix = '';
     this.$subArrow = null;
     this.activatedItems = []; // stores last activated A's for each level
     this.visibleSubMenus = []; // stores visible sub menus UL's (might be in no particular order)
     this.showTimeout = 0;
     this.hideTimeout = 0;
     this.scrollTimeout = 0;
     this.clickActivated = false;
     this.focusActivated = false;
     this.zIndexInc = 0;
     this.idInc = 0;
     this.$firstLink = null; // we'll use these for some tests
     this.$firstSub = null; // at runtime so we'll cache them
     this.disabled = false;
     this.$disableOverlay = null;
     this.$touchScrollingSub = null;
     this.cssTransforms3d = 'perspective' in elm.style || 'webkitPerspective' in elm.style;
     this.wasCollapsible = false;
     this.init();
   };

   $.extend($.SmartMenus, {
     hideAll: function() {
       $.each(menuTrees, function() {
         this.menuHideAll();
       });
     },
     destroy: function() {
       while (menuTrees.length) {
         menuTrees[0].destroy();
       }
       initMouseDetection(true);
     },
     prototype: {
       init: function(refresh) {
         var self = this;

         if (!refresh) {
           menuTrees.push(this);

           this.rootId = (new Date().getTime() + Math.random() + '').replace(/\D/g, '');
           this.accessIdPrefix = 'sm-' + this.rootId + '-';

           if (this.$root.hasClass('sm-rtl')) {
             this.opts.rightToLeftSubMenus = true;
           }

           // init root (main menu)
           var eNS = '.smartmenus';
           this.$root
           .data('smartmenus', this)
           .attr('data-smartmenus-id', this.rootId)
           .dataSM('level', 1)
           .on(getEventsNS({
             'mouseover focusin': $.proxy(this.rootOver, this),
             'mouseout focusout': $.proxy(this.rootOut, this),
             'keydown': $.proxy(this.rootKeyDown, this)
           }, eNS))
           .on(getEventsNS({
             'mouseenter': $.proxy(this.itemEnter, this),
             'mouseleave': $.proxy(this.itemLeave, this),
             'mousedown': $.proxy(this.itemDown, this),
             'focus': $.proxy(this.itemFocus, this),
             'blur': $.proxy(this.itemBlur, this),
             'click': $.proxy(this.itemClick, this)
           }, eNS), 'a');

           // hide menus on tap or click outside the root UL
           eNS += this.rootId;
           if (this.opts.hideOnClick) {
             $(document).on(getEventsNS({
               'touchstart': $.proxy(this.docTouchStart, this),
               'touchmove': $.proxy(this.docTouchMove, this),
               'touchend': $.proxy(this.docTouchEnd, this),
               // for Opera Mobile < 11.5, webOS browser, etc. we'll check click too
               'click': $.proxy(this.docClick, this)
             }, eNS));
           }
           // hide sub menus on resize
           $(window).on(getEventsNS({ 'resize orientationchange': $.proxy(this.winResize, this) }, eNS));

           if (this.opts.subIndicators) {
             this.$subArrow = $('<span/>').addClass('sub-arrow');
             if (this.opts.subIndicatorsText) {
               this.$subArrow.html(this.opts.subIndicatorsText);
             }
           }

           // make sure mouse detection is enabled
           initMouseDetection();
         }

         // init sub menus
         this.$firstSub = this.$root.find('ul').each(function() { self.menuInit($(this)); }).eq(0);

         this.$firstLink = this.$root.find('a').eq(0);

         // find current item
         if (this.opts.markCurrentItem) {
           var reDefaultDoc = /(index|default)\.[^#\?\/]*/i,
               reHash = /#.*/,
               locHref = window.location.href.replace(reDefaultDoc, ''),
               locHrefNoHash = locHref.replace(reHash, '');
           this.$root.find('a:not(.mega-menu a)').each(function() {
             var href = this.href.replace(reDefaultDoc, ''),
                 $this = $(this);
             if (href == locHref || href == locHrefNoHash) {
               $this.addClass('current');
               if (self.opts.markCurrentTree) {
                 $this.parentsUntil('[data-smartmenus-id]', 'ul').each(function() {
                   $(this).dataSM('parent-a').addClass('current');
                 });
               }
             }
           });
         }

         // save initial state
         this.wasCollapsible = this.isCollapsible();
       },
       destroy: function(refresh) {
         if (!refresh) {
           var eNS = '.smartmenus';
           this.$root
           .removeData('smartmenus')
           .removeAttr('data-smartmenus-id')
           .removeDataSM('level')
           .off(eNS);
           eNS += this.rootId;
           $(document).off(eNS);
           $(window).off(eNS);
           if (this.opts.subIndicators) {
             this.$subArrow = null;
           }
         }
         this.menuHideAll();
         var self = this;
         this.$root.find('ul').each(function() {
           var $this = $(this);
           if ($this.dataSM('scroll-arrows')) {
             $this.dataSM('scroll-arrows').remove();
           }
           if ($this.dataSM('shown-before')) {
             if (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {
               $this.css({ width: '', minWidth: '', maxWidth: '' }).removeClass('sm-nowrap');
             }
             if ($this.dataSM('scroll-arrows')) {
               $this.dataSM('scroll-arrows').remove();
             }
             $this.css({ zIndex: '', top: '', left: '', marginLeft: '', marginTop: '', display: '' });
           }
           if (($this.attr('id') || '').indexOf(self.accessIdPrefix) == 0) {
             $this.removeAttr('id');
           }
         })
         .removeDataSM('in-mega')
         .removeDataSM('shown-before')
         .removeDataSM('scroll-arrows')
         .removeDataSM('parent-a')
         .removeDataSM('level')
         .removeDataSM('beforefirstshowfired')
         .removeAttr('role')
         .removeAttr('aria-hidden')
         .removeAttr('aria-labelledby')
         .removeAttr('aria-expanded');
         this.$root.find('a.has-submenu').each(function() {
           var $this = $(this);
           if ($this.attr('id').indexOf(self.accessIdPrefix) == 0) {
             $this.removeAttr('id');
           }
         })
         .removeClass('has-submenu')
         .removeDataSM('sub')
         .removeAttr('aria-haspopup')
         .removeAttr('aria-controls')
         .removeAttr('aria-expanded')
         .closest('li').removeDataSM('sub');
         if (this.opts.subIndicators) {
           this.$root.find('span.sub-arrow').remove();
         }
         if (this.opts.markCurrentItem) {
           this.$root.find('a.current').removeClass('current');
         }
         if (!refresh) {
           this.$root = null;
           this.$firstLink = null;
           this.$firstSub = null;
           if (this.$disableOverlay) {
             this.$disableOverlay.remove();
             this.$disableOverlay = null;
           }
           menuTrees.splice($.inArray(this, menuTrees), 1);
         }
       },
       disable: function(noOverlay) {
         if (!this.disabled) {
           this.menuHideAll();
           // display overlay over the menu to prevent interaction
           if (!noOverlay && !this.opts.isPopup && this.$root.is(':visible')) {
             var pos = this.$root.offset();
             this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
               position: 'absolute',
               top: pos.top,
               left: pos.left,
               width: this.$root.outerWidth(),
               height: this.$root.outerHeight(),
               zIndex: this.getStartZIndex(true),
               opacity: 0
             }).appendTo(document.body);
           }
           this.disabled = true;
         }
       },
       docClick: function(e) {
         if (this.$touchScrollingSub) {
           this.$touchScrollingSub = null;
           return;
         }
         // hide on any click outside the menu or on a menu link
         if (this.visibleSubMenus.length && !$.contains(this.$root[0], e.target) || $(e.target).closest('a').length) {
           this.menuHideAll();
         }
       },
       docTouchEnd: function(e) {
         if (!this.lastTouch) {
           return;
         }
         if (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !$.contains(this.$root[0], this.lastTouch.target))) {
           if (this.hideTimeout) {
             clearTimeout(this.hideTimeout);
             this.hideTimeout = 0;
           }
           // hide with a delay to prevent triggering accidental unwanted click on some page element
           var self = this;
           this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, 350);
         }
         this.lastTouch = null;
       },
       docTouchMove: function(e) {
         if (!this.lastTouch) {
           return;
         }
         var touchPoint = e.originalEvent.touches[0];
         this.lastTouch.x2 = touchPoint.pageX;
         this.lastTouch.y2 = touchPoint.pageY;
       },
       docTouchStart: function(e) {
         var touchPoint = e.originalEvent.touches[0];
         this.lastTouch = { x1: touchPoint.pageX, y1: touchPoint.pageY, target: touchPoint.target };
       },
       enable: function() {
         if (this.disabled) {
           if (this.$disableOverlay) {
             this.$disableOverlay.remove();
             this.$disableOverlay = null;
           }
           this.disabled = false;
         }
       },
       getClosestMenu: function(elm) {
         var $closestMenu = $(elm).closest('ul');
         while ($closestMenu.dataSM('in-mega')) {
           $closestMenu = $closestMenu.parent().closest('ul');
         }
         return $closestMenu[0] || null;
       },
       getHeight: function($elm) {
         return this.getOffset($elm, true);
       },
       // returns precise width/height float values
       getOffset: function($elm, height) {
         var old;
         if ($elm.css('display') == 'none') {
           old = { position: $elm[0].style.position, visibility: $elm[0].style.visibility };
           $elm.css({ position: 'absolute', visibility: 'hidden' }).show();
         }
         var box = $elm[0].getBoundingClientRect && $elm[0].getBoundingClientRect(),
             val = box && (height ? box.height || box.bottom - box.top : box.width || box.right - box.left);
         if (!val && val !== 0) {
           val = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;
         }
         if (old) {
           $elm.hide().css(old);
         }
         return val;
       },
       getStartZIndex: function(root) {
         var zIndex = parseInt(this[root ? '$root' : '$firstSub'].css('z-index'));
         if (!root && isNaN(zIndex)) {
           zIndex = parseInt(this.$root.css('z-index'));
         }
         return !isNaN(zIndex) ? zIndex : 1;
       },
       getTouchPoint: function(e) {
         return e.touches && e.touches[0] || e.changedTouches && e.changedTouches[0] || e;
       },
       getViewport: function(height) {
         var name = height ? 'Height' : 'Width',
             val = document.documentElement['client' + name],
             val2 = window['inner' + name];
         if (val2) {
           val = Math.min(val, val2);
         }
         return val;
       },
       getViewportHeight: function() {
         return this.getViewport(true);
       },
       getViewportWidth: function() {
         return this.getViewport();
       },
       getWidth: function($elm) {
         return this.getOffset($elm);
       },
       handleEvents: function() {
         return !this.disabled && this.isCSSOn();
       },
       handleItemEvents: function($a) {
         return this.handleEvents() && !this.isLinkInMegaMenu($a);
       },
       isCollapsible: function() {
         return this.$firstSub.css('position') == 'static';
       },
       isCSSOn: function() {
         return this.$firstLink.css('display') != 'inline';
       },
       isFixed: function() {
         var isFixed = this.$root.css('position') == 'fixed';
         if (!isFixed) {
           this.$root.parentsUntil('body').each(function() {
             if ($(this).css('position') == 'fixed') {
               isFixed = true;
               return false;
             }
           });
         }
         return isFixed;
       },
       isLinkInMegaMenu: function($a) {
         return $(this.getClosestMenu($a[0])).hasClass('mega-menu');
       },
       isTouchMode: function() {
         return !mouse || this.opts.noMouseOver || this.isCollapsible();
       },
       itemActivate: function($a, hideDeeperSubs) {
         var $ul = $a.closest('ul'),
             level = $ul.dataSM('level');
         // if for some reason the parent item is not activated (e.g. this is an API call to activate the item), activate all parent items first
         if (level > 1 && (!this.activatedItems[level - 2] || this.activatedItems[level - 2][0] != $ul.dataSM('parent-a')[0])) {
           var self = this;
           $($ul.parentsUntil('[data-smartmenus-id]', 'ul').get().reverse()).add($ul).each(function() {
             self.itemActivate($(this).dataSM('parent-a'));
           });
         }
         // hide any visible deeper level sub menus
         if (!this.isCollapsible() || hideDeeperSubs) {
           this.menuHideSubMenus(!this.activatedItems[level - 1] || this.activatedItems[level - 1][0] != $a[0] ? level - 1 : level);
         }
         // save new active item for this level
         this.activatedItems[level - 1] = $a;
         if (this.$root.triggerHandler('activate.smapi', $a[0]) === false) {
           return;
         }
         // show the sub menu if this item has one
         var $sub = $a.dataSM('sub');
         if ($sub && (this.isTouchMode() || (!this.opts.showOnClick || this.clickActivated))) {
           this.menuShow($sub);
         }
       },
       itemBlur: function(e) {
         var $a = $(e.currentTarget);
         if (!this.handleItemEvents($a)) {
           return;
         }
         this.$root.triggerHandler('blur.smapi', $a[0]);
       },
       itemClick: function(e) {
         var $a = $(e.currentTarget);
         if (!this.handleItemEvents($a)) {
           return;
         }
         if (this.$touchScrollingSub && this.$touchScrollingSub[0] == $a.closest('ul')[0]) {
           this.$touchScrollingSub = null;
           e.stopPropagation();
           return false;
         }
         if (this.$root.triggerHandler('click.smapi', $a[0]) === false) {
           return false;
         }
         var $sub = $a.dataSM('sub'),
             firstLevelSub = $sub ? $sub.dataSM('level') == 2 : false;
         if ($sub) {
           var subArrowClicked = $(e.target).is('.sub-arrow'),
               collapsible = this.isCollapsible(),
               behaviorToggle = /toggle$/.test(this.opts.collapsibleBehavior),
               behaviorLink = /link$/.test(this.opts.collapsibleBehavior),
               behaviorAccordion = /^accordion/.test(this.opts.collapsibleBehavior);
           // if the sub is hidden, try to show it
           if (!$sub.is(':visible')) {
             if (!behaviorLink || !collapsible || subArrowClicked) {
               if (this.opts.showOnClick && firstLevelSub) {
                 this.clickActivated = true;
               }
               // try to activate the item and show the sub
               this.itemActivate($a, behaviorAccordion);
               // if "itemActivate" showed the sub, prevent the click so that the link is not loaded
               // if it couldn't show it, then the sub menus are disabled with an !important declaration (e.g. via mobile styles) so let the link get loaded
               if ($sub.is(':visible')) {
                 this.focusActivated = true;
                 return false;
               }
             }
             // if the sub is visible and we are in collapsible mode
           } else if (collapsible && (behaviorToggle || subArrowClicked)) {
             this.itemActivate($a, behaviorAccordion);
             this.menuHide($sub);
             if (behaviorToggle) {
               this.focusActivated = false;
             }
             return false;
           }
         }
         if (this.opts.showOnClick && firstLevelSub || $a.hasClass('disabled') || this.$root.triggerHandler('select.smapi', $a[0]) === false) {
           return false;
         }
       },
       itemDown: function(e) {
         var $a = $(e.currentTarget);
         if (!this.handleItemEvents($a)) {
           return;
         }
         $a.dataSM('mousedown', true);
       },
       itemEnter: function(e) {
         var $a = $(e.currentTarget);
         if (!this.handleItemEvents($a)) {
           return;
         }
         if (!this.isTouchMode()) {
           if (this.showTimeout) {
             clearTimeout(this.showTimeout);
             this.showTimeout = 0;
           }
           var self = this;
           this.showTimeout = setTimeout(function() { self.itemActivate($a); }, this.opts.showOnClick && $a.closest('ul').dataSM('level') == 1 ? 1 : this.opts.showTimeout);
         }
         this.$root.triggerHandler('mouseenter.smapi', $a[0]);
       },
       itemFocus: function(e) {
         var $a = $(e.currentTarget);
         if (!this.handleItemEvents($a)) {
           return;
         }
         // fix (the mousedown check): in some browsers a tap/click produces consecutive focus + click events so we don't need to activate the item on focus
         if (this.focusActivated && (!this.isTouchMode() || !$a.dataSM('mousedown')) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != $a[0])) {
           this.itemActivate($a, true);
         }
         this.$root.triggerHandler('focus.smapi', $a[0]);
       },
       itemLeave: function(e) {
         var $a = $(e.currentTarget);
         if (!this.handleItemEvents($a)) {
           return;
         }
         if (!this.isTouchMode()) {
           $a[0].blur();
           if (this.showTimeout) {
             clearTimeout(this.showTimeout);
             this.showTimeout = 0;
           }
         }
         $a.removeDataSM('mousedown');
         this.$root.triggerHandler('mouseleave.smapi', $a[0]);
       },
       menuHide: function($sub) {
         if (this.$root.triggerHandler('beforehide.smapi', $sub[0]) === false) {
           return;
         }
         if (canAnimate) {
           $sub.stop(true, true);
         }
         if ($sub.css('display') != 'none') {
           var complete = function() {
             // unset z-index
             $sub.css('z-index', '');
           };
           // if sub is collapsible (mobile view)
           if (this.isCollapsible()) {
             if (canAnimate && this.opts.collapsibleHideFunction) {
               this.opts.collapsibleHideFunction.call(this, $sub, complete);
             } else {
               $sub.hide(this.opts.collapsibleHideDuration, complete);
             }
           } else {
             if (canAnimate && this.opts.hideFunction) {
               this.opts.hideFunction.call(this, $sub, complete);
             } else {
               $sub.hide(this.opts.hideDuration, complete);
             }
           }
           // deactivate scrolling if it is activated for this sub
           if ($sub.dataSM('scroll')) {
             this.menuScrollStop($sub);
             $sub.css({ 'touch-action': '', '-ms-touch-action': '', '-webkit-transform': '', transform: '' })
             .off('.smartmenus_scroll').removeDataSM('scroll').dataSM('scroll-arrows').hide();
           }
           // unhighlight parent item + accessibility
           $sub.dataSM('parent-a').removeClass('highlighted').attr('aria-expanded', 'false');
           $sub.attr({
             'aria-expanded': 'false',
             'aria-hidden': 'true'
           });
           var level = $sub.dataSM('level');
           this.activatedItems.splice(level - 1, 1);
           this.visibleSubMenus.splice($.inArray($sub, this.visibleSubMenus), 1);
           this.$root.triggerHandler('hide.smapi', $sub[0]);
         }
       },
       menuHideAll: function() {
         if (this.showTimeout) {
           clearTimeout(this.showTimeout);
           this.showTimeout = 0;
         }
         // hide all subs
         // if it's a popup, this.visibleSubMenus[0] is the root UL
         var level = this.opts.isPopup ? 1 : 0;
         for (var i = this.visibleSubMenus.length - 1; i >= level; i--) {
           this.menuHide(this.visibleSubMenus[i]);
         }
         // hide root if it's popup
         if (this.opts.isPopup) {
           if (canAnimate) {
             this.$root.stop(true, true);
           }
           if (this.$root.is(':visible')) {
             if (canAnimate && this.opts.hideFunction) {
               this.opts.hideFunction.call(this, this.$root);
             } else {
               this.$root.hide(this.opts.hideDuration);
             }
           }
         }
         this.activatedItems = [];
         this.visibleSubMenus = [];
         this.clickActivated = false;
         this.focusActivated = false;
         // reset z-index increment
         this.zIndexInc = 0;
         this.$root.triggerHandler('hideAll.smapi');
       },
       menuHideSubMenus: function(level) {
         for (var i = this.activatedItems.length - 1; i >= level; i--) {
           var $sub = this.activatedItems[i].dataSM('sub');
           if ($sub) {
             this.menuHide($sub);
           }
         }
       },
       menuInit: function($ul) {
         if (!$ul.dataSM('in-mega')) {
           // mark UL's in mega drop downs (if any) so we can neglect them
           if ($ul.hasClass('mega-menu')) {
             $ul.find('ul').dataSM('in-mega', true);
           }
           // get level (much faster than, for example, using parentsUntil)
           var level = 2,
               par = $ul[0];
           while ((par = par.parentNode.parentNode) != this.$root[0]) {
             level++;
           }
           // cache stuff for quick access
           var $a = $ul.prevAll('a').eq(-1);
           // if the link is nested (e.g. in a heading)
           if (!$a.length) {
             $a = $ul.prevAll().find('a').eq(-1);
           }
           $a.addClass('has-submenu').dataSM('sub', $ul);
           $ul.dataSM('parent-a', $a)
           .dataSM('level', level)
           .parent().dataSM('sub', $ul);
           // accessibility
           var aId = $a.attr('id') || this.accessIdPrefix + (++this.idInc),
               ulId = $ul.attr('id') || this.accessIdPrefix + (++this.idInc);
           $a.attr({
             id: aId,
             'aria-haspopup': 'true',
             'aria-controls': ulId,
             'aria-expanded': 'false'
           });
           $ul.attr({
             id: ulId,
             'role': 'group',
             'aria-hidden': 'true',
             'aria-labelledby': aId,
             'aria-expanded': 'false'
           });
           // add sub indicator to parent item
           if (this.opts.subIndicators) {
             $a[this.opts.subIndicatorsPos](this.$subArrow.clone());
           }
         }
       },
       menuPosition: function($sub) {
         var $a = $sub.dataSM('parent-a'),
             $li = $a.closest('li'),
             $ul = $li.parent(),
             level = $sub.dataSM('level'),
             subW = this.getWidth($sub),
             subH = this.getHeight($sub),
             itemOffset = $a.offset(),
             itemX = itemOffset.left,
             itemY = itemOffset.top,
             itemW = this.getWidth($a),
             itemH = this.getHeight($a),
             $win = $(window),
             winX = $win.scrollLeft(),
             winY = $win.scrollTop(),
             winW = this.getViewportWidth(),
             winH = this.getViewportHeight(),
             horizontalParent = $ul.parent().is('[data-sm-horizontal-sub]') || level == 2 && !$ul.hasClass('sm-vertical'),
             rightToLeft = this.opts.rightToLeftSubMenus && !$li.is('[data-sm-reverse]') || !this.opts.rightToLeftSubMenus && $li.is('[data-sm-reverse]'),
             subOffsetX = level == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
             subOffsetY = level == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,
             x, y;
         if (horizontalParent) {
           x = rightToLeft ? itemW - subW - subOffsetX : subOffsetX;
           y = this.opts.bottomToTopSubMenus ? -subH - subOffsetY : itemH + subOffsetY;
         } else {
           x = rightToLeft ? subOffsetX - subW : itemW - subOffsetX;
           y = this.opts.bottomToTopSubMenus ? itemH - subOffsetY - subH : subOffsetY;
         }
         if (this.opts.keepInViewport) {
           var absX = itemX + x,
               absY = itemY + y;
           if (rightToLeft && absX < winX) {
             x = horizontalParent ? winX - absX + x : itemW - subOffsetX;
           } else if (!rightToLeft && absX + subW > winX + winW) {
             x = horizontalParent ? winX + winW - subW - absX + x : subOffsetX - subW;
           }
           if (!horizontalParent) {
             if (subH < winH && absY + subH > winY + winH) {
               y += winY + winH - subH - absY;
             } else if (subH >= winH || absY < winY) {
               y += winY - absY;
             }
           }
           // do we need scrolling?
           // 0.49 used for better precision when dealing with float values
           if (horizontalParent && (absY + subH > winY + winH + 0.49 || absY < winY) || !horizontalParent && subH > winH + 0.49) {
             var self = this;
             if (!$sub.dataSM('scroll-arrows')) {
               $sub.dataSM('scroll-arrows', $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]])
                           .on({
                 mouseenter: function() {
                   $sub.dataSM('scroll').up = $(this).hasClass('scroll-up');
                   self.menuScroll($sub);
                 },
                 mouseleave: function(e) {
                   self.menuScrollStop($sub);
                   self.menuScrollOut($sub, e);
                 },
                 'mousewheel DOMMouseScroll': function(e) { e.preventDefault(); }
               })
                           .insertAfter($sub)
                          );
             }
             // bind scroll events and save scroll data for this sub
             var eNS = '.smartmenus_scroll';
             $sub.dataSM('scroll', {
               y: this.cssTransforms3d ? 0 : y - itemH,
               step: 1,
               // cache stuff for faster recalcs later
               itemH: itemH,
               subH: subH,
               arrowDownH: this.getHeight($sub.dataSM('scroll-arrows').eq(1))
             })
             .on(getEventsNS({
               'mouseover': function(e) { self.menuScrollOver($sub, e); },
               'mouseout': function(e) { self.menuScrollOut($sub, e); },
               'mousewheel DOMMouseScroll': function(e) { self.menuScrollMousewheel($sub, e); }
             }, eNS))
             .dataSM('scroll-arrows').css({ top: 'auto', left: '0', marginLeft: x + (parseInt($sub.css('border-left-width')) || 0), width: subW - (parseInt($sub.css('border-left-width')) || 0) - (parseInt($sub.css('border-right-width')) || 0), zIndex: $sub.css('z-index') })
             .eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1).show();
             // when a menu tree is fixed positioned we allow scrolling via touch too
             // since there is no other way to access such long sub menus if no mouse is present
             if (this.isFixed()) {
               var events = {};
               events[touchEvents ? 'touchstart touchmove touchend' : 'pointerdown pointermove pointerup MSPointerDown MSPointerMove MSPointerUp'] = function(e) {
                 self.menuScrollTouch($sub, e);
               };
               $sub.css({ 'touch-action': 'none', '-ms-touch-action': 'none' }).on(getEventsNS(events, eNS));
             }
           }
         }
         $sub.css({ top: 'auto', left: '0', marginLeft: x, marginTop: y - itemH });
       },
       menuScroll: function($sub, once, step) {
         var data = $sub.dataSM('scroll'),
             $arrows = $sub.dataSM('scroll-arrows'),
             end = data.up ? data.upEnd : data.downEnd,
             diff;
         if (!once && data.momentum) {
           data.momentum *= 0.92;
           diff = data.momentum;
           if (diff < 0.5) {
             this.menuScrollStop($sub);
             return;
           }
         } else {
           diff = step || (once || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(data.step));
         }
         // hide any visible deeper level sub menus
         var level = $sub.dataSM('level');
         if (this.activatedItems[level - 1] && this.activatedItems[level - 1].dataSM('sub') && this.activatedItems[level - 1].dataSM('sub').is(':visible')) {
           this.menuHideSubMenus(level - 1);
         }
         data.y = data.up && end <= data.y || !data.up && end >= data.y ? data.y : (Math.abs(end - data.y) > diff ? data.y + (data.up ? diff : -diff) : end);
         $sub.css(this.cssTransforms3d ? { '-webkit-transform': 'translate3d(0, ' + data.y + 'px, 0)', transform: 'translate3d(0, ' + data.y + 'px, 0)' } : { marginTop: data.y });
         // show opposite arrow if appropriate
         if (mouse && (data.up && data.y > data.downEnd || !data.up && data.y < data.upEnd)) {
           $arrows.eq(data.up ? 1 : 0).show();
         }
         // if we've reached the end
         if (data.y == end) {
           if (mouse) {
             $arrows.eq(data.up ? 0 : 1).hide();
           }
           this.menuScrollStop($sub);
         } else if (!once) {
           if (this.opts.scrollAccelerate && data.step < this.opts.scrollStep) {
             data.step += 0.2;
           }
           var self = this;
           this.scrollTimeout = requestAnimationFrame(function() { self.menuScroll($sub); });
         }
       },
       menuScrollMousewheel: function($sub, e) {
         if (this.getClosestMenu(e.target) == $sub[0]) {
           e = e.originalEvent;
           var up = (e.wheelDelta || -e.detail) > 0;
           if ($sub.dataSM('scroll-arrows').eq(up ? 0 : 1).is(':visible')) {
             $sub.dataSM('scroll').up = up;
             this.menuScroll($sub, true);
           }
         }
         e.preventDefault();
       },
       menuScrollOut: function($sub, e) {
         if (mouse) {
           if (!/^scroll-(up|down)/.test((e.relatedTarget || '').className) && ($sub[0] != e.relatedTarget && !$.contains($sub[0], e.relatedTarget) || this.getClosestMenu(e.relatedTarget) != $sub[0])) {
             $sub.dataSM('scroll-arrows').css('visibility', 'hidden');
           }
         }
       },
       menuScrollOver: function($sub, e) {
         if (mouse) {
           if (!/^scroll-(up|down)/.test(e.target.className) && this.getClosestMenu(e.target) == $sub[0]) {
             this.menuScrollRefreshData($sub);
             var data = $sub.dataSM('scroll'),
                 upEnd = $(window).scrollTop() - $sub.dataSM('parent-a').offset().top - data.itemH;
             $sub.dataSM('scroll-arrows').eq(0).css('margin-top', upEnd).end()
             .eq(1).css('margin-top', upEnd + this.getViewportHeight() - data.arrowDownH).end()
             .css('visibility', 'visible');
           }
         }
       },
       menuScrollRefreshData: function($sub) {
         var data = $sub.dataSM('scroll'),
             upEnd = $(window).scrollTop() - $sub.dataSM('parent-a').offset().top - data.itemH;
         if (this.cssTransforms3d) {
           upEnd = -(parseFloat($sub.css('margin-top')) - upEnd);
         }
         $.extend(data, {
           upEnd: upEnd,
           downEnd: upEnd + this.getViewportHeight() - data.subH
         });
       },
       menuScrollStop: function($sub) {
         if (this.scrollTimeout) {
           cancelAnimationFrame(this.scrollTimeout);
           this.scrollTimeout = 0;
           $sub.dataSM('scroll').step = 1;
           return true;
         }
       },
       menuScrollTouch: function($sub, e) {
         e = e.originalEvent;
         if (isTouchEvent(e)) {
           var touchPoint = this.getTouchPoint(e);
           // neglect event if we touched a visible deeper level sub menu
           if (this.getClosestMenu(touchPoint.target) == $sub[0]) {
             var data = $sub.dataSM('scroll');
             if (/(start|down)$/i.test(e.type)) {
               if (this.menuScrollStop($sub)) {
                 // if we were scrolling, just stop and don't activate any link on the first touch
                 e.preventDefault();
                 this.$touchScrollingSub = $sub;
               } else {
                 this.$touchScrollingSub = null;
               }
               // update scroll data since the user might have zoomed, etc.
               this.menuScrollRefreshData($sub);
               // extend it with the touch properties
               $.extend(data, {
                 touchStartY: touchPoint.pageY,
                 touchStartTime: e.timeStamp
               });
             } else if (/move$/i.test(e.type)) {
               var prevY = data.touchY !== undefined ? data.touchY : data.touchStartY;
               if (prevY !== undefined && prevY != touchPoint.pageY) {
                 this.$touchScrollingSub = $sub;
                 var up = prevY < touchPoint.pageY;
                 // changed direction? reset...
                 if (data.up !== undefined && data.up != up) {
                   $.extend(data, {
                     touchStartY: touchPoint.pageY,
                     touchStartTime: e.timeStamp
                   });
                 }
                 $.extend(data, {
                   up: up,
                   touchY: touchPoint.pageY
                 });
                 this.menuScroll($sub, true, Math.abs(touchPoint.pageY - prevY));
               }
               e.preventDefault();
             } else { // touchend/pointerup
               if (data.touchY !== undefined) {
                 if (data.momentum = Math.pow(Math.abs(touchPoint.pageY - data.touchStartY) / (e.timeStamp - data.touchStartTime), 2) * 15) {
                   this.menuScrollStop($sub);
                   this.menuScroll($sub);
                   e.preventDefault();
                 }
                 delete data.touchY;
               }
             }
           }
         }
       },
       menuShow: function($sub) {
         if (!$sub.dataSM('beforefirstshowfired')) {
           $sub.dataSM('beforefirstshowfired', true);
           if (this.$root.triggerHandler('beforefirstshow.smapi', $sub[0]) === false) {
             return;
           }
         }
         if (this.$root.triggerHandler('beforeshow.smapi', $sub[0]) === false) {
           return;
         }
         $sub.dataSM('shown-before', true);
         if (canAnimate) {
           $sub.stop(true, true);
         }
         if (!$sub.is(':visible')) {
           // highlight parent item
           var $a = $sub.dataSM('parent-a'),
               collapsible = this.isCollapsible();
           if (this.opts.keepHighlighted || collapsible) {
             $a.addClass('highlighted');
           }
           if (collapsible) {
             $sub.removeClass('sm-nowrap').css({ zIndex: '', width: 'auto', minWidth: '', maxWidth: '', top: '', left: '', marginLeft: '', marginTop: '' });
           } else {
             // set z-index
             $sub.css('z-index', this.zIndexInc = (this.zIndexInc || this.getStartZIndex()) + 1);
             // min/max-width fix - no way to rely purely on CSS as all UL's are nested
             if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
               $sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
               if (this.opts.subMenusMinWidth) {
                 $sub.css('min-width', this.opts.subMenusMinWidth);
               }
               if (this.opts.subMenusMaxWidth) {
                 var noMaxWidth = this.getWidth($sub);
                 $sub.css('max-width', this.opts.subMenusMaxWidth);
                 if (noMaxWidth > this.getWidth($sub)) {
                   $sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
                 }
               }
             }
             this.menuPosition($sub);
           }
           var complete = function() {
             // fix: "overflow: hidden;" is not reset on animation complete in jQuery < 1.9.0 in Chrome when global "box-sizing: border-box;" is used
             $sub.css('overflow', '');
           };
           // if sub is collapsible (mobile view)
           if (collapsible) {
             if (canAnimate && this.opts.collapsibleShowFunction) {
               this.opts.collapsibleShowFunction.call(this, $sub, complete);
             } else {
               $sub.show(this.opts.collapsibleShowDuration, complete);
             }
           } else {
             if (canAnimate && this.opts.showFunction) {
               this.opts.showFunction.call(this, $sub, complete);
             } else {
               $sub.show(this.opts.showDuration, complete);
             }
           }
           // accessibility
           $a.attr('aria-expanded', 'true');
           $sub.attr({
             'aria-expanded': 'true',
             'aria-hidden': 'false'
           });
           // store sub menu in visible array
           this.visibleSubMenus.push($sub);
           this.$root.triggerHandler('show.smapi', $sub[0]);
         }
       },
       popupHide: function(noHideTimeout) {
         if (this.hideTimeout) {
           clearTimeout(this.hideTimeout);
           this.hideTimeout = 0;
         }
         var self = this;
         this.hideTimeout = setTimeout(function() {
           self.menuHideAll();
         }, noHideTimeout ? 1 : this.opts.hideTimeout);
       },
       popupShow: function(left, top) {
         if (!this.opts.isPopup) {
           alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
           return;
         }
         if (this.hideTimeout) {
           clearTimeout(this.hideTimeout);
           this.hideTimeout = 0;
         }
         this.$root.dataSM('shown-before', true);
         if (canAnimate) {
           this.$root.stop(true, true);
         }
         if (!this.$root.is(':visible')) {
           this.$root.css({ left: left, top: top });
           // show menu
           var self = this,
               complete = function() {
                 self.$root.css('overflow', '');
               };
           if (canAnimate && this.opts.showFunction) {
             this.opts.showFunction.call(this, this.$root, complete);
           } else {
             this.$root.show(this.opts.showDuration, complete);
           }
           this.visibleSubMenus[0] = this.$root;
         }
       },
       refresh: function() {
         this.destroy(true);
         this.init(true);
       },
       rootKeyDown: function(e) {
         if (!this.handleEvents()) {
           return;
         }
         switch (e.keyCode) {
           case 27: // reset on Esc
             var $activeTopItem = this.activatedItems[0];
             if ($activeTopItem) {
               this.menuHideAll();
               $activeTopItem[0].focus();
               var $sub = $activeTopItem.dataSM('sub');
               if ($sub) {
                 this.menuHide($sub);
               }
             }
             break;
           case 32: // activate item's sub on Space
             var $target = $(e.target);
             if ($target.is('a') && this.handleItemEvents($target)) {
               var $sub = $target.dataSM('sub');
               if ($sub && !$sub.is(':visible')) {
                 this.itemClick({ currentTarget: e.target });
                 e.preventDefault();
               }
             }
             break;
         }
       },
       rootOut: function(e) {
         if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
           return;
         }
         if (this.hideTimeout) {
           clearTimeout(this.hideTimeout);
           this.hideTimeout = 0;
         }
         if (!this.opts.showOnClick || !this.opts.hideOnClick) {
           var self = this;
           this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, this.opts.hideTimeout);
         }
       },
       rootOver: function(e) {
         if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
           return;
         }
         if (this.hideTimeout) {
           clearTimeout(this.hideTimeout);
           this.hideTimeout = 0;
         }
       },
       winResize: function(e) {
         if (!this.handleEvents()) {
           // we still need to resize the disable overlay if it's visible
           if (this.$disableOverlay) {
             var pos = this.$root.offset();
             this.$disableOverlay.css({
               top: pos.top,
               left: pos.left,
               width: this.$root.outerWidth(),
               height: this.$root.outerHeight()
             });
           }
           return;
         }
         // hide sub menus on resize - on mobile do it only on orientation change
         if (!('onorientationchange' in window) || e.type == 'orientationchange') {
           var collapsible = this.isCollapsible();
           // if it was collapsible before resize and still is, don't do it
           if (!(this.wasCollapsible && collapsible)) { 
             if (this.activatedItems.length) {
               this.activatedItems[this.activatedItems.length - 1][0].blur();
             }
             this.menuHideAll();
           }
           this.wasCollapsible = collapsible;
         }
       }
     }
   });

   $.fn.dataSM = function(key, val) {
     if (val) {
       return this.data(key + '_smartmenus', val);
     }
     return this.data(key + '_smartmenus');
   };

   $.fn.removeDataSM = function(key) {
     return this.removeData(key + '_smartmenus');
   };

   $.fn.smartmenus = function(options) {
     if (typeof options == 'string') {
       var args = arguments,
           method = options;
       Array.prototype.shift.call(args);
       return this.each(function() {
         var smartmenus = $(this).data('smartmenus');
         if (smartmenus && smartmenus[method]) {
           smartmenus[method].apply(smartmenus, args);
         }
       });
     }
     return this.each(function() {
       // [data-sm-options] attribute on the root UL
       var dataOpts = $(this).data('sm-options') || null;
       if (dataOpts) {
         try {
           dataOpts = eval('(' + dataOpts + ')');
         } catch(e) {
           dataOpts = null;
           alert('ERROR\n\nSmartMenus jQuery init:\nInvalid "data-sm-options" attribute value syntax.');
         };
       }
       new $.SmartMenus(this, $.extend({}, $.fn.smartmenus.defaults, options, dataOpts));
     });
   };

   // default settings
   $.fn.smartmenus.defaults = {
     isPopup:		false,		// is this a popup menu (can be shown via the popupShow/popupHide methods) or a permanent menu bar
     mainMenuSubOffsetX:	0,		// pixels offset from default position
     mainMenuSubOffsetY:	0,		// pixels offset from default position
     subMenusSubOffsetX:	0,		// pixels offset from default position
     subMenusSubOffsetY:	0,		// pixels offset from default position
     subMenusMinWidth:	'10em',		// min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
     subMenusMaxWidth:	'20em',		// max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
     subIndicators: 		true,		// create sub menu indicators - creates a SPAN and inserts it in the A
     subIndicatorsPos: 	'append',	// position of the SPAN relative to the menu item content ('append', 'prepend')
     subIndicatorsText:	'',		// [optionally] add text in the SPAN (e.g. '+') (you may want to check the CSS for the sub indicators too)
     scrollStep: 		30,		// pixels step when scrolling long sub menus that do not fit in the viewport height
     scrollAccelerate:	true,		// accelerate scrolling or use a fixed step
     showTimeout:		250,		// timeout before showing the sub menus
     hideTimeout:		500,		// timeout before hiding the sub menus
     showDuration:		0,		// duration for show animation - set to 0 for no animation - matters only if showFunction:null
     showFunction:		null,		// custom function to use when showing a sub menu (the default is the jQuery 'show')
     // don't forget to call complete() at the end of whatever you do
     // e.g.: function($ul, complete) { $ul.fadeIn(250, complete); }
     hideDuration:		0,		// duration for hide animation - set to 0 for no animation - matters only if hideFunction:null
     hideFunction:		function($ul, complete) { $ul.fadeOut(200, complete); },	// custom function to use when hiding a sub menu (the default is the jQuery 'hide')
     // don't forget to call complete() at the end of whatever you do
     // e.g.: function($ul, complete) { $ul.fadeOut(250, complete); }
     collapsibleShowDuration:0,		// duration for show animation for collapsible sub menus - matters only if collapsibleShowFunction:null
     collapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },	// custom function to use when showing a collapsible sub menu
     // (i.e. when mobile styles are used to make the sub menus collapsible)
     collapsibleHideDuration:0,		// duration for hide animation for collapsible sub menus - matters only if collapsibleHideFunction:null
     collapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },	// custom function to use when hiding a collapsible sub menu
     // (i.e. when mobile styles are used to make the sub menus collapsible)
     showOnClick:		false,		// show the first-level sub menus onclick instead of onmouseover (i.e. mimic desktop app menus) (matters only for mouse input)
     hideOnClick:		true,		// hide the sub menus on click/tap anywhere on the page
     noMouseOver:		false,		// disable sub menus activation onmouseover (i.e. behave like in touch mode - use just mouse clicks) (matters only for mouse input)
     keepInViewport:		true,		// reposition the sub menus if needed to make sure they always appear inside the viewport
     keepHighlighted:	true,		// keep all ancestor items of the current sub menu highlighted (adds the 'highlighted' class to the A's)
     markCurrentItem:	false,		// automatically add the 'current' class to the A element of the item linking to the current URL
     markCurrentTree:	true,		// add the 'current' class also to the A elements of all ancestor items of the current item
     rightToLeftSubMenus:	false,		// right to left display of the sub menus (check the CSS for the sub indicators' position)
     bottomToTopSubMenus:	false,		// bottom to top display of the sub menus
     collapsibleBehavior:	'default'	// parent items behavior in collapsible (mobile) view ('default', 'toggle', 'link', 'accordion', 'accordion-toggle', 'accordion-link')
     // 'default' - first tap on parent item expands sub, second tap loads its link
     // 'toggle' - the whole parent item acts just as a toggle button for its sub menu (expands/collapses on each tap)
     // 'link' - the parent item acts as a regular item (first tap loads its link), the sub menu can be expanded only via the +/- button
     // 'accordion' - like 'default' but on expand also resets any visible sub menus from deeper levels or other branches
     // 'accordion-toggle' - like 'toggle' but on expand also resets any visible sub menus from deeper levels or other branches
     // 'accordion-link' - like 'link' but on expand also resets any visible sub menus from deeper levels or other branches
   };

   return $;
 }));

// All the following JS assumes you are using both jQuery and Shopify's option_selection.js
// ======================================================
// wishlist
// ======================================================

function postToWishlist() {
  $("#wish_list").submit(function(e) {
    e.preventDefault();
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    $.ajax({
      url : formURL,
      type: "POST",
      data : postData,
      success:function(data, textStatus) {
        console.log(textStatus);
        $('.js-wish-list').find('.added_button').addClass('added_wishlist_product');
      },
      error: function() {
        $(this).append("<p>I'm afraid that didn't work.</p>");
      }
    });
  });
}

function removeFromWishlist($this) {
  // select parent li element
  var $elem = $this.closest("li");
  // get the id which is the selected variant tag
  var tagID = $elem.attr("id");
  var $form_remove = $("#remove .contact-form");

  // set the value of the input in the form to the selected variant
  $("#remove-value").attr("value", tagID);
  $.ajax({
    type: "POST",
    url : "/contact",
    data : $form_remove.serialize(),
    success:function(data) {
      console.log(textStatus);
      $elem.remove();
      if($("ul.wishlist li").length == 0) {
        $("#wishlist-email-link").empty().html("<p>Your wish list is currently empty.</p>");
      } else {
        updateEmailList();
      }
    },
    error: function(XMLHttpRequest, textStatus) {
      $(this).append("<p>I'm afraid that didn't work.</p>");
    }
  });
}

function updateEmailList() {
  var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
  $.ajax({
    url : currentURL,
    type: "GET",
    success:function(data, textStatus) {
      console.log(textStatus);
      var newEmailLink = $(data).find("#wishlist-email-link a");
      $("#wishlist-email-link").html(newEmailLink);
    }
  });
}

function selectCallback_wishlist(variant, selector) {

  // you will be using something like this if you are using Shopify's option_selection.js as a callback to update your images and stuff when the user chooses another variant from a product select element. Just add the bits below to what you already have in there. This will ensure when the customer picks another variant, the wish list form will update to the current variant.

  //Update wishlist form
  var $wishList = $(".js-wish-list");
  var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname;
  var newURL = currentURL + "?variant=" + variant.id;

  $.ajax({
    type: 'GET',
    url: newURL,
    success:function(data){
      $wishList.empty();
      var newData = $(data).find(".js-wish-list").html();
      $wishList.html(newData);

      // reset event listener for posting to wish list
      postToWishlist();
    }
  });
}

// ======================================================
// remove from wishlist
// ======================================================
$(".js-remove-button").on("click", function(e) {
  e.preventDefault();
  removeFromWishlist($(this));
});

// ======================================================
// add to cart from wishlist
// ======================================================
$(".js-add-to-cart").on("click", function(e) {
  e.preventDefault();
  variantID = $(this).attr("data-id");
  $('#product-select-wish-list').attr("value", variantID);
  alert(variantID);
  // uncomment next line if you want a product to be removed from the wish list when it is added to the cart
  //removeFromWishlist($(this));
  $('#add-variant').submit();
});

// ======================================================
// callback for option_selection.js
// ======================================================
// The following will have to be in your product template (without the comments wrapping it!) to initialize the option_selection.js

/* ======================== bootstrap-notify.min.js ===================== */

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){function s(s){var e=!1;return t('[data-notify="container"]').each(function(i,n){var a=t(n),o=a.find('[data-notify="title"]').text().trim(),r=a.find('[data-notify="message"]').html().trim(),l=o===t("<div>"+s.settings.content.title+"</div>").html().trim(),d=r===t("<div>"+s.settings.content.message+"</div>").html().trim(),g=a.hasClass("alert-"+s.settings.type);return l&&d&&g&&(e=!0),!e}),e}function e(e,n,a){var o={content:{message:"object"==typeof n?n.message:n,title:n.title?n.title:"",icon:n.icon?n.icon:"",url:n.url?n.url:"#",target:n.target?n.target:"-"}};a=t.extend(!0,{},o,a),this.settings=t.extend(!0,{},i,a),this._defaults=i,"-"===this.settings.content.target&&(this.settings.content.target=this.settings.url_target),this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"},"number"==typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset}),(this.settings.allow_duplicates||!this.settings.allow_duplicates&&!s(this))&&this.init()}var i={element:"body",position:null,type:"info",allow_dismiss:!0,allow_duplicates:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5e3,timer:1e3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};String.format=function(){for(var t=arguments[0],s=1;s<arguments.length;s++)t=t.replace(RegExp("\\{"+(s-1)+"\\}","gm"),arguments[s]);return t},t.extend(e.prototype,{init:function(){var t=this;this.buildNotify(),this.settings.content.icon&&this.setIcon(),"#"!=this.settings.content.url&&this.styleURL(),this.styleDismiss(),this.placement(),this.bind(),this.notify={$ele:this.$ele,update:function(s,e){var i={};"string"==typeof s?i[s]=e:i=s;for(var n in i)switch(n){case"type":this.$ele.removeClass("alert-"+t.settings.type),this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+t.settings.type),t.settings.type=i[n],this.$ele.addClass("alert-"+i[n]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+i[n]);break;case"icon":var a=this.$ele.find('[data-notify="icon"]');"class"===t.settings.icon_type.toLowerCase()?a.removeClass(t.settings.content.icon).addClass(i[n]):(a.is("img")||a.find("img"),a.attr("src",i[n]));break;case"progress":var o=t.settings.delay-t.settings.delay*(i[n]/100);this.$ele.data("notify-delay",o),this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i[n]).css("width",i[n]+"%");break;case"url":this.$ele.find('[data-notify="url"]').attr("href",i[n]);break;case"target":this.$ele.find('[data-notify="url"]').attr("target",i[n]);break;default:this.$ele.find('[data-notify="'+n+'"]').html(i[n])}var r=this.$ele.outerHeight()+parseInt(t.settings.spacing)+parseInt(t.settings.offset.y);t.reposition(r)},close:function(){t.close()}}},buildNotify:function(){var s=this.settings.content;this.$ele=t(String.format(this.settings.template,this.settings.type,s.title,s.message,s.url,s.target)),this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align),this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none"),(this.settings.delay<=0&&!this.settings.showProgressbar||!this.settings.showProgressbar)&&this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){"class"===this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"5px",zIndex:this.settings.z_index+2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:this.settings.z_index+1})},placement:function(){var s=this,e=this.settings.offset.y,i={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",zIndex:this.settings.z_index},n=!1,a=this.settings;switch(t('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){e=Math.max(e,parseInt(t(this).css(a.placement.from))+parseInt(t(this).outerHeight())+parseInt(a.spacing))}),this.settings.newest_on_top===!0&&(e=this.settings.offset.y),i[this.settings.placement.from]=e+"px",this.settings.placement.align){case"left":case"right":i[this.settings.placement.align]=this.settings.offset.x+"px";break;case"center":i.left=0,i.right=0}this.$ele.css(i).addClass(this.settings.animate.enter),t.each(Array("webkit-","moz-","o-","ms-",""),function(t,e){s.$ele[0].style[e+"AnimationIterationCount"]=1}),t(this.settings.element).append(this.$ele),this.settings.newest_on_top===!0&&(e=parseInt(e)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(e)),t.isFunction(s.settings.onShow)&&s.settings.onShow.call(this.$ele),this.$ele.one(this.animations.start,function(){n=!0}).one(this.animations.end,function(){s.$ele.removeClass(s.settings.animate.enter),t.isFunction(s.settings.onShown)&&s.settings.onShown.call(this)}),setTimeout(function(){n||t.isFunction(s.settings.onShown)&&s.settings.onShown.call(this)},600)},bind:function(){var s=this;if(this.$ele.find('[data-notify="dismiss"]').on("click",function(){s.close()}),this.$ele.mouseover(function(){t(this).data("data-hover","true")}).mouseout(function(){t(this).data("data-hover","false")}),this.$ele.data("data-hover","false"),this.settings.delay>0){s.$ele.data("notify-delay",s.settings.delay);var e=setInterval(function(){var t=parseInt(s.$ele.data("notify-delay"))-s.settings.timer;if("false"===s.$ele.data("data-hover")&&"pause"===s.settings.mouse_over||"pause"!=s.settings.mouse_over){var i=(s.settings.delay-t)/s.settings.delay*100;s.$ele.data("notify-delay",t),s.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",i).css("width",i+"%")}t<=-s.settings.timer&&(clearInterval(e),s.close())},s.settings.timer)}},close:function(){var s=this,e=parseInt(this.$ele.css(this.settings.placement.from)),i=!1;this.$ele.attr("data-closing","true").addClass(this.settings.animate.exit),s.reposition(e),t.isFunction(s.settings.onClose)&&s.settings.onClose.call(this.$ele),this.$ele.one(this.animations.start,function(){i=!0}).one(this.animations.end,function(){t(this).remove(),t.isFunction(s.settings.onClosed)&&s.settings.onClosed.call(this)}),setTimeout(function(){i||(s.$ele.remove(),s.settings.onClosed&&s.settings.onClosed(s.$ele))},600)},reposition:function(s){var e=this,i='[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])',n=this.$ele.nextAll(i);this.settings.newest_on_top===!0&&(n=this.$ele.prevAll(i)),n.each(function(){t(this).css(e.settings.placement.from,s),s=parseInt(s)+parseInt(e.settings.spacing)+t(this).outerHeight()})}}),t.notify=function(t,s){var i=new e(this,t,s);return i.notify},t.notifyDefaults=function(s){return i=t.extend(!0,{},i,s)},t.notifyClose=function(s){"warning"===s&&(s="danger"),"undefined"==typeof s||"all"===s?t("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):"success"===s||"info"===s||"warning"===s||"danger"===s?t(".alert-"+s+"[data-notify]").find('[data-notify="dismiss"]').trigger("click"):s?t(s+"[data-notify]").find('[data-notify="dismiss"]').trigger("click"):t('[data-notify-position="'+s+'"]').find('[data-notify="dismiss"]').trigger("click")},t.notifyCloseExcept=function(s){"warning"===s&&(s="danger"),"success"===s||"info"===s||"warning"===s||"danger"===s?t("[data-notify]").not(".alert-"+s).find('[data-notify="dismiss"]').trigger("click"):t("[data-notify]").not(s).find('[data-notify="dismiss"]').trigger("click")}});

/* ======================== Sticky-kit.min.js ===================== */

(function(){var b,f;b=this.jQuery||window.jQuery;f=b(window);b.fn.stick_in_parent=function(d){var A,w,J,n,B,K,p,q,k,E,t;null==d&&(d={});t=d.sticky_class;B=d.inner_scrolling;E=d.recalc_every;k=d.parent;q=d.offset_top;p=d.spacer;w=d.bottoming;null==q&&(q=0);null==k&&(k=void 0);null==B&&(B=!0);null==t&&(t="is_stuck");A=b(document);null==w&&(w=!0);J=function(a,d,n,C,F,u,r,G){var v,H,m,D,I,c,g,x,y,z,h,l;if(!a.data("sticky_kit")){a.data("sticky_kit",!0);I=A.height();g=a.parent();null!=k&&(g=g.closest(k));
if(!g.length)throw"failed to find stick parent";v=m=!1;(h=null!=p?p&&a.closest(p):b("<div />"))&&h.css("position",a.css("position"));x=function(){var c,f,e;if(!G&&(I=A.height(),c=parseInt(g.css("border-top-width"),10),f=parseInt(g.css("padding-top"),10),d=parseInt(g.css("padding-bottom"),10),n=g.offset().top+c+f,C=g.height(),m&&(v=m=!1,null==p&&(a.insertAfter(h),h.detach()),a.css({position:"",top:"",width:"",bottom:""}).removeClass(t),e=!0),F=a.offset().top-(parseInt(a.css("margin-top"),10)||0)-q,
u=a.outerHeight(!0),r=a.css("float"),h&&h.css({width:a.outerWidth(!0),height:u,display:a.css("display"),"vertical-align":a.css("vertical-align"),"float":r}),e))return l()};x();if(u!==C)return D=void 0,c=q,z=E,l=function(){var b,l,e,k;if(!G&&(e=!1,null!=z&&(--z,0>=z&&(z=E,x(),e=!0)),e||A.height()===I||x(),e=f.scrollTop(),null!=D&&(l=e-D),D=e,m?(w&&(k=e+u+c>C+n,v&&!k&&(v=!1,a.css({position:"fixed",bottom:"",top:c}).trigger("sticky_kit:unbottom"))),e<F&&(m=!1,c=q,null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),
h.detach()),b={position:"",width:"",top:""},a.css(b).removeClass(t).trigger("sticky_kit:unstick")),B&&(b=f.height(),u+q>b&&!v&&(c-=l,c=Math.max(b-u,c),c=Math.min(q,c),m&&a.css({top:c+"px"})))):e>F&&(m=!0,b={position:"fixed",top:c},b.width="border-box"===a.css("box-sizing")?a.outerWidth()+"px":a.width()+"px",a.css(b).addClass(t),null==p&&(a.after(h),"left"!==r&&"right"!==r||h.append(a)),a.trigger("sticky_kit:stick")),m&&w&&(null==k&&(k=e+u+c>C+n),!v&&k)))return v=!0,"static"===g.css("position")&&g.css({position:"relative"}),
  a.css({position:"absolute",bottom:d,top:"auto"}).trigger("sticky_kit:bottom")},y=function(){x();return l()},H=function(){G=!0;f.off("touchmove",l);f.off("scroll",l);f.off("resize",y);b(document.body).off("sticky_kit:recalc",y);a.off("sticky_kit:detach",H);a.removeData("sticky_kit");a.css({position:"",bottom:"",top:"",width:""});g.position("position","");if(m)return null==p&&("left"!==r&&"right"!==r||a.insertAfter(h),h.remove()),a.removeClass(t)},f.on("touchmove",l),f.on("scroll",l),f.on("resize",
y),b(document.body).on("sticky_kit:recalc",y),a.on("sticky_kit:detach",H),setTimeout(l,0)}};n=0;for(K=this.length;n<K;n++)d=this[n],J(b(d));return this}}).call(this);

/* ====================== tricky3.infinite-scroll.v2.min.js ======================== */

var __extends=this&&this.__extends||function(e,t){function i(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)},t3PageLoadHelpers;!function(e){e.loadImages=function(e,t){var i=this,n=$("img",e).length,s=1,o=!1;n.length?$("img",e).load(function(){++s>=n&&i.isRequestOn&&!o&&(t(e),o=!0)}).each(function(){this.complete&&$(this).load()}):t(e)},e.savePageState=function(t){if(void 0===t&&(t={key:"",value:""}),history.pushState){var i="",n=t.key,s=t.value;if(e.isQueryStringKeyInUrl(n))i=e.updateQueryStringParameter(window.location.href,n,encodeURIComponent(s));else{var o=n+"="+encodeURIComponent(s);o=""!=window.location.search?window.location.search+"&"+o:"?"+o,i=window.location.protocol+"//"+window.location.host+window.location.pathname+o}i+=window.location.hash,window.history.pushState({path:i},"",i)}else console.log("History pushstate not supported")},e.getQueryStringByKey=function(e,t){void 0===t&&(t=""),e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var i=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=t?i.exec(t):i.exec(location.search);return null==n?"":decodeURIComponent(n[1].replace(/\+/g," "))},e.isQueryStringKeyInUrl=function(e){return-1!=location.search.indexOf(e)},e.updateQueryStringParameter=function(e,t,i){var n=new RegExp("([?&])"+t+"=.*?(&|$)","i"),s=-1!==e.indexOf("?")?"&":"?";return e.match(n)?e.replace(n,"$1"+t+"="+i+"$2"):e+s+t+"="+i},e.removeQueryStringParameter=function(e,t){var i=e.split("?");if(i.length>=2){for(var n=encodeURIComponent(t)+"=",s=i[1].split(/[&;]/g),o=s.length;o-- >0;)-1!==s[o].lastIndexOf(n,0)&&s.splice(o,1);return e=i[0]+"?"+s.join("&")}return e}}(t3PageLoadHelpers||(t3PageLoadHelpers={})),function(e){var t=function(){function t(i,n){this.isRequestOn=!1,this.currentLink=null,this.bothNextAndPreviousAvailableOnLoad=!1,this.links={next:"next",previous:"previous"},this.hasAllPagesLoaded=!1,this.element=i,this.settings=e.extend(t.defaultSettings,n),this.itemsWrapper=e(this.settings.selectors.itemsWrapper),this.paginationWrapper=e(this.settings.selectors.paginationWrapper),this.bothNextAndPreviousAvailableOnLoad=e(this.settings.selectors.nextPageLink,this.paginationWrapper).length&&e(this.settings.selectors.previousPageLink,this.paginationWrapper).length}return t.prototype.getPage=function(t,i){var n=this;this.isRequestOn||e.ajax({url:t,type:"get",beforeSend:function(){n.isRequestOn=!0,"function"==typeof n.settings.callBacks.beforePageLoad&&n.settings.callBacks.beforePageLoad()},success:function(e){i(e)}})},t.defaultSettings={selectors:{itemsWrapper:".collection-matrix",item:"li",nextPageLink:"#NextPaginationLink a",previousPageLink:"#PreviousPaginationLink a",paginationWrapper:".pagination",scrollableElem:null},manualLoading:!1,pageQueryStringKey:"page",waitForImagesToBeLoaded:!1,enablePageState:!1,throttleDelay:100,callBacks:{onAllPagesLoaded:function(){},onPageLoad:function(e){},beforePageLoad:function(){}}},t}(),i=function(t){function i(e,i){t.call(this,e,i)}return __extends(i,t),i.prototype.init=function(){this._bindEvents()},i.prototype._bindEvents=function(){var t=this;this.paginationWrapper.on("click",this.settings.selectors.nextPageLink,function(i){i.preventDefault(),t.linkedClicked=t.links.next,t.currentLink=e(this).attr("href"),t.getPage(t.currentLink,function(e){t._pageLoadedSuccess(e)})}),this.paginationWrapper.on("click",this.settings.selectors.previousPageLink,function(i){i.preventDefault(),t.linkedClicked=t.links.previous,t.currentLink=e(this).attr("href"),t.getPage(t.currentLink,function(e){t._pageLoadedSuccess(e)})})},i.prototype._updateNextAndPreviousLinks=function(t){var i=t.find(this.settings.selectors.nextPageLink),n=t.find(this.settings.selectors.previousPageLink),s=e(this.settings.selectors.nextPageLink,this.paginationWrapper),o=e(this.settings.selectors.previousPageLink,this.paginationWrapper),a=!0,r=!0;this.bothNextAndPreviousAvailableOnLoad&&(this.linkedClicked==this.links.previous&&(a=!1),this.linkedClicked==this.links.next&&(r=!1)),a=s.length&&a,r=o.length&&r,a&&(i.length?s.replaceWith(i):s.remove()),r&&(n.length?o.replaceWith(n):o.remove()),this.hasAllPagesLoaded=!e(this.settings.selectors.nextPageLink,this.paginationWrapper).length&&!e(this.settings.selectors.previousPageLink,this.paginationWrapper).length},i.prototype._pageLoadedSuccess=function(t){var i=this,n=e(t),s=n.find(this.settings.selectors.item);this._updateNextAndPreviousLinks(n),this.settings.waitForImagesToBeLoaded?t3PageLoadHelpers.loadImages(s,function(e){i._processingComplete(e)}):this._processingComplete(s)},i.prototype._processingComplete=function(t){if(this.itemsWrapper.append(e("<div/>").append(t).html()),this.settings.enablePageState){var i=this.currentLink,n=t3PageLoadHelpers.getQueryStringByKey(this.settings.pageQueryStringKey,i);t3PageLoadHelpers.savePageState({key:this.settings.pageQueryStringKey,value:n})}"function"==typeof this.settings.callBacks.onPageLoad&&this.settings.callBacks.onPageLoad(t),this.hasAllPagesLoaded&&"function"==typeof this.settings.callBacks.onAllPagesLoaded&&this.settings.callBacks.onAllPagesLoaded(),this.isRequestOn=!1},i}(t),n=function(t){function i(i,n){t.call(this,i,n),this.scrollTimer=0,this.resizeTimer=0,this.linkedLoaded=null,this.nextPageLink=null,this.previousPageLink=null,this.scrollableElement=e(this.settings.selectors.scrollableElem?this.settings.selectors.scrollableElem:window)}return __extends(i,t),i.prototype.init=function(){var e=this;this._loadLinks(),this.scrollableElement.on("scroll",function(t){i.throttle(function(t){e.isRequestOn||e._scrollEventHandler()},e.settings.throttleDelay)()})},i.prototype._loadLinks=function(){this.nextPageLink=e(this.settings.selectors.nextPageLink,this.paginationWrapper),this.previousPageLink=e(this.settings.selectors.previousPageLink,this.paginationWrapper)},i.prototype._scrollEventHandler=function(){var e=this;requestAnimationFrame(function(){e._trickyInfiniteScroll()})},i.prototype._trickyInfiniteScroll=function(){var t=this,i=e(this.scrollableElement).scrollTop()+e(this.scrollableElement).height(),n=e(this.settings.selectors.item+":visible:last",this.element);if((n.length?n.offset().top:e(this.settings.selectors.item+":last",this.element).offset().top)+e(this.settings.selectors.item+":visible:last",this.element).height()<=i&&this.nextPageLink){var s=this.nextPageLink.attr("href");this.getPage(s,function(e){t._pageLoadedSuccess(e)})}else this.isRequestOn=!1,this.nextPageLink||(e(this.settings.selectors.nextPageLink,this.paginationWrapper).remove(),this.hasAllPagesLoaded||(this.hasAllPagesLoaded=!0,"function"==typeof this.settings.callBacks.onAllPagesLoaded&&this.settings.callBacks.onAllPagesLoaded()))},i.prototype._updateNextAndPreviousLinks=function(e){var t=e.find(this.settings.selectors.nextPageLink);e.find(this.settings.selectors.previousPageLink);t.length?this.nextPageLink=t:this.nextPageLink=null},i.prototype._pageLoadedSuccess=function(t){var i=this,n=e(t),s=n.find(this.settings.selectors.item);this._updateNextAndPreviousLinks(n),this.settings.waitForImagesToBeLoaded?t3PageLoadHelpers.loadImages(s,function(e){i._processingComplete(e)}):this._processingComplete(s)},i.prototype._processingComplete=function(t){this.itemsWrapper.append(e("<div/>").append(t).html()),"function"==typeof this.settings.callBacks.onPageLoad&&this.settings.callBacks.onPageLoad(t),this.isRequestOn=!1},i.prototype._unbindScrollingEvent=function(){},i.throttle=function(e,t){void 0===t&&(t=10);var n,s,o=!1,a=function(){o=!1,e.apply(n,s)};return function(){n=this,s=arguments,o||(o=!0,setTimeout(a,t||i.SCROLL_THROTTLE_DEFAULT_DELAY))}},i.scrollEventHandlerFuncName="_scrollEventHandler",i.SCROLL_THROTTLE_DEFAULT_DELAY=500,i}(t);e.fn.t3PageLoad=function(t){var s=null;return(s=t.manualLoading?new i(e(this),t):new n(e(this),t)).init(),s}}(jQuery);

/* ======================= ajax pagination ================== */

(function($) {
  $(document).ready(function() {
    wst.go()
  });
  var wst = {
    atTimeout: null,
    go: function() {
      this._scrollTop();
      this._infinitescrolling();
    },

    _infinitescrolling: function() {
      if ($(".infinite-scrolling").length > 0) {
        $(".loading-product").hide();
        $(".infinite-scrolling a").click(function(n) {
          n.preventDefault();
          if (!$(this).hasClass("disabled")) {
            wst.doInfiniteScrolling()
          }
        })
      }
    },
    doInfiniteScrolling: function() {
      var n = $(".collection-wrapper .product-wrapper");

      if (!n.length) {
        n = $(".collection-wrapper .product-wrapper.list-view")
      }
      if (n) {
        var r = $(".infinite-scrolling a").first();
        $.ajax({
          type: "GET",
          url: r.attr("href"),
          beforeSend: function() {

            $(".loading-product").show();
          },
          success: function(i) {
            wst.hideLoading();
            $(".loading-product").hide();
            var s = $(i).find(".collection-wrapper .product-wrapper");
            if (!s.length) {
              s = $(i).find(".collection-wrapper .product-wrapper .col-xl-12")
            }
            if (s.length) {
              if (s.hasClass("product-wrapper")) {
                if (window.product_image_resize) {
                  s.children().find("img").fakecrop({
                    fill: window.images_size.is_crop,
                    widthSelector: ".product-wrapper .product-box .img-block",
                    ratioWrapper: window.images_size
                  })
                }
              }
              n.append(s.children());
              if ($(i).find(".infinite-scrolling").length > 0) {
                r.attr("href", $(i).find(".infinite-scrolling a").attr("href"))
              } else {
                r.hide();
                r.next().show()
              }
              if ($(".spr-badge").length > 0) {
                return window.SPR.registerCallbacks(), window.SPR.initRatingHandler(), window.SPR.initDomEls(), window.SPR.loadProducts(), window.SPR.loadBadges()
              }
            }
          },
          error: function(n, r) {
            wst.hideLoading();
            $(".loading-product").hide();
            $(".ajax-error-message").text($.parseJSON(n.responseText).description);
            wst.showModal(".ajax-error-modal")
          },
          dataType: "html"
        })
      }
    },

    _sidebargetContent: function(n) {
      $.ajax({
        type: "get",
        url: n,
        beforeSend: function() {
          wst.showLoading();
          $('.collection_ajax_loader').show();
        },
        success: function(e) {
          $('.collection_ajax_loader').hide();
          wst._infinitescrolling();
        },
        error: function(n, cart) {
          wst.hideLoading();
          $(".loading-modal").hide();
          $('.collection_ajax_loader').hide();
          $(".ajax-error-message").text($.parseJSON(n.responseText).description);
          wst.showModal(".ajax-error-modal")
        }
      })
    },

    _scrollTop: function() {
      $("#back-top").click(function() {
        $("body,html").animate({
          scrollTop: 0
        }, 400);
        return false
      })
    },
    showLoading: function() {
      $(".loading").show()
    },
    hideLoading: function() {
      $(".loading").hide()
    },

  }

  })(jQuery);

/* ================ compare ==================== */

var shop_currency_val = $('#shop-currency').text();

(function(e) {

  /* Compare Product*/
  var storage = e.localStorage;
  var compare = {};

  var total_compare = 4;
  if (storage.isSet('compare')) {
    compare = storage.get('compare');
  } else {
    storage.set('compare', {});
  }
  e(document).ready(function() {
    t.init()
  });
  var t = {
    KidsTimeout: null,
    init: function() {
      this.initCompare();
      this.initRemoveCompare();
      this.initModal();
    },
    showModal: function(n) {
      e(n).fadeIn(500);
    },
    initModal: function() {
      e(".close-modal").click(function() {
        clearTimeout(t.KidsTimeout);
        e(".compare_modal").hide()
      })
    },

    compare_to_table: function(data) {

      if (Object.keys(data).length <= 0) {
        return '';
      }
      var html = '';
      var i = 0;

      var end_check = (Object.keys(data).length - 1);
      var width_tr = (end_check > 0) ? (90 / (Object.keys(data).length)) : 90;
      var data_html = '';
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        data_html = data_html + '<th class="item-row ' + el.handle + '"  id="product-' + el.id + '"><button type="button" class="remove-compare" aria-label="Close" data-handle="' + el.handle + '"> '+window.remove+ ' </button></th>';
        //Start title 
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name" >' + window.product_name + '</th>';
        }
        
        var _name = el.title;
        var _name_default = _name.split('|')[0];
        var _name_json = _name.substr(_name.indexOf(":") + 1);
        var _id = el.id;

        html = html + '<td width="' + width_tr + '%"  class="' + el.handle + ' grid-link__title"> <span class="compare_lang_trans" data-trans="#'+_id+'_pro_title">' + _name_default + '</span><span class="hide" id="'+_id+'_pro_title">'+_name_json+'</span></td>';
        
        if (i >= end_check) {
          html = html + '</tr>';
        }
        // End Title 
        
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name " >' + window.product_image +'</th>';

        }
        // start product image
        html = html + '<td width="' + width_tr + '%" class="item-row ' + el.handle + '" id="product-'+el.variants[0].id+'"> <img src="' + el.featured_image + '"  width="185" class="featured-image"/> ' + '<div class="product-price product_price"> ';

        if (is_sale) {
          html = html + '<strong>On Sale</strong>' + '<span class="money">'+ Shopify.formatMoney(el.price, shop_currency_val) +'</span>';
        } else {
          html = html + '<span class="money">'+ Shopify.formatMoney(el.price, shop_currency_val) +'</span>';
        }
        html = html + '</div>';
        //convert_currency(el.price,'3');

        setTimeout(function(){
          currenciesCallbackSpecial('.product_price span.money');
        },100);

        if (el.variants.length > 1) {          
          html = html + '<a class="select-option-cls btn btn-theme btn-theme-4" href="#" onclick="location.href=\'/products/' + el.handle + '\'">' + window.select_options + '</a>';
        } else {
          html = html + '<form  action="/cart/add" method="post" class="variants clearfix" id="cart-form-'  + el.variants[0].id  + '">';
          html = html + '<input type="hidden" name="id" value="' + el.variants[0].id +'" />';   
          html = html + '<button title="Add to Cart" data-pid="' + el.variants[0].id + '" class="add-to-cart btn btn-secondary">Add to Cart</button>';
          html = html + '</form>';
        }
      

        html = html + ' </td>';

        if (i >= end_check) {
          html = html + '</tr>';
        }
        // End product image
      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name" >' + window.product_desc +'</th>';

        }        
        html = html + '<td width="' + width_tr + '%" class="' + el.handle + ' "> <p class="description-compare"> ' + el.description.replace(/(<([^>]+)>)/ig, "").split(" ").splice(0, 15).join(" ") + "..." + ' </p> </td>';
        if (i >= end_check) {
          html = html + '<tr>';
        }

      }
      for (i = 0; i <= end_check; i++) {
        var el = data[i];
        var is_sale = false;
        if (el.compare_at_price > el.price) {
          is_sale = true
        }
        if (i == 0) {
          html = html + '<tr>';
          html = html + '<th width="15%" class="product-name" > ' + window.availability +' </th>';

        }

        var avai_stock = (el.available) ? window.available_stock : window.unavailable_stock;
        html = html + '<td   width="' + width_tr + '%" class="available-stock ' + el.handle + '"> <p> ' + avai_stock + ' </p> </td>';
        if (i >= end_check) {
          html = html + '<tr>';
        }

      }
      e(".th-compare").html('<td>Action</td>'+data_html);
      e("#table-compare").html(html);  


      e(document).on('click','.add-to-cart', function(event) {
        event.preventDefault();
        if (e(this).attr("disabled") != "disabled") {
          var r = e(this).parents(".item-row");
          var i = e(r).attr("id");
          i = i.match(/\d+/g);
          if (!window.ajax_cart) {
            e("#cart-form-" + i).submit()
          } else {
            var s = e("#cart-form-" + i + " select[name=id]").val();
            if (!s) {
              s = e("#cart-form-" + i + " input[name=id]").val()
            }
            var o = e("#cart-form-" + i + " input[name=quantity]").val();
            if (!o) {
              o = 1
            }
            var a = e(r).find(".featured-image").attr("src");
            var p = e(r).find(".grid-link__title").text();
            var amt = e(r).find(".product_price span.money").text();                         
            t.compareAjaxAddToCart(s, o, a, p, amt)

          }
        }
        return false

      });
      
 },

    compareAjaxAddToCart: function(n, r, a, p, amt) {
      e.ajax({
        type: "post",
        url: "/cart/add.js",
        data: "quantity=" + r + "&id=" + n,
        dataType: "json",
        beforeSend: function() {
          e(".ajax-success-compare-modal").fadeOut(500);
          //t.showLoading()                    
        },
        success: function(n) {

          //t.hideLoading();  
          t.showModal(".ajax-success-modal");
          e(".ajax-success-modal").find(".ajax-product-image").attr("src", a);
          e(".ajax-success-modal").find(".added-to-wishlist").hide();
          e(".ajax-success-modal").find(".added-to-cart").show();
          e(".ajax-success-modal").find(".ajax-product-title").text(p);
          e(".ajax-success-modal").find(".ajax_price").text(amt);
          // t.updateDropdownCart()
        },
        error: function(n, r) {
          //t.hideLoading();
          e(".ajax-error-message").text(e.parseJSON(n.responseText).description);
          t.showModal(".ajax-error-modal")
        }
      })
    },

    modal_compare: function(compare){
      if (!e.isEmptyObject(compare)) {
        // e(".error-compare").hide(20);
        var list_id = '';
        var json_compare = [];
        var check_end = 0;
        var compare_size = (Object.keys(compare).length - 1);
        e.each(compare, function(index, el) {
          var json_url = "/products/" + el + ".js";
          if (e.trim(el) != "") {
            jQuery.getJSON(json_url, function(product) {
              json_compare[check_end] = product;
              if (check_end >= compare_size) {
                t.compare_to_table(json_compare);
              }
              check_end += 1;
            });
          }
        });
        e("#moda-compare").fadeIn();       
      }
    },

    initCompare: function(){
      e(document).on('click','.compare', function(event) {
        event.preventDefault();
        //t.showLoading();
        /* Act on the event */
        var ethis = e(this);
        var pid = e(this).data('pid');

        compare = storage.get('compare');

        if (e.isEmptyObject(compare)) {
          compare = {};
        }
        var check_compare = true;
        if (Object.keys(compare).length >= total_compare) {          
          $.notify({
            icon: 'fa fa-check',
            title: 'warning',
            message: window.compare_note
          },{
            element: 'body',
            position: null,
            type: "warning",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
              from: "top",
              align: "left"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 2000,
            timer: 4000,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            icon_type: 'class'
          });
          setTimeout(function(){
            t.modal_compare(compare);
          },1500);

        } else {
          for (var i = 1; i <= 4; i++) {
            if (compare['p' + i] == "" || compare['p' + i] == undefined) {
              compare['p' + i] = pid;
              break;
            } else if (compare['p' + i] == pid) {
              ethis.addClass('added');
              check_compare = false;
              t.modal_compare(compare);

              break;
            }
          }
          if (check_compare) {
            storage.set('compare', compare);
            t.modal_compare(compare);
            ethis.addClass('add-success');
            e("[data-pid='"+pid+"']").addClass('added');//.text(window.added_to_cmp);          
          }
        }
        //t.hideLoading();
      });
    },

    initRemoveCompare: function(){
      e(document).on('click', '.remove-compare', function(event) {
        event.preventDefault();
        /* Act on the event */

        var id = e(this).data('handle');
        e("." + id).fadeOut(600).remove();
        e("[data-pid='"+id+"']").removeClass('added add-success');//.text(window.add_to_cmp);
        e.each(compare, function(index, el) {
          if (el == id) {
            compare[index] = "";
            delete compare[index];
          }
        });
        storage.set('compare', compare);
      });

    }
  }
  })(jQuery)
