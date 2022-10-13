import{j as m,a as T}from"./jsx-runtime.b35027c6.js";import{L as J}from"./react-router-dom.b57375c1.js";import{p as w}from"./index.9ab846ab.js";import{c as Z}from"./clsx.m.c5ef2623.js";import"./iframe.6fb498a2.js";import"./objectWithoutPropertiesLoose.5e7699d1.js";function g(e){if(e===null||e===!0||e===!1)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){h(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new Date(e.getTime()):typeof e=="number"||t==="[object Number]"?new Date(e):((typeof e=="string"||t==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function K(e,t){h(2,arguments);var r=p(e).getTime(),a=g(t);return new Date(r+a)}function ee(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function te(e){h(1,arguments);var t=p(e);return!isNaN(t)}var k={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function re(e,t,r){r=r||{};var a;return typeof k[e]=="string"?a=k[e]:t===1?a=k[e].one:a=k[e].other.replace("{{count}}",t),r.addSuffix?r.comparison>0?"in "+a:a+" ago":a}function E(e){return function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=t.width?String(t.width):e.defaultWidth,a=e.formats[r]||e.formats[e.defaultWidth];return a}}var ae={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ne={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},ie={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},oe={date:E({formats:ae,defaultWidth:"full"}),time:E({formats:ne,defaultWidth:"full"}),dateTime:E({formats:ie,defaultWidth:"full"})};const se=oe;var ue={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function de(e,t,r,a){return ue[e]}function M(e){return function(t,r){var a=r||{},n=a.context?String(a.context):"standalone",i;if(n==="formatting"&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,d=a.width?String(a.width):o;i=e.formattingValues[d]||e.formattingValues[o]}else{var s=e.defaultWidth,c=a.width?String(a.width):e.defaultWidth;i=e.values[c]||e.values[s]}var l=e.argumentCallback?e.argumentCallback(t):t;return i[l]}}var ce={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},le={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},fe={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},me={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},he={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ve={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}};function ge(e,t){var r=Number(e),a=r%100;if(a>20||a<10)switch(a%10){case 1:return r+"st";case 2:return r+"nd";case 3:return r+"rd"}return r+"th"}var we={ordinalNumber:ge,era:M({values:ce,defaultWidth:"wide"}),quarter:M({values:le,defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:M({values:fe,defaultWidth:"wide"}),day:M({values:me,defaultWidth:"wide"}),dayPeriod:M({values:he,defaultWidth:"wide",formattingValues:ve,defaultFormattingWidth:"wide"})};const pe=we;function ye(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.match(e.matchPattern);if(!a)return null;var n=a[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];o=r.valueCallback?r.valueCallback(o):o;var d=t.slice(n.length);return{value:o,rest:d}}}function O(e){return function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.width,n=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],i=t.match(n);if(!i)return null;var o=i[0],d=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?Te(d,function(f){return f.test(o)}):be(d,function(f){return f.test(o)}),c;c=e.valueCallback?e.valueCallback(s):s,c=r.valueCallback?r.valueCallback(c):c;var l=t.slice(o.length);return{value:c,rest:l}}}function be(e,t){for(var r in e)if(e.hasOwnProperty(r)&&t(e[r]))return r}function Te(e,t){for(var r=0;r<e.length;r++)if(t(e[r]))return r}var De=/^(\d+)(th|st|nd|rd)?/i,Ce=/\d+/i,xe={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Me={any:[/^b/i,/^(a|c)/i]},Oe={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pe={any:[/1/i,/2/i,/3/i,/4/i]},We={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ne={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},ke={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ue={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Se={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Ye={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ee={ordinalNumber:ye({matchPattern:De,parsePattern:Ce,valueCallback:function(e){return parseInt(e,10)}}),era:O({matchPatterns:xe,defaultMatchWidth:"wide",parsePatterns:Me,defaultParseWidth:"any"}),quarter:O({matchPatterns:Oe,defaultMatchWidth:"wide",parsePatterns:Pe,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:O({matchPatterns:We,defaultMatchWidth:"wide",parsePatterns:Ne,defaultParseWidth:"any"}),day:O({matchPatterns:ke,defaultMatchWidth:"wide",parsePatterns:Ue,defaultParseWidth:"any"}),dayPeriod:O({matchPatterns:Se,defaultMatchWidth:"any",parsePatterns:Ye,defaultParseWidth:"any"})};const _e=Ee;var Fe={code:"en-US",formatDistance:re,formatLong:se,formatRelative:de,localize:pe,match:_e,options:{weekStartsOn:0,firstWeekContainsDate:1}};const Le=Fe;function qe(e,t){h(2,arguments);var r=g(t);return K(e,-r)}function u(e,t){for(var r=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return r+a}var Ie={y:function(e,t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return u(t==="yy"?a%100:a,t.length)},M:function(e,t){var r=e.getUTCMonth();return t==="M"?String(r+1):u(r+1,2)},d:function(e,t){return u(e.getUTCDate(),t.length)},a:function(e,t){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.toUpperCase();case"aaa":return r;case"aaaaa":return r[0];case"aaaa":default:return r==="am"?"a.m.":"p.m."}},h:function(e,t){return u(e.getUTCHours()%12||12,t.length)},H:function(e,t){return u(e.getUTCHours(),t.length)},m:function(e,t){return u(e.getUTCMinutes(),t.length)},s:function(e,t){return u(e.getUTCSeconds(),t.length)},S:function(e,t){var r=t.length,a=e.getUTCMilliseconds(),n=Math.floor(a*Math.pow(10,r-3));return u(n,t.length)}};const b=Ie;var He=864e5;function Re(e){h(1,arguments);var t=p(e),r=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),n=r-a;return Math.floor(n/He)+1}function S(e){h(1,arguments);var t=1,r=p(e),a=r.getUTCDay(),n=(a<t?7:0)+a-t;return r.setUTCDate(r.getUTCDate()-n),r.setUTCHours(0,0,0,0),r}function A(e){h(1,arguments);var t=p(e),r=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(r+1,0,4),a.setUTCHours(0,0,0,0);var n=S(a),i=new Date(0);i.setUTCFullYear(r,0,4),i.setUTCHours(0,0,0,0);var o=S(i);return t.getTime()>=n.getTime()?r+1:t.getTime()>=o.getTime()?r:r-1}function Ae(e){h(1,arguments);var t=A(e),r=new Date(0);r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0);var a=S(r);return a}var Ge=6048e5;function Qe(e){h(1,arguments);var t=p(e),r=S(t).getTime()-Ae(t).getTime();return Math.round(r/Ge)+1}function Y(e,t){h(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.weekStartsOn,i=n==null?0:g(n),o=r.weekStartsOn==null?i:g(r.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var d=p(e),s=d.getUTCDay(),c=(s<o?7:0)+s-o;return d.setUTCDate(d.getUTCDate()-c),d.setUTCHours(0,0,0,0),d}function G(e,t){h(1,arguments);var r=p(e,t),a=r.getUTCFullYear(),n=t||{},i=n.locale,o=i&&i.options&&i.options.firstWeekContainsDate,d=o==null?1:g(o),s=n.firstWeekContainsDate==null?d:g(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(a+1,0,s),c.setUTCHours(0,0,0,0);var l=Y(c,t),f=new Date(0);f.setUTCFullYear(a,0,s),f.setUTCHours(0,0,0,0);var C=Y(f,t);return r.getTime()>=l.getTime()?a+1:r.getTime()>=C.getTime()?a:a-1}function je(e,t){h(1,arguments);var r=t||{},a=r.locale,n=a&&a.options&&a.options.firstWeekContainsDate,i=n==null?1:g(n),o=r.firstWeekContainsDate==null?i:g(r.firstWeekContainsDate),d=G(e,t),s=new Date(0);s.setUTCFullYear(d,0,o),s.setUTCHours(0,0,0,0);var c=Y(s,t);return c}var Xe=6048e5;function Be(e,t){h(1,arguments);var r=p(e),a=Y(r,t).getTime()-je(r,t).getTime();return Math.round(a/Xe)+1}var x={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$e={G:function(e,t,r){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return r.era(a,{width:"abbreviated"});case"GGGGG":return r.era(a,{width:"narrow"});case"GGGG":default:return r.era(a,{width:"wide"})}},y:function(e,t,r){if(t==="yo"){var a=e.getUTCFullYear(),n=a>0?a:1-a;return r.ordinalNumber(n,{unit:"year"})}return b.y(e,t)},Y:function(e,t,r,a){var n=G(e,a),i=n>0?n:1-n;if(t==="YY"){var o=i%100;return u(o,2)}return t==="Yo"?r.ordinalNumber(i,{unit:"year"}):u(i,t.length)},R:function(e,t){var r=A(e);return u(r,t.length)},u:function(e,t){var r=e.getUTCFullYear();return u(r,t.length)},Q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return u(a,2);case"Qo":return r.ordinalNumber(a,{unit:"quarter"});case"QQQ":return r.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return r.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return r.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,r){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return u(a,2);case"qo":return r.ordinalNumber(a,{unit:"quarter"});case"qqq":return r.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return r.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return r.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,r){var a=e.getUTCMonth();switch(t){case"M":case"MM":return b.M(e,t);case"Mo":return r.ordinalNumber(a+1,{unit:"month"});case"MMM":return r.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return r.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return r.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,r){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return u(a+1,2);case"Lo":return r.ordinalNumber(a+1,{unit:"month"});case"LLL":return r.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return r.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return r.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,r,a){var n=Be(e,a);return t==="wo"?r.ordinalNumber(n,{unit:"week"}):u(n,t.length)},I:function(e,t,r){var a=Qe(e);return t==="Io"?r.ordinalNumber(a,{unit:"week"}):u(a,t.length)},d:function(e,t,r){return t==="do"?r.ordinalNumber(e.getUTCDate(),{unit:"date"}):b.d(e,t)},D:function(e,t,r){var a=Re(e);return t==="Do"?r.ordinalNumber(a,{unit:"dayOfYear"}):u(a,t.length)},E:function(e,t,r){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return r.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return r.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return r.day(a,{width:"short",context:"formatting"});case"EEEE":default:return r.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return u(i,2);case"eo":return r.ordinalNumber(i,{unit:"day"});case"eee":return r.day(n,{width:"abbreviated",context:"formatting"});case"eeeee":return r.day(n,{width:"narrow",context:"formatting"});case"eeeeee":return r.day(n,{width:"short",context:"formatting"});case"eeee":default:return r.day(n,{width:"wide",context:"formatting"})}},c:function(e,t,r,a){var n=e.getUTCDay(),i=(n-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return u(i,t.length);case"co":return r.ordinalNumber(i,{unit:"day"});case"ccc":return r.day(n,{width:"abbreviated",context:"standalone"});case"ccccc":return r.day(n,{width:"narrow",context:"standalone"});case"cccccc":return r.day(n,{width:"short",context:"standalone"});case"cccc":default:return r.day(n,{width:"wide",context:"standalone"})}},i:function(e,t,r){var a=e.getUTCDay(),n=a===0?7:a;switch(t){case"i":return String(n);case"ii":return u(n,t.length);case"io":return r.ordinalNumber(n,{unit:"day"});case"iii":return r.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return r.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return r.day(a,{width:"short",context:"formatting"});case"iiii":default:return r.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,r){var a=e.getUTCHours(),n=a/12>=1?"pm":"am";switch(t){case"a":case"aa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"aaa":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"aaaa":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},b:function(e,t,r){var a=e.getUTCHours(),n;switch(a===12?n=x.noon:a===0?n=x.midnight:n=a/12>=1?"pm":"am",t){case"b":case"bb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"bbb":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"bbbb":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},B:function(e,t,r){var a=e.getUTCHours(),n;switch(a>=17?n=x.evening:a>=12?n=x.afternoon:a>=4?n=x.morning:n=x.night,t){case"B":case"BB":case"BBB":return r.dayPeriod(n,{width:"abbreviated",context:"formatting"});case"BBBBB":return r.dayPeriod(n,{width:"narrow",context:"formatting"});case"BBBB":default:return r.dayPeriod(n,{width:"wide",context:"formatting"})}},h:function(e,t,r){if(t==="ho"){var a=e.getUTCHours()%12;return a===0&&(a=12),r.ordinalNumber(a,{unit:"hour"})}return b.h(e,t)},H:function(e,t,r){return t==="Ho"?r.ordinalNumber(e.getUTCHours(),{unit:"hour"}):b.H(e,t)},K:function(e,t,r){var a=e.getUTCHours()%12;return t==="Ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,t.length)},k:function(e,t,r){var a=e.getUTCHours();return a===0&&(a=24),t==="ko"?r.ordinalNumber(a,{unit:"hour"}):u(a,t.length)},m:function(e,t,r){return t==="mo"?r.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):b.m(e,t)},s:function(e,t,r){return t==="so"?r.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b.s(e,t)},S:function(e,t){return b.S(e,t)},X:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return q(i);case"XXXX":case"XX":return D(i);case"XXXXX":case"XXX":default:return D(i,":")}},x:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"x":return q(i);case"xxxx":case"xx":return D(i);case"xxxxx":case"xxx":default:return D(i,":")}},O:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+L(i,":");case"OOOO":default:return"GMT"+D(i,":")}},z:function(e,t,r,a){var n=a._originalDate||e,i=n.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+L(i,":");case"zzzz":default:return"GMT"+D(i,":")}},t:function(e,t,r,a){var n=a._originalDate||e,i=Math.floor(n.getTime()/1e3);return u(i,t.length)},T:function(e,t,r,a){var n=a._originalDate||e,i=n.getTime();return u(i,t.length)}};function L(e,t){var r=e>0?"-":"+",a=Math.abs(e),n=Math.floor(a/60),i=a%60;if(i===0)return r+String(n);var o=t||"";return r+String(n)+o+u(i,2)}function q(e,t){if(e%60===0){var r=e>0?"-":"+";return r+u(Math.abs(e)/60,2)}return D(e,t)}function D(e,t){var r=t||"",a=e>0?"-":"+",n=Math.abs(e),i=u(Math.floor(n/60),2),o=u(n%60,2);return a+i+r+o}const Ve=$e;function I(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Q(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}function ze(e,t){var r=e.match(/(P+)(p+)?/),a=r[1],n=r[2];if(!n)return I(e,t);var i;switch(a){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;case"PPPP":default:i=t.dateTime({width:"full"});break}return i.replace("{{date}}",I(a,t)).replace("{{time}}",Q(n,t))}var Je={p:Q,P:ze};const Ze=Je;var Ke=["D","DD"],et=["YY","YYYY"];function tt(e){return Ke.indexOf(e)!==-1}function rt(e){return et.indexOf(e)!==-1}function H(e,t,r){if(e==="YYYY")throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="YY")throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="D")throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"));if(e==="DD")throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(r,"`; see: https://git.io/fxCyr"))}var at=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,nt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,it=/^'([^]*?)'?$/,ot=/''/g,st=/[a-zA-Z]/;function R(e,t,r){h(2,arguments);var a=String(t),n=r||{},i=n.locale||Le,o=i.options&&i.options.firstWeekContainsDate,d=o==null?1:g(o),s=n.firstWeekContainsDate==null?d:g(n.firstWeekContainsDate);if(!(s>=1&&s<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,l=c==null?0:g(c),f=n.weekStartsOn==null?l:g(n.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var C=p(e);if(!te(C))throw new RangeError("Invalid time value");var $=ee(C),V=qe(C,$),F={firstWeekContainsDate:s,weekStartsOn:f,locale:i,_originalDate:C},z=a.match(nt).map(function(v){var y=v[0];if(y==="p"||y==="P"){var N=Ze[y];return N(v,i.formatLong,F)}return v}).join("").match(at).map(function(v){if(v==="''")return"'";var y=v[0];if(y==="'")return ut(v);var N=Ve[y];if(N)return!n.useAdditionalWeekYearTokens&&rt(v)&&H(v,t,e),!n.useAdditionalDayOfYearTokens&&tt(v)&&H(v,t,e),N(V,v,i.localize,F);if(y.match(st))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return v}).join("");return z}function ut(e){return e.match(it)[1].replace(ot,"'")}var j=36e5,X=6e4,dt=2,U={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ct=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,lt=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ft=/^([+-])(\d{2})(?::?(\d{2}))?$/;function mt(e,t){h(1,arguments);var r=t||{},a=r.additionalDigits==null?dt:g(r.additionalDigits);if(a!==2&&a!==1&&a!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof e=="string"||Object.prototype.toString.call(e)==="[object String]"))return new Date(NaN);var n=ht(e),i;if(n.date){var o=vt(n.date,a);i=gt(o.restDateString,o.year)}if(isNaN(i)||!i)return new Date(NaN);var d=i.getTime(),s=0,c;if(n.time&&(s=wt(n.time),isNaN(s)||s===null))return new Date(NaN);if(n.timezone){if(c=pt(n.timezone),isNaN(c))return new Date(NaN)}else{var l=new Date(d+s),f=new Date(0);return f.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),f.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),f}return new Date(d+s+c)}function ht(e){var t={},r=e.split(U.dateTimeDelimiter),a;if(r.length>2)return t;if(/:/.test(r[0])?(t.date=null,a=r[0]):(t.date=r[0],a=r[1],U.timeZoneDelimiter.test(t.date)&&(t.date=e.split(U.timeZoneDelimiter)[0],a=e.substr(t.date.length,e.length))),a){var n=U.timezone.exec(a);n?(t.time=a.replace(n[1],""),t.timezone=n[1]):t.time=a}return t}function vt(e,t){var r=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),a=e.match(r);if(!a)return{year:null};var n=a[1]&&parseInt(a[1]),i=a[2]&&parseInt(a[2]);return{year:i==null?n:i*100,restDateString:e.slice((a[1]||a[2]).length)}}function gt(e,t){if(t===null)return null;var r=e.match(ct);if(!r)return null;var a=!!r[4],n=P(r[1]),i=P(r[2])-1,o=P(r[3]),d=P(r[4]),s=P(r[5])-1;if(a)return Ct(t,d,s)?yt(t,d,s):new Date(NaN);var c=new Date(0);return!Tt(t,i,o)||!Dt(t,n)?new Date(NaN):(c.setUTCFullYear(t,i,Math.max(n,o)),c)}function P(e){return e?parseInt(e):1}function wt(e){var t=e.match(lt);if(!t)return null;var r=_(t[1]),a=_(t[2]),n=_(t[3]);return xt(r,a,n)?r*j+a*X+n*1e3:NaN}function _(e){return e&&parseFloat(e.replace(",","."))||0}function pt(e){if(e==="Z")return 0;var t=e.match(ft);if(!t)return 0;var r=t[1]==="+"?-1:1,a=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return Mt(a,n)?r*(a*j+n*X):NaN}function yt(e,t,r){var a=new Date(0);a.setUTCFullYear(e,0,4);var n=a.getUTCDay()||7,i=(t-1)*7+r+1-n;return a.setUTCDate(a.getUTCDate()+i),a}var bt=[31,null,31,30,31,30,31,31,30,31,30,31];function B(e){return e%400===0||e%4===0&&e%100}function Tt(e,t,r){return t>=0&&t<=11&&r>=1&&r<=(bt[t]||(B(e)?29:28))}function Dt(e,t){return t>=1&&t<=(B(e)?366:365)}function Ct(e,t,r){return t>=1&&t<=53&&r>=0&&r<=6}function xt(e,t,r){return e===24?t===0&&r===0:r>=0&&r<60&&t>=0&&t<60&&e>=0&&e<25}function Mt(e,t){return t>=0&&t<=59}const Ot=e=>e instanceof Date?R(e,"PP"):R(mt(e),"PP"),Pt=Ot;function W(e){const t=Pt(e.deadline);return m("div",{className:Z(e.className,"hero"),children:T("div",{className:"hero__contents",children:[m("div",{className:"hero__breadcrumb",children:m(J,{to:e.breadCrumbLink,children:"< Back to All Grants"})}),T("div",{className:"hero__header",children:[m("h1",{children:e.headerText}),m("div",{className:"hero__buttons",children:e.heroButtons})]}),T("div",{className:"hero__details",children:[T("dl",{children:[m("dt",{children:"Funding Organization"}),m("dd",{children:e.fundingOrgText}),m("dt",{children:"RFP Website"}),m("dd",{children:e.rfpWebsiteText}),m("dt",{children:"Purpose"}),m("dd",{children:e.purposeText})]}),T("div",{className:"hero__details-right",children:[T("dl",{className:"hero__deadline",children:[m("dt",{children:"DEADLINE"}),m("dd",{children:m("time",{dateTime:e.deadline.toJSON(),children:t})})]}),T("b",{children:["TOTAL WORD COUNT: ",e.totalWordCount]})]})]})]})})}W.propTypes={className:w.exports.string,headerText:w.exports.string,fundingOrgText:w.exports.string,rfpWebsiteText:w.exports.string,purposeText:w.exports.string,deadline:w.exports.instanceOf(Date),totalWordCount:w.exports.number,breadCrumbLink:w.exports.string,editLink:w.exports.string,copyLink:w.exports.string};W.defaultProps={};W.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{className:{type:{name:"string"},required:!1,description:""},headerText:{type:{name:"string"},required:!1,description:""},fundingOrgText:{type:{name:"string"},required:!1,description:""},rfpWebsiteText:{type:{name:"string"},required:!1,description:""},purposeText:{type:{name:"string"},required:!1,description:""},deadline:{type:{name:"instanceOf",value:"Date"},required:!1,description:""},totalWordCount:{type:{name:"number"},required:!1,description:""},breadCrumbLink:{type:{name:"string"},required:!1,description:""},editLink:{type:{name:"string"},required:!1,description:""},copyLink:{type:{name:"string"},required:!1,description:""}}};const _t={parameters:{storySource:{source:`import React from "react";
import Component from "./Hero";

export default {
  title: "Design/Hero",
  component: Component,
  argTypes: {
    headerText: {
      defaultValue: "Good Place Neighborhood Grant",
      control: {
        type: "text",
      },
    },
  },
};

export const Hero = (props) => <Component {...props} />;
;Hero.__docgenInfo={"description":"","methods":[],"displayName":"Hero"}`,locationsMap:{hero:{startLoc:{col:20,line:17},endLoc:{col:55,line:17},startBody:{col:20,line:17},endBody:{col:55,line:17}}}}},title:"Design/Hero",component:W,argTypes:{headerText:{defaultValue:"Good Place Neighborhood Grant",control:{type:"text"}}}},Wt=e=>m(W,{...e});Wt.__docgenInfo={description:"",methods:[],displayName:"Hero"};const Ft=["Hero"];export{Wt as Hero,Ft as __namedExportsOrder,_t as default};
//# sourceMappingURL=Hero.stories.80bdb0d9.js.map
