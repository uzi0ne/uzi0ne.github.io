(function(){"use strict";var e={151:function(e,t,i){var s=i(5471),r=i(8505),n=function(){var e=this,t=e._self._c;return t(r.A,[t("router-view")],1)},o=[],a={name:"App"},l=a,c=i(1656),u=(0,c.A)(l,n,o,!1,null,null,null),h=u.exports,m=i(5453);s.Ay.use(m.A);const d={primary:"#4CAF50",secondary:"#9C27b0",accent:"#9C27b0",info:"#00CAE3"};var v=new m.A({theme:{dark:!0,themes:{dark:d,light:d}},breakpoint:{thresholds:{xs:480,sm:1024,md:1280,lg:1919}}}),f=i(1271),p=i(8400),g=i(6521),y=i(1689),A=i(8834),k=i(1526),b=i(6278),_=i(9456),x=i(7954),C=i(1228),w=i(8412),M=i(1554),S=i(7410),Q=i(9940),D=function(){var e=this,t=e._self._c;return t(r.A,{staticClass:"overflow-hidden"},[t(f.A,{attrs:{fixed:""}},[t("span",{staticClass:"title",staticStyle:{"font-style":"italic"}},[e._v("CineMatch")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/"}},[e._v("홈")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/about"}},[e._v("추천")]),t(S.A),t(C.A,{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t(Q.A,{attrs:{"hide-details":"auto",label:"영화 제목 검색..",color:"red"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),t(g.A,{attrs:{icon:""},on:{click:e.performSearch}},[t(_.A,[e._v("mdi-magnify")])],1),t(p.A)],1),t(x.A,[t(b.A,{staticClass:"mt-12"},[t(w.A,[t(k.A,{attrs:{cols:"12",sm:"2"}},[t(M.A,{staticClass:"genre-select",attrs:{items:e.genres,label:"장르 선택","single-line":"","item-text":"name","item-value":"name",color:"red"},on:{change:e.filterMoviesByGenre},model:{value:e.selectedGenre,callback:function(t){e.selectedGenre=t},expression:"selectedGenre"}})],1)],1),t(w.A,e._l(e.visibleMovies,(function(i,s){return t(k.A,{key:s,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[t(y.A,{staticClass:"movie-card",attrs:{flat:""},on:{click:function(t){return e.showDetail(i.title)}}},[t(A.ri,{staticClass:"text-center text-h5"},[e._v(e._s(i.title))]),t(A.ZR,{staticClass:"text-center genre-text"},[e._v(e._s(i.genres.split(", ").join(", ")))])],1)],1)})),1)],1)],1)],1)},O=[],E=(i(4114),i(1250));E.A.defaults.baseURL="http://localhost:8080";var $=E.A,P={name:"MainPage",data(){return{searchQuery:"",movies:[],visibleMovies:[],selectedGenre:null,genres:[{name:"Action"},{name:"Comedy"},{name:"Drama"},{name:"Fantasy"},{name:"Horror"},{name:"Romance"},{name:"Thriller"}],pageSize:10,nextPage:0,loading:!1}},mounted(){this.getAllMovies(),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{performSearch(){this.searchQuery.trim()&&$.get(`/api/movie/title/${this.searchQuery.trim()}`).then((e=>{e.data?this.$router.push({name:"movie-detail",params:{title:e.data.title}}):console.log("영화를 찾을 수 없습니다.")})).catch((e=>{console.error("Error fetching movie detail:",e)}))},getAllMovies(){$.get("/all").then((e=>{this.movies=e.data,this.addMoviesToView()})).catch((e=>{console.error("Error fetching movies:",e)}))},addMoviesToView(){if(this.loading)return;this.loading=!0;const e=this.movies.slice(this.nextPage*this.pageSize,(this.nextPage+1)*this.pageSize);this.visibleMovies.push(...e),this.nextPage++,this.loading=!1},handleScroll(){let e=window.innerHeight+window.scrollY>=document.body.offsetHeight-10;e&&!this.loading&&this.addMoviesToView()},filterMoviesByGenre(){this.selectedGenre?this.visibleMovies=this.movies.filter((e=>e.genres.includes(this.selectedGenre))):this.getAllMovies()},showDetail(e){$.get(`/api/movie/${e}`).then((e=>{this.$router.push({name:"movie-detail",params:{title:e.data.title}})})).catch((e=>{console.error("Error fetching movie detail:",e)}))}}},j=P,G=(0,c.A)(j,D,O,!1,null,null,null),T=G.exports,z=i(2006),q=function(){var e=this,t=e._self._c;return t(r.A,{staticClass:"overflow-hidden"},[t(f.A,{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[t("span",{staticClass:"title",staticStyle:{"font-style":"italic"}},[e._v("CineMatch")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/"}},[e._v("홈")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/about"}},[e._v("추천")]),t(S.A),t(C.A,{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t(Q.A,{attrs:{"hide-details":"auto",label:"영화 제목 검색..",color:"red"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.performSearch.apply(null,arguments)}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),t(g.A,{attrs:{icon:""},on:{click:e.performSearch}},[t(_.A,[e._v("mdi-magnify")])],1),t(p.A)],1),t(b.A,[t(z.A,{staticClass:"recommendation-title"},[e._v("나와 비슷한 취향의 사람들이 추천하는 영화")])],1),t(b.A,[t(w.A,e._l(e.visibleMovies,(function(i,s){return t(k.A,{key:s,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[t(y.A,{staticClass:"movie-card",attrs:{flat:""}},[t(A.ri,{staticClass:"text-center text-h5"},[e._v(e._s(i.title))]),t(A.ZR,{staticClass:"text-center genre-text"},[e._v(e._s(i.genres.split(", ").join(", ")))])],1)],1)})),1)],1)],1)},R=[],B={name:"MainPage",data(){return{searchQuery:"",movies:[],visibleMovies:[],selectedGenre:null,genres:[],pageSize:10,nextPage:0,loading:!1}},mounted(){this.getAllMovies(),window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{performSearch(){this.searchQuery.trim()&&this.$router.push({path:"/search",query:{q:this.searchQuery}})},getAllMovies(){$.get("/all").then((e=>{this.movies=e.data,this.addMoviesToView()})).catch((e=>{console.error("Error fetching movies:",e)}))},addMoviesToView(){if(this.loading)return;this.loading=!0;const e=this.movies.slice(this.nextPage*this.pageSize,(this.nextPage+1)*this.pageSize);this.visibleMovies.push(...e),this.nextPage++,this.loading=!1},handleScroll(){let e=window.innerHeight+window.scrollY>=document.body.offsetHeight-10;e&&!this.loading&&this.addMoviesToView()},fetchGenres(){$.get("/genres").then((e=>{this.genres=e.data})).catch((e=>{console.error("Error fetching genres:",e)}))},filterMoviesByGenre(){this.selectedGenre?this.visibleMovies=this.movies.filter((e=>e.genres.includes(this.selectedGenre))):this.getAllMovies()}}},V=B,H=(0,c.A)(V,q,R,!1,null,null,null),L=H.exports,Z=function(){var e=this,t=e._self._c;return t(r.A,{staticClass:"overflow-hidden"},[t(f.A,{attrs:{absolute:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[t("span",{staticClass:"title",staticStyle:{"font-style":"italic"}},[e._v("CineMatch")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/"}},[e._v("홈")]),t("router-link",{staticClass:"menu",staticStyle:{color:"white"},attrs:{to:"/about"}},[e._v("추천")]),t(S.A),t(C.A,{staticClass:"mx-auto",attrs:{"max-width":"344"}},[t(Q.A,{attrs:{"hide-details":"auto",label:"영화 제목 검색..",color:"red"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getMovieDetails.apply(null,arguments)}},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}})],1),t(g.A,{attrs:{icon:""},on:{click:e.getMovieDetails}},[t(_.A,[e._v("mdi-magnify")])],1),t(p.A)],1),t("br"),t("br"),t(z.A,{staticStyle:{"font-size":"24px","font-weight":"bold","margin-top":"40px !important",padding:"50px !important"}},[e._v("검색 결과")]),t(b.A,[t(w.A,e._l(e.filteredMovies,(function(i,s){return t(k.A,{key:s,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[t(y.A,{staticClass:"movie-card",attrs:{flat:""},on:{click:function(t){return e.toggle(i)}}},[t(A.ri,{staticClass:"text-center text-h5"},[e._v(e._s(i.title))]),t(A.ZR,{staticClass:"text-center genre-text"},[e._v(e._s(i.genres.join(", ")))])],1)],1)})),1)],1),0===e.filteredMovies.length?t("div",{staticStyle:{"text-align":"center","margin-top":"20px"}},[t("p",[e._v("일치하는 영화가 없습니다.")])]):e._e()],1)},F=[],I={name:"SearchPage",data(){return{searchQuery:this.$route.query.q||"",model:1,filteredMovies:[]}},mounted(){this.searchQuery.trim()&&this.getMovieDetails()},methods:{getMovieDetails(){this.searchQuery.trim()&&E.A.get(`/search/${encodeURIComponent(this.searchQuery)}`).then((e=>{if(!e.data||0===e.data.length)return console.error("Empty response received."),void(this.filteredMovies=[]);this.filteredMovies=e.data.map((e=>({id:e.movie_Id,title:e.title,genres:e.genres.split("|")})))})).catch((e=>{console.error("Error fetching search results:",e),this.filteredMovies=[]}))},toggle(e){this.$router.push({name:"MovieDetail",params:{id:e.id}})}}},U=I,Y=(0,c.A)(U,Z,F,!1,null,null,null),J=Y.exports,K=i(8230),N=function(){var e=this,t=e._self._c;return t(b.A,[t(g.A,{on:{click:e.goBack}},[e._v("이전으로")]),t(y.A,[t(A.ri,{staticClass:"headline"},[e._v(e._s(e.movieDetail.title))]),t(A.ZR,{staticClass:"subtitle"},[e._v(e._s(e.movieDetail.genres))]),t("div",{staticClass:"rating"},e._l(5,(function(e,i){return t(y.A,{key:i},[t("svg",{staticClass:"star",attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#ffd700","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[t("polygon",{key:i,attrs:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}})])])})),1),t("div",{staticClass:"like-dislike-icons"},[t(g.A,{on:{click:e.like}},[t(_.A,{staticStyle:{"font-size":"40px"},on:{click:e.like}},[e._v("mdi-thumb-up")])],1),t(g.A,{on:{click:e.dislike}},[t(_.A,{staticStyle:{"font-size":"40px !important","margin-left":"20px"},on:{click:e.dislike}},[e._v("mdi-thumb-down")])],1)],1),t(w.A,[t(k.A,{attrs:{cols:"3"}},[t(K.A,{on:{submit:function(t){return t.preventDefault(),e.submitComment.apply(null,arguments)}}},[t(Q.A,{staticClass:"text-field",attrs:{label:"영화에 대해 알려주세요!",required:"",color:"red"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitComment.apply(null,arguments)}},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}})],1)],1),t(k.A,{attrs:{cols:"1"}},[t(g.A,{staticClass:"button",on:{click:e.submitComment}},[e._v("글쓰기")])],1)],1),e._l(e.comments,(function(i,s){return t(y.A,{key:s},[t(A.OQ,[e._v(e._s(i.content))])],1)}))],2)],1)},W=[],X={name:"MovieDetail",data(){return{movieDetail:{},comment:"",comments:[]}},created(){this.fetchMovieDetail(),this.fetchComments()},methods:{fetchMovieDetail(){const e=this.$route.params.title;$.get(`/api/movie/${e}`).then((e=>{this.movieDetail=e.data})).catch((e=>{console.error("영화 상세정보를 불러오는 중 에러 발생:",e)}))},fetchComments(){const e=this.$route.params.title;$.get(`/search/${e}/comments`).then((e=>{this.comments=e.data})).catch((e=>{console.error("코멘트를 불러오는 중 에러 발생:",e)}))},submitComment(){if(!this.comment.trim())return;const e=this.$route.params.title;$.post(`/search/${e}/comments`,{content:this.comment}).then((()=>{this.fetchComments(),this.comment=""})).catch((e=>{console.error("코멘트 전송 중 에러 발생:",e)}))},goBack(){this.$router.go(-1)}}},ee=X,te=(0,c.A)(ee,N,W,!1,null,"6074eef2",null),ie=te.exports,se=i(173);s.Ay.use(se.Ay);const re=[{path:"/",name:"home",component:T},{path:"/about",name:"about",component:L},{path:"/search",name:"search",component:J,props:!0},{path:"/movie/:title",name:"movie-detail",component:ie}],ne=new se.Ay({mode:"history",base:"/",routes:re});var oe=ne;i(4301);s.Ay.config.productionTip=!1,s.Ay.prototype.$axios=E.A,new s.Ay({router:oe,vuetify:v,render:e=>e(h)}).$mount("#app")}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.m=e,function(){var e=[];i.O=function(t,s,r,n){if(!s){var o=1/0;for(u=0;u<e.length;u++){s=e[u][0],r=e[u][1],n=e[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&n||o>=n)&&Object.keys(i.O).every((function(e){return i.O[e](s[l])}))?s.splice(l--,1):(a=!1,n<o&&(o=n));if(a){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,r,n]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};i.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,n,o=s[0],a=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(l)var u=l(i)}for(t&&t(s);c<o.length;c++)n=o[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(u)},s=self["webpackChunkseproject"]=self["webpackChunkseproject"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(151)}));s=i.O(s)})();
//# sourceMappingURL=app.dd85898d.js.map