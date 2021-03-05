(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(8),o=n.n(r),a=(n(26),n(27),n(16)),i=n(10),u=n(11),j=n(13),l=n(12),p=n(0),d=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"submit-button",children:Object(p.jsx)("button",{className:"btn",type:this.props.type,disabled:this.props.disabled,onClick:this.props.onClick,children:this.props.text})})}}]),n}(c.a.Component),b=n(7),h=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onChange=function(e){s.setState(Object(a.a)({},e.target.name,e.target.value))},s.onSubmit=function(e){e.preventDefault();var t=JSON.stringify(s.state);fetch("/api/login/",{method:"POST",body:t,headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return s.props.history.push("/feed");var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("post-response-errors");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},s.state={username:"",password:""},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.onSubmit,className:"auth-form input",children:["Login",Object(p.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:this.onChange}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:this.onChange}),Object(p.jsx)(d,{type:"submit",text:"Login"}),Object(p.jsx)(b.b,{to:"/register",children:Object(p.jsx)(d,{type:"submit",text:"Register"})}),Object(p.jsx)("div",{id:"post-response-errors"})]})}}]),n}(c.a.Component),f=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onChange=function(e){s.setState(Object(a.a)({},e.target.name,e.target.value))},s.onSubmit=function(e){e.preventDefault();var t=JSON.stringify(s.state);fetch("/api/register/",{method:"POST",body:t,headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return s.props.history.push("/feed");var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("post-response-errors");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},s.state={username:"",password:"",password2:""},s}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.onSubmit,className:"auth-form input",children:["Sign up",Object(p.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:this.onChange}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:this.onChange}),Object(p.jsx)("input",{name:"password2",type:"password",placeholder:"Repeat Password",onChange:this.onChange}),Object(p.jsx)(d,{type:"submit",text:"Register"}),Object(p.jsx)("div",{id:"post-response-errors"})]})}}]),n}(c.a.Component),O=n(14);function m(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),s=0;s<n.length;s++){var c=n[s].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}var g=n(2);var x=function(){var e=Object(s.useState)(""),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(O.a)(r,2),i=a[0],u=a[1],j=Object(s.useState)(""),l=Object(O.a)(j,2),d=l[0],b=l[1],h=Object(g.f)();return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("picture",n),t.append("caption",d);var s=m("csrftoken");fetch("/api/post/",{method:"POST",body:JSON.stringify(Object.fromEntries(t)),headers:{"content-type":"application/json","X-CSRFToken":s}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return h.push("/feed");var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("post-response-errors");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},className:"post-form-main",children:[Object(p.jsx)("h3",{children:"Make a Post"}),Object(p.jsx)("div",{className:"box-upload",children:i?Object(p.jsxs)("div",{className:"image-preview",children:[Object(p.jsx)("img",{className:"close-icon",src:"https://cdn.iconscout.com/icon/free/png-256/close-1781207-1518581.png",alt:"Close Icon",onClick:function(){u(!1),c(null)}}),Object(p.jsx)("img",{id:"uploaded-image",src:n,alt:"Feed Post",draggable:!1})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{className:"img-label",htmlFor:"upload-input",children:[Object(p.jsx)("img",{style:{width:100},draggable:!1,src:"https://wayou.gallerycdn.vsassets.io/extensions/wayou/vscode-icons-mac/7.25.3/1564717968649/Microsoft.VisualStudio.Services.Icons.Default",alt:"Folder Icon"}),Object(p.jsx)("p",{id:"sub",children:"Click to upload image"})]}),Object(p.jsx)("input",{className:"img-input",id:"upload-input",type:"file",accept:".jpg, .img, .png",onChange:function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){c(e.target.result),u(!0)},t.readAsDataURL(e.target.files[0])}}})]})}),Object(p.jsx)("div",{className:"text-area",children:Object(p.jsx)("textarea",{value:d,onChange:function(e){b(e.target.value)},type:"text",name:"caption",className:"description-input",placeholder:"Description"})}),Object(p.jsx)("input",{className:"post-btn",type:"submit",value:"Post"}),Object(p.jsx)("div",{id:"post-response-errors"})]})};var v=function(){var e=Object(g.f)();return Object(p.jsx)(d,{onClick:function(){return function(t){var n=m("csrftoken");fetch("/api/logout/",{method:"POST",body:"",headers:{"content-type":"application/json","X-CSRFToken":n}}).then((function(e){return e.json()})).then((function(t){return"true"===t.success?e.push("/login"):e.push("/feed")})).catch((function(e){return console.log(e)}))}()},text:"Logout"})};var y=function(){var e=Object(g.g)(),t=Object(s.useState)(!1),n=Object(O.a)(t,2),c=n[0],r=n[1];return Object(s.useLayoutEffect)((function(){var e;e=function(e){r(e)},fetch("/api/getauth/",{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e(!("AnonymousUser"===t.user&&"None"===t.auth))})).catch((function(e){return console.log(e)}))}),[e]),Object(p.jsx)("div",{className:"navbar-container",children:Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)(b.b,{to:"/feed",className:"logo",children:"SnowFlake"}),c?Object(p.jsxs)("div",{className:"user-status",children:[Object(p.jsx)(b.b,{to:"/post",children:Object(p.jsx)(d,{text:"New Post"})}),Object(p.jsx)(v,{})]}):Object(p.jsxs)("div",{className:"user-status",children:[Object(p.jsx)(b.b,{to:"/login",children:Object(p.jsx)(d,{text:"Login"})}),Object(p.jsx)(b.b,{to:"/register",children:Object(p.jsx)(d,{text:"Register"})})]})]})})};var S=function(){return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(y,{}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{path:"/feed"}),Object(p.jsx)(g.a,{path:"/register",component:f}),Object(p.jsx)(g.a,{path:"/login",component:h}),Object(p.jsx)(g.a,{path:"/post",component:x}),Object(p.jsx)(g.a,{path:"/follow"})]})})]})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.8e368c97.chunk.js.map