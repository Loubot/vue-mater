webpackJsonp([1],{"6Tbp":function(t,a){},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("7+uW"),n={name:"App",data:function(){return{showNavigation:!1,showSidepanel:!1}},methods:{getIt:function(){axios.get("http://localhost:5000/api/user",{crossdomain:!0}).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}}},e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"page-container md-layout-column"},[i("md-toolbar",{staticClass:"md-primary"},[i("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.showNavigation=!0}}},[i("md-icon",[t._v("menu")])],1),t._v(" "),i("span",{staticClass:"md-title"},[t._v("My Title")]),t._v(" "),i("div",{staticClass:"md-toolbar-section-end"},[i("md-button",{on:{click:function(a){t.showSidepanel=!0}}},[t._v("Favorites")])],1)],1),t._v(" "),i("md-drawer",{attrs:{"md-active":t.showNavigation},on:{"update:mdActive":function(a){t.showNavigation=a}}},[i("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[i("span",{staticClass:"md-title"},[t._v("My App name")])]),t._v(" "),i("md-list",[i("md-list-item",[i("md-icon",[t._v("move_to_inbox")]),t._v(" "),i("span",{staticClass:"md-list-item-text"},[i("router-link",{attrs:{to:"/form"}},[t._v("Inbox")])],1)],1),t._v(" "),i("md-list-item",[i("md-icon",[t._v("send")]),t._v(" "),i("span",{staticClass:"md-list-item-text"},[t._v("Sent Mail")])],1),t._v(" "),i("md-list-item",[i("md-icon",[t._v("delete")]),t._v(" "),i("span",{staticClass:"md-list-item-text"},[t._v("Trash")])],1),t._v(" "),i("md-list-item",[i("md-icon",[t._v("error")]),t._v(" "),i("span",{staticClass:"md-list-item-text",on:{click:t.getIt}},[t._v("Spam")])],1),t._v(" "),i("md-list-item",[i("md-icon",[t._v("error")]),t._v(" "),i("md-button",{staticClass:"md-icon-button",on:{click:function(a){t.showNavigation=!1}}},[i("span",{staticClass:"md-list-item-text"},[t._v("Spam")])])],1)],1)],1),t._v(" "),i("md-drawer",{staticClass:"md-right",attrs:{"md-active":t.showSidepanel},on:{"update:mdActive":function(a){t.showSidepanel=a}}},[i("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[i("span",{staticClass:"md-title"},[t._v("Favorites")])]),t._v(" "),i("md-list",[i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Abbey Christansen")]),t._v(" "),i("md-button",{staticClass:"md-icon-button md-list-action"},[i("md-icon",{staticClass:"md-primary"},[t._v("chat_bubble")])],1)],1),t._v(" "),i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Alex Nelson")]),t._v(" "),i("md-button",{staticClass:"md-icon-button md-list-action"},[i("md-icon",{staticClass:"md-primary"},[t._v("chat_bubble")])],1)],1),t._v(" "),i("md-list-item",[i("span",{staticClass:"md-list-item-text"},[t._v("Mary Johnson")]),t._v(" "),i("md-button",{staticClass:"md-icon-button md-list-action"},[i("md-icon",[t._v("chat_bubble")])],1)],1)],1)],1),t._v(" "),i("md-content",[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque. "+t._s(t.showNavigation)+"\n      ")])],1),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")(n,e,!1,function(t){i("6Tbp")},null,null).exports,l=i("/ocq"),m=(i("mtWM"),{render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]});var c=i("VU/8")({name:"HelloWorld",data:function(){return{contacts:[]}},methods:{fillTable:function(){this.contacts.push({firstname:"Sebastian",lastname:"Eschweiler",email:"s.eschweiler@mail.com"}),this.contacts.push({firstname:"Bill",lastname:"Smith",email:"b.smith@mail.com"}),this.contacts.push({firstname:"Ann",lastname:"Parker",email:"a.parker@mail.com"})},clearTable:function(){this.contacts.splice(0,this.contacts.length)}}},m,!1,function(t){i("zJ3R")},"data-v-ec050866",null).exports,d=i("VU/8")(null,null,!1,null,null,null).exports;s.default.use(l.a);var r=new l.a({routes:[{path:"/",name:"HelloWorld",component:c},{path:"form",name:"Form",component:d}]}),u=i("7KzD"),v=i("Lgyv"),p=i.n(v);i("tzNG"),i("VaBq"),i("ZHcu");Object(u.loadProgressBar)(),s.default.use(p.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:r,components:{App:o},template:"<App/>"})},VaBq:function(t,a){},ZHcu:function(t,a){},tzNG:function(t,a){},zJ3R:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.b8fa3756f0dec36f4a20.js.map