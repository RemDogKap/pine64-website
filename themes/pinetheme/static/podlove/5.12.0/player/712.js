/*! For license information please see 712.js.LICENSE.txt */
(self.webpackChunk_podlove_player=self.webpackChunk_podlove_player||[]).push([[712],{67669:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>n});const n=o(8234).Z},14234:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o(18649).Z},3993:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o(67366).Z},30140:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o(97795).Z},96405:(e,t,o)=>{"use strict";o.d(t,{Z:()=>n});const n=o(79548).Z},63368:(e,t,o)=>{"use strict";o.d(t,{C:()=>r});var n=o(21627),a=o(28707),r=(0,n.Z)(a.s6)},95570:(e,t,o)=>{"use strict";o.d(t,{a:()=>r,Q:()=>s});var n=o(21627),a=o(28707),r=(0,n.Z)(a.pF),s=(0,n.Z)(a.yN)},50381:(e,t,o)=>{"use strict";var n=o(91706);e.exports=function(e,t){var o,a,r,s,c,l,u=!1;t||(t={}),o=t.debug||!1;try{if(r=n(),s=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){o.stopPropagation(),t.format&&(o.preventDefault(),o.clipboardData.clearData(),o.clipboardData.setData(t.format,e))})),document.body.appendChild(l),s.selectNodeContents(l),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(n){o&&console.error("unable to copy using execCommand: ",n),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),u=!0}catch(n){o&&console.error("unable to copy using clipboardData: ",n),o&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),l&&document.body.removeChild(l),r()}return u}},91706:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);