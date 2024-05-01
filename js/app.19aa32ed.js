(function(){"use strict";var e={9058:function(e,t,r){var i=r(5471),n=r(8505),s=function(){var e=this,t=e._self._c;return t(n.A,[t("router-view")],1)},a=[],o={name:"App"},l=o,c=r(1656),u=(0,c.A)(l,s,a,!1,null,null,null),d=u.exports,h=r(5453);i.Ay.use(h.A);const m={primary:"#4CAF50",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"};var f=new h.A({theme:{dark:!0,themes:{dark:m,light:m}},breakpoint:{thresholds:{xs:480,sm:1024,md:1280,lg:1919}}}),v=r(9162),p=r(8400),g=r(6521),y=r(1689),A=r(8834),C=r(1526),b=r(6278),x=r(9456),_=r(1228),w=r(8412),k=r(8700),S=r(7410),M=r(9940),O=function(){var e=this,t=e._self._c;return t(n.A,{staticClass:"overflow-hidden"},[t(v.A,{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[t("span",{staticClass:"title",staticStyle:{"font-style":"italic"}},[e._v("CineMatch")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/"}},[e._v("홈")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/about"}},[e._v("추천")]),t(S.A),t(_.A,{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t(M.A,{attrs:{"hide-details":"auto",label:"영화 제목 검색.. ex) Heat (1995)",color:"red"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),t(g.A,{attrs:{icon:""},on:{click:e.performSearch}},[t(x.A,[e._v("mdi-magnify")])],1),t(p.A)],1),t(b.A,[t(w.A,[t(C.A,{attrs:{cols:"12"}},[t(k.A,{attrs:{items:e.genres,label:"장르","single-line":"","item-text":"name","item-value":"name"},on:{change:e.filterMoviesByGenre},model:{value:e.selectedGenre,callback:function(t){e.selectedGenre=t},expression:"selectedGenre"}})],1)],1)],1),t(b.A,[t(w.A,e._l(e.visibleMovies,(function(r,i){return t(C.A,{key:i,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[t(y.A,{staticClass:"movie-card",attrs:{flat:""}},[t(A.ri,{staticClass:"text-center text-h5"},[e._v(e._s(r.title))]),t(A.ZR,{staticClass:"text-center genre-text"},[e._v(e._s(r.genres.split(", ").join(", ")))])],1)],1)})),1)],1)],1)},j=[],Q=(r(4114),r(1250));Q.A.defaults.baseURL="http://localhost:8080";var P=Q.A,T={name:"MainPage",data(){return{searchQuery:"",movies:[],visibleMovies:[],selectedGenre:null,genres:[],pageSize:10,nextPage:0}},mounted(){this.getAllMovies(),window.addEventListener("scroll",this.handleScroll)},methods:{performSearch(){this.searchQuery.trim()&&this.$router.push({path:"/search",query:{q:this.searchQuery}})},getAllMovies(){P.get("/all").then((e=>{this.movies=e.data,this.addMoviesToView()}))},addMoviesToView(){const e=this.movies.slice(this.nextPage*this.pageSize,(this.nextPage+1)*this.pageSize);this.visibleMovies.push(...e),this.nextPage++},handleScroll(){const e=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;e&&this.addMoviesToView()},fetchGenres(){P.get("/genres").then((e=>{this.genres=e.data}))},filterMoviesByGenre(){this.selectedGenre?this.visibleMovies=this.movies.filter((e=>e.genres.includes(this.selectedGenre))):this.getAllMovies()}}},R=T,E=(0,c.A)(R,O,j,!1,null,null,null),G=E.exports,D=r(2068),q=r(4510),$=r(3858),F=r(2006),H=function(){var e=this,t=e._self._c;return t(n.A,{staticClass:"overflow-hidden"},[t(v.A,{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[t("span",{staticClass:"title",staticStyle:{"font-style":"italic"}},[e._v("CineMatch")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/"}},[e._v("홈")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/about"}},[e._v("추천")]),t(S.A),t(_.A,{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t(M.A,{attrs:{color:"red","hide-details":"auto",label:"영화 제목 검색.. ex) Heat (1995)"}})],1),t(g.A,{attrs:{icon:""}},[t(x.A,[e._v("mdi-magnify")])],1),t(p.A)],1),t("br"),t("br"),t("div",[t(F.A,{staticStyle:{"font-size":"24px","font-weight":"bold","margin-top":"40px"}},[e._v("추천 영화")]),t($.A,{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"100%",height:"400"}},[t(D.A,{staticClass:"pa-4",attrs:{"hide-delimiters":"","selected-class":"bg-success","show-arrows":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[e._l(Math.ceil(e.filteredCards.length/5),(function(r,i){return[t(q.A,{key:i},[t("div",{staticStyle:{display:"flex","justify-content":"center"}},[e._l(e.filteredCards.slice(5*i,5*(i+1)),(function(r){return[t(y.A,{key:r.id,staticClass:"card",on:{click:function(t){return e.toggle(r)}}},[t(A.ri,[e._v(e._s(r.title))])],1)]}))],2)])]}))],2)],1)],1)],1)},z=[],I={name:"App",data(){return{drawer:null,genres:["Adventure","Animation","Children","Comedy","Fantasy","Romance","Drama","Crime","Thriller"],model:1,cards:[{id:1,title:"Toy Story (1995)",genre:["Adventure","Animation","Children","Comedy","Fantasy"]},{id:2,title:"Jumanji (1995)",genre:["Adventure","Children","Fantasy"]},{id:3,title:"Grumpier Old Men (1995)",genre:["Comedy","Romance"]},{id:4,title:"Waiting to Exhale (1995)",genre:["Comedy","Drama","Romance"]},{id:5,title:"Father of the Bride Part II (1995)",genre:["Comedy"]},{id:6,title:"Heat (1995)",genre:["Action","Crime","Thriller"]},{id:7,title:"Sabrina (1995)",genre:["Comedy","Romance"]},{id:8,title:"Sabrina (1995)",genre:["Comedy","Romance"]},{id:9,title:"Sabrina (1995)",genre:["Action"]},{id:10,title:"Sabrina (1995)",genre:["Comedy","Romance"]},{id:11,title:"Sabrina (1995)",genre:["Comedy","Romance"]}],filteredCards:[]}},created(){this.filteredCards=[...this.cards]},methods:{toggle(e){this.$router.push({name:"DetailPage",params:{id:e.id}})},filterCards(e){this.filteredCards=this.cards.filter((t=>t.genre.includes(e)))}}},B=I,V=(0,c.A)(B,H,z,!1,null,null,null),L=V.exports,U=function(){var e=this,t=e._self._c;return t(n.A,{staticClass:"overflow-hidden"},[t(v.A,{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[t("span",{staticClass:"title",staticStyle:{"font-style":"italic"}},[e._v("CineMatch")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/"}},[e._v("홈")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/about"}},[e._v("추천")]),t(S.A),t(_.A,{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t(M.A,{attrs:{"hide-details":"auto",label:"영화 제목 검색.. ex) Heat (1995)",color:"red"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getMovieDetails.apply(null,arguments)}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),t(g.A,{attrs:{icon:""},on:{click:e.getMovieDetails}},[t(x.A,[e._v("mdi-magnify")])],1),t(p.A)],1),t("br"),t("br"),t(F.A,{staticStyle:{"font-size":"24px","font-weight":"bold","margin-top":"40px !important",padding:"50px !important"}},[e._v("검색 결과")]),t(b.A,[t(w.A,e._l(e.filteredMovies,(function(r,i){return t(C.A,{key:i,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[t(y.A,{staticClass:"movie-card",attrs:{flat:""},on:{click:function(t){return e.toggle(r)}}},[t(A.ri,{staticClass:"text-center text-h5"},[e._v(e._s(r.title))]),t(A.ZR,{staticClass:"text-center genre-text"},[e._v(e._s(r.genres.join(", ")))])],1)],1)})),1)],1),0===e.filteredMovies.length?t("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[t("p",[e._v("일치하는 영화가 없습니다.")])]):e._e()],1)},Z=[],J={name:"SearchPage",data(){return{searchQuery:this.$route.query.q||"",model:1,filteredMovies:[]}},mounted(){this.searchQuery.trim()&&this.getMovieDetails()},methods:{getMovieDetails(){this.searchQuery.trim()&&Q.A.get(`/search/${encodeURIComponent(this.searchQuery)}`).then((e=>{if(!e.data||0===e.data.length)return console.error("Empty response received."),void(this.filteredMovies=[]);this.filteredMovies=e.data.map((e=>({id:e.movie_Id,title:e.title,genres:e.genres.split("|")})))})).catch((e=>{console.error("Error fetching search results:",e),this.filteredMovies=[]}))},toggle(e){this.$router.push({name:"MovieDetail",params:{id:e.id}})}}},W=J,K=(0,c.A)(W,U,Z,!1,null,null,null),N=K.exports,X=r(173);i.Ay.use(X.Ay);const Y=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:L},{path:"/search",name:"search",component:N,props:!0}],ee=new X.Ay({mode:"history",base:"/",routes:Y});var te=ee;r(4301);i.Ay.config.productionTip=!1,i.Ay.prototype.$axios=Q.A,new i.Ay({router:te,vuetify:f,render:e=>e(d)}).$mount("#app")}},t={};function r(i){var n=t[i];if(void 0!==n)return n.exports;var s=t[i]={exports:{}};return e[i].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,i,n,s){if(!i){var a=1/0;for(u=0;u<e.length;u++){i=e[u][0],n=e[u][1],s=e[u][2];for(var o=!0,l=0;l<i.length;l++)(!1&s||a>=s)&&Object.keys(r.O).every((function(e){return r.O[e](i[l])}))?i.splice(l--,1):(o=!1,s<a&&(a=s));if(o){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[i,n,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var i in t)r.o(t,i)&&!r.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,s,a=i[0],o=i[1],l=i[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(n in o)r.o(o,n)&&(r.m[n]=o[n]);if(l)var u=l(r)}for(t&&t(i);c<a.length;c++)s=a[c],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(u)},i=self["webpackChunkseproject"]=self["webpackChunkseproject"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=r.O(void 0,[504],(function(){return r(9058)}));i=r.O(i)})();
//# sourceMappingURL=app.19aa32ed.js.map