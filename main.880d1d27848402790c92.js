!function(e){function t(t){for(var r,o,d=t[0],s=t[1],l=t[2],c=0,g=[];c<d.length;c++)o=d[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&g.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);g.length;)g.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,d=1;d<n.length;d++){var s=n[d];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={0:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var d=window.webpackJsonp=window.webpackJsonp||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var u=s;i.push([121,1]),n()}({121:function(e,t,n){n(122),e.exports=n(308)},308:function(e,t,n){"use strict";n.r(t);n(309),n(310),n(311),n(312);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";r(this,e);var a=this.element=document.createElement("div");a.classList.add("note"),a.setAttribute("draggable","true");var i=document.createElement("div");i.classList.add("note__person");var o=document.createElement("textarea");a.append(i),a.append(o),o.textContent=n,t?this.element.setAttribute("data-note-id",t):(this.element.setAttribute("data-note-id",e.idCounter),e.idCounter++),a.addEventListener("dragstart",this.dragstart.bind(this)),a.addEventListener("dragend",this.dragend.bind(this)),a.addEventListener("dragenter",this.dragenter.bind(this)),a.addEventListener("dragover",this.dragover.bind(this)),a.addEventListener("dragleave",this.dragleave.bind(this)),a.addEventListener("drop",this.drop.bind(this))}return i(e,[{key:"dragstart",value:function(t){e.dragged=this.element,this.element.classList.add("dragged"),t.stopPropagation()}},{key:"dragend",value:function(t){t.stopPropagation(),e.dragged=null,this.element.classList.remove("dragged"),document.querySelectorAll(".note").forEach((function(e){return e.classList.remove("under")}))}},{key:"dragenter",value:function(t){t.stopPropagation(),e.dragged&&this.element!==e.dragged&&this.element.classList.add("under")}},{key:"dragover",value:function(t){t.preventDefault(),t.stopPropagation(),e.dragged&&(this.element,e.dragged)}},{key:"dragleave",value:function(t){t.stopPropagation(),e.dragged&&this.element!==e.dragged&&this.element.classList.remove("under")}},{key:"drop",value:function(t){if(t.stopPropagation(),e.dragged&&this.element!==e.dragged)if(this.element.parentElement===e.dragged.parentElement){var n=Array.from(this.element.parentElement.querySelectorAll(".note"));n.indexOf(this.element)<n.indexOf(e.dragged)?this.element.parentElement.insertBefore(e.dragged,this.element):this.element.parentElement.insertBefore(e.dragged,this.element.nextElementSibling)}else this.element.parentElement.insertBefore(e.dragged,this.element)}},{key:"column",get:function(){return this.element.closest(".column")}}]),e}();o.idCounter=0,o.dragges=null;var d=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;r(this,e);var n=this;this.notes=[];var a=this.element=document.createElement("div");a.classList.add("column"),a.setAttribute("draggable","true"),t?a.setAttribute("data-column-id",t):(a.setAttribute("data-column-id",e.idCounter),e.idCounter++);var i="";switch(e.idCounter){case 1:i="Беклог";break;case 2:i="В работе";break;case 3:i="Выполнена";break;case 4:i="Сдана";break;default:i="Новый столбец"}a.innerHTML='   \n        <div class="column-header__container"><span class="process-icon"></span>\n            <p class="column-header" >'.concat(i,'</p>\n            <span class="delete-column">x</span>\n        </div>\n        <div data-notes></div>\n        <p class="column-footer">\n            <span data-action-addNote class="action"> + </span>\n        </p>\n        ');var d=a.querySelector("[data-action-addNote]");d.addEventListener("click",(function(e){var t=new o;n.add(t)}));var s=a.querySelector(".column-header");s.addEventListener("dblclick",(function(e){s.setAttribute("contenteditable",!0),s.focus(),s.classList.add("edit")})),s.addEventListener("blur",(function(e){s.removeAttribute("contenteditable",!0),s.classList.remove("edit")})),a.addEventListener("dragover",this.dragover.bind(this)),a.addEventListener("drop",this.drop.bind(this));var l=a.querySelector(".delete-column");l.addEventListener("click",(function(e){l.closest(".column").remove()}))}return i(e,[{key:"add",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r=0,a=t;r<a.length;r++){var i=a[r];this.notes.includes(i)||(this.notes.push(i),this.element.querySelector("[data-notes]").append(i.element))}}},{key:"dragover",value:function(e){e.preventDefault()}},{key:"drop",value:function(){if(o.dragged)return this.querySelector("[data-notes]").append(o.dragged)}}]),e}();d.idCounter=0,document.querySelector("[data-action-addColumn]").addEventListener("click",(function(e){var t=new d;document.querySelector(".columns").append(t.element)}))},309:function(e,t,n){},310:function(e,t,n){},311:function(e,t,n){},312:function(e,t,n){}});