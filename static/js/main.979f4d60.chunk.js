(this["webpackJsonpintro-component"]=this["webpackJsonpintro-component"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),s=n(4),c=n.n(s),i=(n(10),n(11),n(12),n(0));function l(e){return Object(i.jsx)("div",{className:"notification",children:Object(i.jsx)("div",{className:"notification__body",children:e.children})})}n(14);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.name,n=e.type,r=void 0===n?"text":n,a=e.placeholder,s=e.errors,c=void 0===s?[]:s,l=e.value,o=e.onChange,u=c.map((function(e){return Object(i.jsx)("li",{className:"input__error",children:e},e)})),d=!!u.length;return Object(i.jsxs)("div",{className:"input__field"+(d?" input__field--has-errors":""),children:[Object(i.jsx)("div",{className:"input__control",children:Object(i.jsx)("input",{className:"input",type:r,name:t,placeholder:a,"aria-label":a,value:l,onChange:o})}),d?Object(i.jsx)("ul",{className:"input__errors-list",children:u}):""]})}n(15);var u=n(5),d=n(3);function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.useState)(""),a=Object(d.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)([]),l=Object(d.a)(i,2),o=l[0],h=l[1];Object(r.useEffect)((function(){h([])}),[s]);var m=function(e){c(e.target.value)},j=e.split("_").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ");return Object(u.a)({name:e,value:s,setValue:m,errors:o,setErrors:h,placeholder:j},t)}function m(e){return!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function j(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t&&0!==t.length?null:e}}function f(){var e,t=[h("first_name",{rules:[j("First Name cannot be empty")]}),h("last_name",{rules:[j("Last Name cannot be empty")]}),h("email_address",{type:"email",rules:[j("Email Address cannot be empty"),(e="Looks like this is not an email",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m(t)?e:null})]}),h("password",{type:"password",rules:[j("Password cannot be empty")]})];return Object(i.jsx)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t.forEach((function(e){e.setErrors(e.rules.map((function(t){return t(e.value)})).filter((function(e){return e})).slice(0,1))}))},noValidate:!0,children:Object(i.jsxs)("fieldset",{className:"form__fieldset",children:[t.map((function(e){return Object(i.jsx)(o,{name:e.name,placeholder:e.placeholder,value:e.value,errors:e.errors,type:e.type,onChange:e.setValue},e.name)})),Object(i.jsx)("button",{className:"form__button",children:"Claim your free trial"}),Object(i.jsxs)("small",{className:"form__small",children:["By clicking the button, you are agreeing to our"," ",Object(i.jsx)("a",{className:"form__link",href:"#terms",children:"Terms and Services"})]})]})})}var b=function(){return Object(i.jsxs)("div",{className:"app",children:[Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{className:"header__title",children:"Learn to code by watching others"}),Object(i.jsx)("p",{className:"header__content",children:"See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."})]}),Object(i.jsxs)("main",{className:"main",children:[Object(i.jsxs)(l,{children:[Object(i.jsx)("strong",{children:"Try it free 7 days"})," then $20/mo. thereafter"]}),Object(i.jsx)(f,{})]}),Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("p",{className:"footer__attribution",children:["Challenge by"," ",Object(i.jsx)("a",{className:"footer__link",rel:"noopener noreferrer",href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",children:"Frontend Mentor"}),". Coded by"," ",Object(i.jsx)("a",{className:"footer__link",href:"https://halivert.dev",children:"Hal\xed"}),"."]})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),p()}],[[16,1,2]]]);
//# sourceMappingURL=main.979f4d60.chunk.js.map