(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./dist/esm/infineon-icon-stencil.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"infineon_icon_stencil",(function(){return InfineonIconStencil}));__webpack_require__("./node_modules/core-js/modules/es.symbol.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.date.to-primitive.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.number.constructor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_78c009e4_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/esm/index-78c009e4.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,(arg=descriptor.key,key=void 0,"symbol"==typeof(key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string"))?key:String(key)),descriptor)}var arg,key}var InfineonIconStencil=function(){function InfineonIconStencil(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,InfineonIconStencil),Object(_index_78c009e4_js__WEBPACK_IMPORTED_MODULE_7__.f)(this,hostRef),this.icon=void 0,this.path=void 0,this.svgWidth=void 0,this.svgHeight=void 0,this.pathD=void 0,this.svgStroke=void 0,this.svgStrokeLinecap=void 0,this.svgLineJoin=void 0}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(InfineonIconStencil,[{key:"parseHTML",value:function parseHTML(html){var el=document.createElement("div");return el.innerHTML=html,el.children}},{key:"componentWillLoad",value:function componentWillLoad(){this.path=this.parseHTML(this.icon.svgContent),this.svgWidth=this.icon.width,this.svgHeight=this.icon.height,this.pathD=this.path[0].attributes[3].nodeValue,this.svgStroke=this.path[0].attributes[0].nodeValue,this.svgStrokeLinecap=this.path[0].attributes[1].nodeValue,this.svgLineJoin=this.path[0].attributes[2].nodeValue}},{key:"render",value:function render(){return Object(_index_78c009e4_js__WEBPACK_IMPORTED_MODULE_7__.d)("div",{class:"svg-wrapper"},Object(_index_78c009e4_js__WEBPACK_IMPORTED_MODULE_7__.d)("svg",{class:"inline-svg",width:this.svgWidth,height:this.svgHeight,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},Object(_index_78c009e4_js__WEBPACK_IMPORTED_MODULE_7__.d)("path",{stroke:this.svgStroke,"stroke-linecap":this.svgStrokeLinecap,"stroke-linejoin":this.svgLineJoin,d:this.pathD})))}}]),InfineonIconStencil}()}}]);