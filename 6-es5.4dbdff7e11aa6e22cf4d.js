function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"99Un":function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return N}));var i,o=n("ofXK"),l=n("tyNb"),a=n("30QQ"),r=n("fXoL"),c=["*"],s=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=r.Db({type:i,selectors:[["app-simple-list"]],ngContentSelectors:c,decls:2,vars:0,consts:[[1,"simple-list"]],template:function(t,e){1&t&&(r.Yb(),r.Nb(0,"ul",0),r.Xb(1),r.Mb())},styles:[".simple-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}"]}),i);function p(t,e){if(1&t&&(r.Nb(0,"h3"),r.ic(1),r.Mb(),r.Nb(2,"p"),r.Xb(3),r.Mb()),2&t){var n=r.Wb();r.zb(1),r.jc(n.title)}}function u(t,e){1&t&&r.Lb(0)}var b=function(){return{$implicit:!1}};function f(t,e){if(1&t&&(r.Nb(0,"a",5),r.gc(1,u,1,0,"ng-container",6),r.Mb()),2&t){var n=r.Wb(),i=r.cc(1);r.Zb("href",n.link,r.ec),r.zb(1),r.Zb("ngTemplateOutlet",i)("ngTemplateOutletContext",r.ac(3,b))}}function g(t,e){1&t&&r.Lb(0)}function m(t,e){if(1&t&&(r.Nb(0,"a",7),r.gc(1,g,1,0,"ng-container",6),r.Mb()),2&t){var n=r.Wb(),i=r.cc(1);r.Zb("routerLink",n.link),r.zb(1),r.Zb("ngTemplateOutlet",i)("ngTemplateOutletContext",r.ac(3,b))}}function h(t,e){1&t&&r.Lb(0)}function k(t,e){if(1&t&&(r.Nb(0,"div"),r.gc(1,h,1,0,"ng-container",6),r.Mb()),2&t){r.Wb();var n=r.cc(1);r.zb(1),r.Zb("ngTemplateOutlet",n)("ngTemplateOutletContext",r.ac(2,b))}}var d,C=["*"],v=((d=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||d)},d.\u0275cmp=r.Db({type:d,selectors:[["app-simple-list-item"]],inputs:{title:"title",linkTo:"linkTo",link:"link"},ngContentSelectors:C,decls:6,vars:3,consts:[["contentTemplate",""],[1,"simple-list-item"],["target","_blank",3,"href",4,"ngIf"],["href","javascript:",3,"routerLink",4,"ngIf"],[4,"ngIf"],["target","_blank",3,"href"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["href","javascript:",3,"routerLink"]],template:function(t,e){1&t&&(r.Yb(),r.gc(0,p,4,1,"ng-template",null,0,r.hc),r.Nb(2,"li",1),r.gc(3,f,2,4,"a",2),r.gc(4,m,2,4,"a",3),r.gc(5,k,2,3,"div",4),r.Mb()),2&t&&(r.zb(3),r.Zb("ngIf","url"===e.linkTo),r.zb(1),r.Zb("ngIf","routerLink"===e.linkTo),r.zb(1),r.Zb("ngIf",!e.linkTo))},directives:[o.j,o.l,l.b],styles:[".simple-list-item[_ngcontent-%COMP%]{background:#e7e7e7;border-left:3px solid #333;margin-bottom:2rem;padding:.5rem 0 .5rem 1.5rem}.simple-list-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 .5rem}.simple-list-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#1543c6}.simple-list-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]{color:#001247}"]}),d);function T(t,e){if(1&t&&(r.Nb(0,"app-simple-list-item",2),r.ic(1),r.Mb()),2&t){var n=e.$implicit;r.Zb("title",n.index+": "+n.title)("link",n.link)("linkTo",n.linkTo),r.zb(1),r.kc(" ",n.content," ")}}var _,w,O,M=[{path:"",component:a.a,children:[{path:"",component:(_=function(){function t(){_classCallCheck(this,t),this.list=[{index:1,title:"Fork this Repository",linkTo:"url",link:"https://github.com/SafeguardPrvcy/candidate-test",content:"Visit github and fork this repository to get started."},{index:2,title:"Fix the Issues on this Page",linkTo:null,content:"There are several problems with this page, find and fix the issues."},{index:3,title:"Improve this Basic Design",linkTo:null,content:"The design of this website is very plain, update the styles to make this site your own."},{index:4,title:"Complete the Taskboard Logic",linkTo:"routerLink",link:"/taskboard",content:"Navigate to the taskboard page and complete the logic as described in this ticket."},{index:4,title:"Write a Notes Component",linkTo:"routerLink",link:"/notes",content:"We need to be able to capture notes about this site. Write a new component that will allow us to capture and view notes."},{index:5,title:"Add Temperature to Header",linkTo:"routerLink",link:"'/weather'",content:"Use the openweathermap.org api to show the latest weather information for New York, New York."}]}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),_.\u0275fac=function(t){return new(t||_)},_.\u0275cmp=r.Db({type:_,selectors:[["app-home"]],decls:7,vars:1,consts:[[1,"small-page"],[3,"title","link","linkTo",4,"ngFor","ngForOf"],[3,"title","link","linkTo"]],template:function(t,e){1&t&&(r.Nb(0,"div",0),r.Nb(1,"h1"),r.ic(2,"Safeguard Privacy Developer Test"),r.Mb(),r.Nb(3,"p"),r.ic(4,"Below are the tasks that need to be done to complete this developor test."),r.Mb(),r.Mb(),r.Nb(5,"app-simple-list"),r.gc(6,T,2,4,"app-simple-list-item",1),r.Mb()),2&t&&(r.zb(6),r.Zb("ngForOf",e.list))},directives:[s,o.i,v],styles:[""]}),_)}]}],y=((w=function t(){_classCallCheck(this,t)}).\u0275mod=r.Hb({type:w}),w.\u0275inj=r.Gb({factory:function(t){return new(t||w)},imports:[[l.c.forChild(M)],l.c]}),w),P=n("84Lg"),N=((O=function t(){_classCallCheck(this,t)}).\u0275mod=r.Hb({type:O}),O.\u0275inj=r.Gb({factory:function(t){return new(t||O)},imports:[[o.b,y,P.a]]}),O)}}]);