(function(t){function e(e){for(var n,s,a=e[0],u=e[1],p=e[2],d=0,c=[];d<a.length;d++)s=a[d],r[s]&&c.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(c.length)c.shift()();return i.push.apply(i,p||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var u=o[a];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vuee/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var p=0;p<a.length;p++)e(a[p]);var l=u;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("64a9"),r=o.n(n);r.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("index")],1)},i=[],s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._l(t.posts,function(e){return o("div",{key:e.id,attrs:{id:"post"}},[e.edit?o("div",[t._v("\n      Title: "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"post.title"}],attrs:{type:"text"},domProps:{value:e.title},on:{input:function(o){o.target.composing||t.$set(e,"title",o.target.value)}}}),t._v("\n      Body: "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.body,expression:"post.body"}],attrs:{type:"text"},domProps:{value:e.body},on:{input:function(o){o.target.composing||t.$set(e,"body",o.target.value)}}}),o("button",{on:{click:function(o){return t.save(e)}}},[t._v("Save")])]):o("div",[o("p",[t._v("Title: "+t._s(e.title))]),o("p",[t._v("Body: "+t._s(e.body))]),o("button",{on:{click:function(o){return t.deletePost(e)}}},[t._v("Delete")]),o("button",{on:{click:function(o){return t.updatePost(e)}}},[t._v("Update")])]),o("br")])}),o("form",{on:{submit:function(e){return e.preventDefault(),t.addPost()}}},[o("label",[t._v("Title")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control here",attrs:{id:"title",name:"title",type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}}),o("label",[t._v("Body")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control here",attrs:{id:"title",name:"title",type:"text"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}}),o("button",{attrs:{name:"submit",type:"submit"}},[t._v("Add")])])],2)},a=[],u={name:"HelloWorld",data:function(){return{post:{body:"",title:"",edit:!1},posts:[]}},created:function(){this.getPosts()},methods:{getPosts:function(){var t=this;h.ref("blog/posts").once("value").then(function(e){var o=e.val();for(var n in o)t.posts.push({id:n,title:o[n].title,body:o[n].body,edit:!1})})},addPost:function(){var t=this;h.ref("blog/posts").push(this.post).then(function(e){t.post.id=e.key,t.posts.push(t.post),t.post={}})},deletePost:function(t){h.ref("blog/posts/"+t.id).remove();var e=this.posts.indexOf(t);this.posts.splice(e,1)},updatePost:function(t){h.ref("blog/posts/"+t.id).update({edit:!0}),t.edit=!0},save:function(t){h.ref("blog/posts/"+t.id).update({edit:!1,title:t.title,body:t.body}),t.edit=!1}}},p=u,l=(o("f923"),o("2877")),d=Object(l["a"])(p,s,a,!1,null,"17eae17a",null),c=d.exports,f={name:"app",components:{index:c}},v=f,m=(o("034f"),Object(l["a"])(v,r,i,!1,null,null,null)),b=m.exports,y=o("59ca");o.d(e,"db",function(){return h}),o("66ce");var g={apiKey:"AIzaSyBYpup3ZcsjCrdWI1eHekC-wfczmwPMJT8",authDomain:"my-project-95f8e.firebaseapp.com",databaseURL:"https://my-project-95f8e.firebaseio.com",projectId:"my-project-95f8e",storageBucket:"my-project-95f8e.appspot.com",messagingSenderId:"756129411047"};y["initializeApp"](g);var h=y["database"]();n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,o){},b8f5:function(t,e,o){},f923:function(t,e,o){"use strict";var n=o("b8f5"),r=o.n(n);r.a}});
//# sourceMappingURL=app.9008a663.js.map