parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"vpUX":[function(require,module,exports) {
module.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:function(){return[]}},viewOptions:{type:Object,default:function(){return{}}},viewQuery:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:function(){return[]}},link:{type:String,default:null},sortField:{type:String,default:null}}};
},{}],"TxjQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=n(require("../../../mixins/layout")),e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={mixins:[t.default],data:function(){return{sortList:null}},computed:{textOptions:function(){var t=this.$lodash.mapValues(this.fields,function(t){return"string"==t.type||"integer"==t.type?t.name:null});return this.$lodash.pickBy(t,_.identity)},dateOptions:function(){var t=this.$lodash.mapValues(this.fields,function(t){return"date"==t.type?t.name:null});return this.$lodash.pickBy(t,_.identity)},timeOptions:function(){var t=e({__none__:"(".concat(this.$t("dont_show"),")")},this.$lodash.mapValues(this.fields,function(t){return"time"==t.type?t.name:null}));return this.$lodash.pickBy(t,_.identity)},colorOptions:function(){var t=e({__none__:"(".concat(this.$t("dont_show"),")")},this.$lodash.mapValues(this.fields,function(t){return["color","color-palette"].includes(t.interface)?t.name:null}));return this.$lodash.pickBy(t,_.identity)}},methods:{setOption:function(t,n){this.$emit("options",e({},this.viewOptions,i({},t,n)))}}};exports.default=o;
(function(){var t=exports.default||module.exports;"function"==typeof t&&(t=t.options),Object.assign(t,{render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(t){t.preventDefault()}}},[s("label",{staticClass:"style-3 required",attrs:{for:"spacing"}},[t._v(t._s(t.$t("layouts-calendar-date")))]),t._v(" "),s("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.date||"__none__",options:t.dateOptions,icon:"today"},on:{input:function(e){return t.setOption("date",e)}}}),t._v(" "),s("label",{staticClass:"style-3",attrs:{for:"spacing"}},[t._v(t._s(t.$t("layouts-calendar-time")))]),t._v(" "),s("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.time||"__none__",options:t.timeOptions,icon:"schedule"},on:{input:function(e){return t.setOption("time",e)}}}),t._v(" "),s("label",{staticClass:"style-3 required",attrs:{for:"spacing"}},[t._v(t._s(t.$t("layouts-calendar-title")))]),t._v(" "),s("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.title||"__none__",options:t.textOptions,icon:"title"},on:{input:function(e){return t.setOption("title",e)}}}),t._v(" "),s("label",{staticClass:"style-3",attrs:{for:"spacing"}},[t._v(t._s(t.$t("layouts-calendar-color")))]),t._v(" "),s("v-select",{staticClass:"select",attrs:{id:"spacing",value:t.viewOptions.color||"__none__",options:t.colorOptions,icon:"color_lens"},on:{input:function(e){return t.setOption("color",e)}}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-da3b6b",functional:void 0});})();
},{"../../../mixins/layout":"vpUX"}]},{},["TxjQ"], "__DirectusExtension__")