parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"vpUX":[function(require,module,exports) {
module.exports={props:{primaryKeyField:{type:String,required:!0},fields:{type:Object,required:!0},items:{type:Array,default:function(){return[]}},viewOptions:{type:Object,default:function(){return{}}},viewQuery:{type:Object,default:function(){return{}}},loading:{type:Boolean,default:!1},lazyLoading:{type:Boolean,default:!1},selection:{type:Array,default:function(){return[]}},link:{type:String,default:null},sortField:{type:String,default:null}}};
},{}],"z1bV":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("../../../mixins/layout")),i=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t};function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return u(t)||s(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}var o={mixins:[t.default],data:function(){return{sortList:null}},computed:{fieldsInUse:function(){var t=this;return this.viewQuery&&this.viewQuery.fields?""===this.viewQuery.fields?[]:this.viewQuery.fields.split(",").filter(function(i){return t.fields[i]}):Object.values(this.fields).filter(function(t){return!1===t.primary_key}).slice(0,5).map(function(t){return t.field})}},created:function(){this.initSortList()},methods:{setSpacing:function(t){this.$emit("options",{spacing:t})},toggleField:function(t){var i=n(this.fieldsInUse);i.includes(t)?i.splice(i.indexOf(t),1):i.push(t);var e=this.sortList.map(function(t){return t.field}).filter(function(t){return i.includes(t)}).join();this.$emit("query",{fields:e})},sort:function(){var t=this;this.$emit("query",i({},this.viewQuery,{fields:this.sortList.map(function(t){return t.field}).filter(function(i){return t.fieldsInUse.includes(i)}).join()}))},initSortList:function(){var t=this;this.sortList=[].concat(n(this.fieldsInUse.map(function(i){return t.fields[i]})),n(Object.values(this.fields).filter(function(i){return!t.fieldsInUse.includes(i.field)})))}},watch:{fields:function(){this.initSortList()}}};exports.default=o;
(function(){var e=exports.default||module.exports;"function"==typeof e&&(e=e.options),Object.assign(e,{render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{on:{submit:function(e){e.preventDefault()}}},[s("fieldset",[s("legend",{staticClass:"style-3"},[e._v(e._s(e.$t("layouts-tabular-fields")))]),e._v(" "),s("draggable",{on:{end:e.sort},model:{value:e.sortList,callback:function(t){e.sortList=t},expression:"sortList"}},e._l(e.sortList,function(t){return s("div",{key:t.field,staticClass:"draggable"},[s("v-checkbox",{key:t.field,staticClass:"checkbox",attrs:{id:t.field,label:t.name,value:t.field,checked:e.fieldsInUse.includes(t.field)},on:{change:function(s){return e.toggleField(t.field)}}}),e._v(" "),s("i",{staticClass:"material-icons"},[e._v("drag_handle")])],1)}),0)],1),e._v(" "),s("label",{staticClass:"style-3",attrs:{for:"spacing"}},[e._v("Spacing")]),e._v(" "),s("v-select",{staticClass:"select",attrs:{id:"spacing",value:e.viewOptions.spacing||"cozy",options:{compact:"Compact",cozy:"Cozy",comfortable:"Comfortable"},icon:"reorder"},on:{input:e.setSpacing}})],1)},staticRenderFns:[],_compiled:!0,_scopeId:"data-v-de6b56",functional:void 0});})();
},{"../../../mixins/layout":"vpUX"}]},{},["z1bV"], "__DirectusExtension__")