(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,n){},42:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),a=n(16),o=n.n(a),r=(n(42),n(17)),i=(n(30),n(19)),u=n(8),l=n(9),j=n(11),d=n(10),p=n(1),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:this.props.classes,children:Object(p.jsx)("button",{className:"btn",type:this.props.type,disabled:this.props.disabled,onClick:this.props.onClick,children:this.props.text})})}}]),n}(c.a.Component),b=n(6),f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).onChange=function(e){s.setState(Object(i.a)({},e.target.name,e.target.value))},s.onSubmit=function(e){e.preventDefault();var t=JSON.stringify(s.state);fetch("/api/login/",{method:"POST",body:t,headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return s.props.history.push("/feed");var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("post-response-errors");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},s.state={username:"",password:""},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.onSubmit,className:"auth-form input",children:["Login",Object(p.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:this.onChange}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:this.onChange}),Object(p.jsx)(h,{type:"submit",classes:"submit-button-padding",text:"Login"}),Object(p.jsx)(b.b,{to:"/register",children:Object(p.jsx)(h,{type:"submit",classes:"submit-button-padding",text:"Register"})}),Object(p.jsx)("div",{id:"post-response-errors"})]})}}]),n}(c.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).onChange=function(e){s.setState(Object(i.a)({},e.target.name,e.target.value))},s.onSubmit=function(e){e.preventDefault();var t=JSON.stringify(s.state);fetch("/api/register/",{method:"POST",body:t,headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return s.props.history.push("/feed");var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("post-response-errors");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},s.state={username:"",password:"",password2:""},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{onSubmit:this.onSubmit,className:"auth-form input",children:["Sign up",Object(p.jsx)("input",{name:"username",type:"text",placeholder:"Username",onChange:this.onChange}),Object(p.jsx)("input",{name:"password",type:"password",placeholder:"Password",onChange:this.onChange}),Object(p.jsx)("input",{name:"password2",type:"password",placeholder:"Repeat Password",onChange:this.onChange}),Object(p.jsx)(h,{type:"submit",classes:"submit-button-padding",text:"Register"}),Object(p.jsx)("div",{id:"post-response-errors"})]})}}]),n}(c.a.Component),O=n(20),g=n(66),x=n(68);function v(e){var t=e.username,n=e.caption,s=e.image,c=e.index;return Object(p.jsxs)("div",{className:"post-card",children:[Object(p.jsxs)("div",{className:"post-header",children:[Object(p.jsx)(x.a,{className:"post-avatar",alt:t,src:""}),Object(p.jsx)("p",{className:"post-username",children:t})]}),Object(p.jsx)("img",{className:"post-image",src:s,alt:"image"}),Object(p.jsxs)("p",{className:"post-text",children:[Object(p.jsxs)("strong",{children:[t,":"]})," ",n]})]},c)}var y=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={postData:[],activeItem:{id:null,username:"",image:"",caption:"",completed:!1},editing:!1},s.fetchPosts=s.fetchPosts.bind(Object(O.a)(s)),s}return Object(l.a)(n,[{key:"fetchPosts",value:function(){var e=this;fetch("/api/feed/",{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({postData:t})}))}},{key:"componentDidMount",value:function(){this.fetchPosts()}},{key:"render",value:function(){var e=this.state.postData;return Object(p.jsx)(g.a,{id:"feed-grid",container:!0,direction:"column",justify:"space-between",alignItems:"center",children:e.map((function(e,t){return Object(p.jsx)(v,{username:e.username,caption:e.caption,image:e.image},t)}))})}}]),n}(s.Component);function w(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),s=0;s<n.length;s++){var c=n[s].trim();if(c.substring(0,e.length+1)===e+"="){t=decodeURIComponent(c.substring(e.length+1));break}}return t}var S=n(4);var N=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(r.a)(a,2),u=i[0],l=i[1],j=Object(s.useState)(""),d=Object(r.a)(j,2),h=d[0],b=d[1],f=Object(S.g)();return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("image",n),t.append("caption",h);var s=w("csrftoken");fetch("/api/post/",{method:"POST",body:JSON.stringify(Object.fromEntries(t)),headers:{"content-type":"application/json","X-CSRFToken":s}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return f.push("/feed");var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("post-response-errors");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},className:"post-form-main",children:[Object(p.jsx)("h3",{children:"Make a Post"}),Object(p.jsx)("div",{className:"box-upload",children:u?Object(p.jsxs)("div",{className:"image-preview",children:[Object(p.jsx)("img",{className:"close-icon",src:"https://cdn.iconscout.com/icon/free/png-256/close-1781207-1518581.png",alt:"Close Icon",onClick:function(){l(!1),c(null)}}),Object(p.jsx)("img",{id:"uploaded-image",src:n,alt:"Feed Post",draggable:!1})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("label",{className:"img-label",htmlFor:"upload-input",children:[Object(p.jsx)("img",{style:{width:100},draggable:!1,src:"https://wayou.gallerycdn.vsassets.io/extensions/wayou/vscode-icons-mac/7.25.3/1564717968649/Microsoft.VisualStudio.Services.Icons.Default",alt:"Folder Icon"}),Object(p.jsx)("p",{id:"sub",children:"Click to upload image"})]}),Object(p.jsx)("input",{className:"img-input",id:"upload-input",type:"file",accept:".jpg, .img, .png",onChange:function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){c(e.target.result),l(!0)},t.readAsDataURL(e.target.files[0])}}})]})}),Object(p.jsx)("div",{className:"text-area",children:Object(p.jsx)("textarea",{value:h,onChange:function(e){b(e.target.value)},type:"text",name:"caption",className:"description-input",placeholder:"Description"})}),Object(p.jsx)("input",{className:"post-btn",type:"submit",value:"Post"}),Object(p.jsx)("div",{id:"post-response-errors"})]})};function k(e){var t=e.username,n=Object(s.useState)(!1),c=Object(r.a)(n,2),a=c[0],i=c[1],u=Object(s.useState)("Follow"),l=Object(r.a)(u,2),j=l[0],d=l[1],h=Object(s.useState)("follow-node"),b=Object(r.a)(h,2),f=b[0],m=b[1];return Object(p.jsxs)("div",{className:f,children:[Object(p.jsx)("p",{children:t}),Object(p.jsx)("button",{onClick:function(){var e=w("csrftoken"),n=new FormData;n.append("user_to_follow",t),fetch("/api/follow/",{method:"POST",body:JSON.stringify(Object.fromEntries(n)),headers:{"content-type":"application/json","X-CSRFToken":e}}).then((function(e){return e.json()})).then((function(e){if("true"===e.success)return i(!0),d("Following!"),void m(f.concat(" follow-node-clicked"));var t=function(){return Object(p.jsx)("ul",{children:e.errors.map((function(e){return Object(p.jsxs)("li",{children:[" ",e," "]},e)}))})},n=document.getElementById("root");o.a.render(Object(p.jsx)(t,{}),n)})).catch((function(e){return console.log(e)}))},disabled:a,className:"follow-button",children:j})]})}var C=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this,e)).state={followUserData:[]},s.fetchFollowUsers=s.fetchFollowUsers.bind(Object(O.a)(s)),s}return Object(l.a)(n,[{key:"fetchFollowUsers",value:function(){var e=this;fetch("/api/follow/",{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({followUserData:t})}))}},{key:"componentDidMount",value:function(){this.fetchFollowUsers()}},{key:"render",value:function(){var e=this.state.followUserData;return Object(p.jsx)("div",{className:"user-grid",children:e.map((function(e,t){return Object(p.jsx)(k,{username:e.username})}))})}}]),n}(c.a.Component);var A=function(){var e=Object(S.g)();return Object(p.jsx)(h,{onClick:function(){return function(t){var n=w("csrftoken");fetch("/api/logout/",{method:"POST",body:"",headers:{"content-type":"application/json","X-CSRFToken":n}}).then((function(e){return e.json()})).then((function(t){return"true"===t.success?e.push("/login"):e.push("/feed")})).catch((function(e){return console.log(e)}))}()},text:"Logout"})};var F=function(e){var t=Object(S.h)();return Object(s.useLayoutEffect)((function(){var t;t=function(t){e.setIsAuthenticated(t)},fetch("/api/getauth/",{method:"GET",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){t(!("AnonymousUser"===e.user&&"None"===e.auth))})).catch((function(e){return console.log(e)}))}),[t,e.setIsAuthenticated]),Object(p.jsx)("div",{className:"navbar-container",children:Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)(b.b,{to:"/feed",className:"logo mr-auto",children:"SnowFlake"}),e.isAuthenticated?Object(p.jsxs)("div",{className:"user-status ml-auto",children:[Object(p.jsx)(b.b,{to:"/post",children:Object(p.jsx)(h,{text:"New Post"})}),Object(p.jsx)(A,{})]}):Object(p.jsxs)("div",{className:"user-status ml-auto",children:[Object(p.jsx)(b.b,{to:"/login",children:Object(p.jsx)(h,{text:"Login"})}),Object(p.jsx)(b.b,{to:"/register",children:Object(p.jsx)(h,{text:"Register"})})]})]})})},P=n(35),D=n(36),I=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentWillReceiveProps",value:function(e,t){this.props.isAuthenticated!==e.isAuthenticated&&this.setState({isAuthenticated:e.isAuthenticated})}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.redirect,s=Object(D.a)(e,["isAuthenticated","redirect"]);return t?Object(p.jsx)(S.b,Object(P.a)({},s)):Object(p.jsx)(S.a,{to:n})}}]),n}(c.a.Component);var U=function(){var e=Object(s.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(s.useCallback)((function(e){c(e)}),[c]);return Object(p.jsx)(b.a,{children:Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(F,{isAuthenticated:n,setIsAuthenticated:a}),Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)(S.d,{children:[Object(p.jsx)(I,{path:"/login",component:f,isAuthenticated:!n,redirect:"/feed"}),Object(p.jsx)(I,{path:"/register",component:m,isAuthenticated:!n,redirect:"/feed"}),Object(p.jsx)(I,{path:"/feed",component:y,isAuthenticated:n,redirect:"/login"}),Object(p.jsx)(I,{path:"/post",component:N,isAuthenticated:n,redirect:"/login"}),Object(p.jsx)(I,{path:"/follow",component:C,isAuthenticated:n,redirect:"/login"})]})})]})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(b.a,{children:Object(p.jsx)(U,{})})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.36f28f60.chunk.js.map