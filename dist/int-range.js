(function () {var a={},d=function(r){return function(e){return e+r}},g=function(r){return function(e){return e-r}},h=function(r){return r?d(1):g(1)},j=function(r){return function(e){return e<=r}},k=function(r){return function(e){return e>=r}},c=function(r){return r%2==0},e=function(r){return r%2!=0},f=function(r){var e=r.from,n=void 0===e?0:e,t=r.till,$=void 0===t?20:t,c=r.stepsOf,o=void 0===c?1:c,f=r.sequence,u={},i=n<$;return u.next=!0===i?d(o):g(o),f&&"function"==typeof f&&(u.next=f(h(i))),u.hasNext=!0===i?j($):k($),u},i=function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=[],n=f(r),t=n.next,$=n.hasNext,c=r.from;$(c);)e.push(c),c=t(c);return e};a.ints=i;var l=function(r,e){var n=r.stepsOf,t=void 0===n?1:n,$=r.validator,c=void 0===$?function(){return!1}:$;return function(r){for(var n=0,$=r;n<t;)$=e($),c($)&&(n+=1);return $}},b=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return l(r,e)}};a.sequencer=b;var m=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.validator=c,b(r)};a.even=m;var n=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.validator=e,b(r)};a.odd=n;var o=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.validator=function(e){return e%r.of==0},b(r)};a.multiples=o;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=a}else if(typeof define==="function"&&define.amd){define(function(){return a})}})();