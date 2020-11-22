(this.webpackJsonporganelle=this.webpackJsonporganelle||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n(29),c=n.n(s),o=n(10),u=n.n(o),i=n(13),l=n(7),j=n(9),b=n(2),d=Object(a.createContext)(null);function p(){var e=Object(a.useContext)(d),t=e.userData,n=e.setUserData,s=Object(b.g)();return Object(r.jsx)("nav",{className:"auth-options",children:t.user?Object(r.jsx)("button",{onClick:function(){n({token:void 0,user:void 0}),localStorage.setItem("auth-token","")},children:" Log out"}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){return s.push("/register")},children:" Register "}),Object(r.jsx)("button",{onClick:function(){return s.push("/login")},children:" LogIn "})]})})}function O(){var e=Object(a.useContext)(d),t=e.userData,n=(e.setUserData,Object(b.g)());return Object(r.jsx)("nav",{className:"routes",children:t.user?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:function(){return n.push("/calendar")},children:" Calendar "}),Object(r.jsx)("button",{onClick:function(){return n.push("/todo")},children:" Todo "})]}):Object(r.jsx)(r.Fragment,{})})}function h(){return Object(r.jsxs)("header",{id:"header",children:[Object(r.jsx)(j.b,{to:"/",children:Object(r.jsx)("h1",{className:"title",children:"Organelle"})}),Object(r.jsx)(O,{}),Object(r.jsx)(p,{})]})}function x(){return Object(r.jsx)("div",{children:"Home"})}function g(){return Object(r.jsx)("div",{children:"Todo"})}function m(){return Object(r.jsx)("div",{children:"Calendar"})}var f=n(12),v=n.n(f);function k(e){return Object(r.jsxs)("div",{className:"error-notice",children:[Object(r.jsx)("span",{children:e.message}),Object(r.jsx)("button",{onClick:e.clearError,children:"X"})]})}function y(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(),o=Object(l.a)(c,2),j=o[0],p=o[1],O=Object(a.useState)(),h=Object(l.a)(O,2),x=h[0],g=h[1],m=Object(a.useContext)(d).setUserData,f=Object(b.g)(),y=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={email:n,password:j},"http://organelle.pzny.xyz/users/login",e.next=6,v.a.post("http://organelle.pzny.xyz/users/login",r);case 6:a=e.sent,m({token:a.data.token,user:a.data.user}),localStorage.setItem("auth-token",a.data.token),f.push("/"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),e.t0.response.data.msg&&g(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h2",{children:"Log in"}),x&&Object(r.jsx)(k,{message:x,clearError:function(){return g(void 0)}}),Object(r.jsxs)("form",{className:"form",onSubmit:y,children:[Object(r.jsx)("label",{htmlFor:"login-email",children:"Email"}),Object(r.jsx)("input",{id:"login-email",type:"email",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("label",{htmlFor:"login-password",children:"Password"}),Object(r.jsx)("input",{id:"login-password",type:"password",onChange:function(e){return p(e.target.value)}}),Object(r.jsx)("input",{type:"submit",value:"Log in"})]})]})}function w(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(),o=Object(l.a)(c,2),j=o[0],p=o[1],O=Object(a.useState)(),h=Object(l.a)(O,2),x=h[0],g=h[1],m=Object(a.useState)(),f=Object(l.a)(m,2),y=f[0],w=f[1],C=Object(a.useState)(),S=Object(l.a)(C,2),z=S[0],D=S[1],N=Object(a.useContext)(d).setUserData,F=Object(b.g)(),I=function(){var e=Object(i.a)(u.a.mark((function e(t){var r,a,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,r={email:n,password:j,passwordCheck:x,displayName:y},"http://organelle.pzny.xyz/users/register",a="http://organelle.pzny.xyz/users/login",e.next=7,v.a.post("http://organelle.pzny.xyz/users/register",r);case 7:return e.next=9,v.a.post(a,{email:n,password:j});case 9:s=e.sent,N({token:s.data.token,user:s.data.user}),localStorage.setItem("auth-token",s.data.token),F.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),e.t0.response.data.msg&&D(e.t0.response.data.msg);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("h2",{children:"Register"}),z&&Object(r.jsx)(k,{message:z,clearError:function(){return D(void 0)}}),Object(r.jsxs)("form",{className:"form",onSubmit:I,children:[Object(r.jsx)("label",{htmlFor:"register-email",children:"Email"}),Object(r.jsx)("input",{id:"register-email",type:"email",onChange:function(e){return s(e.target.value)}}),Object(r.jsx)("label",{htmlFor:"register-password",children:"Password"}),Object(r.jsx)("input",{id:"register-password",type:"password",onChange:function(e){return p(e.target.value)}}),Object(r.jsx)("input",{type:"password",placeholder:"Verify password",onChange:function(e){return g(e.target.value)}}),Object(r.jsx)("label",{htmlFor:"register-display-name",children:"Display name"}),Object(r.jsx)("input",{id:"register-display-name",type:"text",onChange:function(e){return w(e.target.value)}}),Object(r.jsx)("input",{type:"submit",value:"Register"})]})]})}var C=n(15),S=n(31),z=function(e){var t=e.component,n=Object(S.a)(e,["component"]),s=Object(a.useContext)(d),c=s.userData;s.setUserData;return Object(r.jsx)(b.b,Object(C.a)(Object(C.a)({},n),{},{render:function(e){return c.user?Object(r.jsx)(t,Object(C.a)({},e)):Object(r.jsx)(b.a,{to:"/login"})}}))};n(60);function D(){var e=Object(a.useState)({token:void 0,user:void 0}),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(t=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),t=""),"http://organelle.pzny.xyz/users/tokenIsValid",e.next=5,v.a.post("http://organelle.pzny.xyz/users/tokenIsValid",null,{header:{"x-auth-token":t}});case 5:if(!e.sent.data){e.next=11;break}return e.next=9,v.a.get("http://localhost:8080/users",{headers:{"x-auth-token":t}});case 9:n=e.sent,s({token:t,user:n.data});case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(j.a,{children:Object(r.jsxs)(d.Provider,{value:{userData:n,setUserData:s},children:[Object(r.jsx)(h,{}),Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(b.d,{children:[Object(r.jsx)(b.b,{exact:!0,path:"/",component:x}),Object(r.jsx)(b.b,{path:"/login",component:y}),Object(r.jsx)(b.b,{path:"/register",component:w}),Object(r.jsx)(z,{path:"/todo",component:g}),Object(r.jsx)(z,{path:"/calendar",component:m})]})})]})})})}c.a.render(Object(r.jsx)(D,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.b846645f.chunk.js.map