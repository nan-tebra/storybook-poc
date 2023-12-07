/*! For license information please see stories-Button-stories.a0418839.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstorybook_poc=self.webpackChunkstorybook_poc||[]).push([[256],{"./src/stories/Button.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_Small$parameters,_Small$parameters2,_Small$parameters2$do;__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Example/Button",component:__webpack_require__("./src/stories/Button.jsx").z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},Primary={args:{primary:!0,label:"Primary Button v0.5.5"}},Secondary={args:{label:"Secondary Button v0.5.5"}},Large={args:{size:"large",label:"Button v0.5.5"}},Small={args:{size:"small",label:"Button v0.5.5"}};Primary.parameters={...Primary.parameters,docs:{...null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: 'Primary Button v0.5.5'\n  }\n}",...null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source}}},Secondary.parameters={...Secondary.parameters,docs:{...null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs,source:{originalSource:"{\n  args: {\n    label: 'Secondary Button v0.5.5'\n  }\n}",...null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source}}},Large.parameters={...Large.parameters,docs:{...null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button v0.5.5'\n  }\n}",...null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source}}},Small.parameters={...Small.parameters,docs:{...null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button v0.5.5'\n  }\n}",...null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source}}};const __namedExportsOrder=["Primary","Secondary","Large","Small"]},"./src/stories/Button.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=_ref=>{let{primary,backgroundColor,size,label,...props}=_ref;const mode=primary?"storybook-button--primary":"storybook-button--secondary";return(0,jsx_runtime.jsx)("button",{type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor},...props,children:label})};Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},description:"What background color to use",type:{name:"string"},required:!1},primary:{defaultValue:{value:"false",computed:!1},description:"Is this the principal call to action on the page?",type:{name:"bool"},required:!1},size:{defaultValue:{value:"'medium'",computed:!1},description:"How large should the button be?",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},onClick:{defaultValue:{value:"undefined",computed:!0},description:"Optional click handler",type:{name:"func"},required:!1},label:{description:"Button contents",type:{name:"string"},required:!0}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);