(this.webpackJsonpsafesound=this.webpackJsonpsafesound||[]).push([[0],{17:function(t,e,n){t.exports={band__logo:"Main_band__logo__2bEiL",main__block:"Main_main__block__165Ch",main__items:"Main_main__items__1gyz_",main__chosen:"Main_main__chosen__1xLcI",main__item:"Main_main__item__2oCvM",buttons:"Main_buttons__3PYvY",url:"Main_url__2ZUFN",href:"Main_href__3b_-Z"}},18:function(t,e,n){t.exports={header__title:"Header_header__title__2fUP_",header:"Header_header__2KBd_",header__items:"Header_header__items__1ufH8",header__item:"Header_header__item__3vATF"}},4:function(t,e,n){t.exports={main__block:"SearchPages_main__block__3w2dA",main__items:"SearchPages_main__items__GT-AP",text:"SearchPages_text__1tvrR",main__chosen:"SearchPages_main__chosen__1W6Le",title:"SearchPages_title__HI9hD",url:"SearchPages_url__1IpgH",buttons:"SearchPages_buttons__h5X5I",form:"SearchPages_form__2zBfH",form__item:"SearchPages_form__item__kb2do",search__input:"SearchPages_search__input__1WdlY",search__btn:"SearchPages_search__btn__LMw76"}},5:function(t,e,n){t.exports={main__container:"AboutSingers_main__container__1iN7w",main__items__container:"AboutSingers_main__items__container__DgY4p",main__items:"AboutSingers_main__items__c_yL2",subtitle:"AboutSingers_subtitle__mBw0P",main__tags_grid:"AboutSingers_main__tags_grid__3Lr3p",main__image_block:"AboutSingers_main__image_block__28fzd",main__tags_item:"AboutSingers_main__tags_item__26Xtr",main__text:"AboutSingers_main__text__27vxe",main__item_header:"AboutSingers_main__item_header__2uKv0"}},57:function(t,e,n){},58:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(1),c=n.n(r),s=n(30),i=n.n(s),o=(n(57),n(20)),u=n(21),_=n(24),j=n(23),b=n(6),l=(n(58),n(7)),m=n(18),d=n.n(m),h=function(){return Object(a.jsxs)("div",{className:d.a.header,children:[Object(a.jsx)("div",{children:Object(a.jsx)("h1",{className:d.a.header__title,children:"SafeSound"})}),Object(a.jsxs)("div",{className:d.a.header__items,children:[Object(a.jsx)("div",{className:d.a.header__item,children:Object(a.jsx)(l.b,{to:"/TopSongs",children:"TopSongs"})}),Object(a.jsx)("div",{className:d.a.header__item,children:Object(a.jsx)(l.b,{to:"/SearchPage",children:"Search"})}),Object(a.jsx)("div",{className:d.a.header__item,children:Object(a.jsx)(l.b,{to:"/FavoritePage",children:"Favorite"})}),Object(a.jsx)("div",{className:d.a.header__item,children:Object(a.jsx)(l.b,{to:"/History",children:"History"})})]})]})},f=n(2),O=n(14),g=n(16),p=n.n(g),x=n(26),v=n(25),k=n(9),N=n(27),S="f28701d385b2ae4c38e3d61054b5845e",y=function(t){return N.get("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=".concat(S,"&format=json&limit=").concat(t)).then((function(t){return t.data.tracks.track}))},w=function(t){return N.get("https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=".concat(t,"&api_key=").concat(S,"&format=json&limit=1")).then((function(t){return t.data.artist}))},L=function(t){return N.get("https://ws.audioscrobbler.com/2.0/?method=track.search&track=".concat(t,"&api_key=").concat(S,"&format=json")).then((function(t){return t.data.results.trackmatches.track}))},P=function(t){return N.get("https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=".concat(t,"&api_key=").concat(S,"&format=json")).then((function(t){return t.data.topalbums.album}))},C=function(t,e){return N.get("https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=".concat(S,"&artist=").concat(t,"&track=").concat(e,"&format=json")).then((function(t){return t.data.track}))},T="SET_SONGS",A="SET_AUTHOR",E="SET_SONG",M="SET_TRACKS",H="SET_FAVORITE",F="DELETE_FAVORITE",I="SET_ALBUMS",B={songs:[],artist:[],song:[],tracks:[],favorite:[],albums:[],history:[]},D=function(t){return{type:A,artist:t}},R=function(t,e){return{type:M,track:t,word:e}},K=function(t){return{type:H,favorite:t}},U=function(t){return{type:E,song:t}},Y=function(t,e){return function(){var n=Object(x.a)(p.a.mark((function n(a){var r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,C(t,e);case 2:r=n.sent,a(U(r));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},z=function(t){return function(){var e=Object(x.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:a=e.sent,n(D([a]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},G=function(t){return function(){var e=Object(x.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:a=e.sent,n(R(a,t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case T:return Object(k.a)(Object(k.a)({},t),{},{songs:e.songs});case A:return Object(k.a)(Object(k.a)({},t),{},{artist:e.artist});case E:return Object(k.a)(Object(k.a)({},t),{},{song:e.song});case M:return Object(k.a)(Object(k.a)({},t),{},{tracks:e.track,history:Object(v.a)(new Set([e.word].concat(Object(v.a)(t.history))))});case H:return Object(k.a)(Object(k.a)({},t),{},{favorite:[].concat(Object(v.a)(t.favorite),[e.favorite])});case I:return Object(k.a)(Object(k.a)({},t),{},{albums:e.albums});case F:return Object(k.a)(Object(k.a)({},t),{},{favorite:t.favorite.filter((function(t){return t.artist!==e.song&&t.song!==e.artist}))});default:return t}},J=n(11),W=n(17),X=n.n(W),Z=n(84),q=n(85),Q=function(t){var e=t.image,n=t.name,r=t.artist,c=t.url,s=Object(f.d)((function(t){return t.songsList.favorite})),i=Object(f.d)((function(t){return t.songsList})).favorite.filter((function(t){return t.song===n&&t.artist===r})).length,o=Object(f.c)();return Object(a.jsx)("div",{className:X.a.main__block,children:Object(a.jsxs)("div",{className:i?X.a.main__chosen:X.a.main__items,children:[Object(a.jsx)("div",{className:X.a.main__item,children:Object(a.jsx)("img",{className:X.a.band__logo,src:e,alt:"songs-image"})}),Object(a.jsx)("div",{className:X.a.main__item,children:Object(a.jsxs)("h3",{children:[Object(a.jsx)(l.b,{onClick:function(){return o(z(r))},to:"/about",children:r.toString()}),Object(a.jsx)("span",{children:" - "}),Object(a.jsx)(l.b,{onClick:function(){return o(Y(r,n))},to:"/track",children:n.toString()})]})}),Object(a.jsxs)("div",{className:X.a.url,children:[Object(a.jsx)("a",{className:X.a.href,href:c,target:"_blank",children:"Author's Page"}),Object(a.jsx)("div",{className:X.a.buttons,children:i?Object(a.jsx)(Z.a,{style:{paddingLeft:"10px"}}):Object(a.jsx)(q.a,{onClick:function(){return function(t,e,n){s.length&&0===s.filter((function(n){return n.artist===t&&n.song===e})).length&&o(K({artist:t,song:e,url:n})),0===s.length&&o(K({artist:t,song:e,url:n}))}(r,n,c)},twoToneColor:"#52c41a",style:{paddingLeft:"10px",cursor:"pointer"}})})]})]})})},$=function(t){var e=t.songs,n=Object.values(e).map((function(t){return t.image})).map((function(t){return t[3]})).map((function(t){return Object.values(t)})).map((function(t){return t[0]})),r=e.map((function(t){return Object(a.jsx)(Q,{image:n.map((function(t){return t})),name:t.name,artist:t.artist.name,url:t.artist.url},Object(J.a)())}));return Object(a.jsx)("div",{className:"",children:r})},tt=function(t){Object(_.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)($,{songs:this.props.songs})}},{key:"componentDidMount",value:function(){this.props.setSongs(20)}}]),n}(c.a.Component),et=Object(O.d)(Object(f.b)((function(t){return{songs:t.songsList.songs}}),{setSongs:function(t){return function(){var e=Object(x.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:a=e.sent,n({type:T,songs:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(tt),nt=n(5),at=n.n(nt),rt=function(t){var e=t.tag;return Object(a.jsx)("div",{className:at.a.main__tags_item,children:Object(a.jsx)("h4",{children:e})})},ct=function(t){var e=t.image,n=t.artistName,c=t.text,s=t.tags.map((function(t){return Object(a.jsx)(rt,{tag:t},Object(J.a)())})),i=Object(f.c)();Object(r.useEffect)((function(){var t;i((t=n,function(){var e=Object(x.a)(p.a.mark((function e(n){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t);case 2:a=e.sent,n({type:I,albums:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[]);var o=Object(f.d)((function(t){return t.songsList.albums}));return Object(a.jsx)("div",{className:at.a.main__items__container,children:Object(a.jsxs)("div",{className:at.a.main__items,children:[Object(a.jsxs)("div",{className:at.a.main__image_block,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:e,alt:"artist-image"})}),Object(a.jsx)("div",{children:Object(a.jsx)("h3",{className:at.a.main__item_header,children:n})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h4",{className:at.a.subtitle,children:"Albums:"}),Object(a.jsx)("div",{className:at.a.album__wrapper,children:o.map((function(t){return Object(a.jsx)("p",{children:t.name})}))})]})]}),Object(a.jsx)("div",{className:at.a.main__item,children:Object(a.jsx)("p",{className:at.a.main__text,children:c})}),Object(a.jsx)("div",{className:at.a.main__tags_grid,children:s})]})})},st=function(t){var e=t.artist,n=Object.values(e).map((function(t){return t.image})).map((function(t){return t[3]})).map((function(t){return Object.values(t)})),r=e.map((function(t){return Object(a.jsx)(ct,{image:n,tags:e[0].tags.tag.map((function(t){return t.name})),artistName:e[0].name,text:e[0].bio.content},Object(J.a)())}));return Object(a.jsx)("div",{className:at.a.main__container,children:r})},it=function(t){Object(_.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsx)(st,{artist:this.props.artist})}}]),n}(c.a.Component),ot=Object(O.d)(Object(f.b)((function(t){return{artist:t.songsList.artist}}),{setArtist:z}))(it),ut=n(51),_t=n(4),jt=n.n(_t),bt=function(t){var e=Object(r.useState)(""),n=Object(ut.a)(e,2),c=n[0],s=n[1],i=Object(f.c)(),o=Object(f.d)((function(t){return t.songsList.history}))[0];var u=null!=o?o:"Song's Search";return Object(a.jsx)("div",{className:jt.a.main__block,children:Object(a.jsx)("div",{className:jt.a.form,children:Object(a.jsxs)("div",{className:jt.a.form__item,children:[Object(a.jsx)("input",{className:jt.a.search__input,value:c,onChange:function(t){return s(t.target.value)},onKeyPress:function(t){return function(t){"Enter"===t.key&&i(G(t.target.value))}(t)},component:"input",autoComplete:"off",placeholder:u}),Object(a.jsx)("button",{onClick:function(){return function(){if(""!=Object(v.a)(new Set(c.split(""))).join(""))return i(G(c))}()},className:jt.a.search__btn,children:"Search"})]})})})},lt=function(t){var e=t.artist,n=t.name,c=t.url,s=Object(f.d)((function(t){return t.songsList})),i=s.favorite.filter((function(t){return t.song===n&&t.artist===e})).length,o=Object(f.c)();Object(r.useEffect)((function(){}),[s.favorite]);return Object(a.jsxs)("div",{className:i?jt.a.main__chosen:jt.a.main__items,children:[Object(a.jsxs)("h3",{className:jt.a.title,children:[Object(a.jsx)(l.b,{onClick:function(){return o(z(e))},to:"/about",children:e.toString()}),Object(a.jsx)("span",{children:" - "}),Object(a.jsx)(l.b,{onClick:function(){return o(Y(e,n))},to:"/track",children:n.toString()})]}),Object(a.jsxs)("div",{className:jt.a.url,children:[Object(a.jsx)("a",{className:jt.a.href,href:c,children:"Author's Page"}),Object(a.jsx)("div",{className:jt.a.buttons,children:i?Object(a.jsx)(Z.a,{style:{paddingLeft:"10px"}}):Object(a.jsx)(q.a,{onClick:function(){return function(t,e){s.favorite.length&&0===s.favorite.filter((function(n){return n.artist===t&&n.song===e})).length&&o(K({artist:t,song:e,url:c})),0===s.favorite.length&&o(K({artist:t,song:e,url:c}))}(e,n)},twoToneColor:"#52c41a",style:{paddingLeft:"10px",cursor:"pointer"}})})]})]})},mt=function(t){var e=t.tracks,n=(t.formValue,e.map((function(t){return Object(a.jsx)(lt,{artist:t.artist,name:t.name,url:t.url},Object(J.a)())})));return Object(a.jsxs)("div",{className:"",children:[Object(a.jsx)(bt,{}),n]})},dt=Object(O.d)(Object(f.b)((function(t){return{tracks:t.songsList.tracks}})))(mt),ht=n(86),ft=function(){var t=Object(f.c)(),e=Object(f.d)((function(t){return t.songsList.favorite}));return Object(a.jsx)("div",{className:jt.a.main__block,children:e.map((function(e){return Object(a.jsxs)("div",{className:jt.a.main__items,children:[Object(a.jsxs)("h3",{className:jt.a.title,children:[Object(a.jsx)(l.b,{onClick:function(){return t(z(e.artist))},to:"/about",children:e.artist.toString()}),Object(a.jsx)("span",{children:" - "}),Object(a.jsx)(l.b,{onClick:function(){return t(Y(e.artist,e.song))},to:"/track",children:e.song.toString()})]}),Object(a.jsxs)("div",{className:jt.a.url,children:[Object(a.jsx)("a",{className:jt.a.href,href:e.url,children:"Author's Page"}),Object(a.jsx)("div",{className:jt.a.buttons,children:Object(a.jsx)(ht.a,{onClick:function(){return t((n=e.artist,a=e.song,{type:F,song:n,artist:a}));var n,a},twoToneColor:"#eb2f96",style:{paddingLeft:"8px",paddingTop:"4px",cursor:"pointer"}})})]})]},Object(J.a)())}))})},Ot=function(){var t=Object(f.d)((function(t){return t.songsList.history}));return Object(a.jsx)("div",{className:jt.a.main__block,children:t.map((function(t){return Object(a.jsx)("div",{className:jt.a.main__items,children:Object(a.jsx)("h3",{className:jt.a.text,children:t})},Object(J.a)())}))})},gt=function(){var t,e=Object(f.d)((function(t){return t.songsList.song}));return e.hasOwnProperty("name")&&(t=e.album.image.map((function(t){return Object.values(t)}))[3][0]),e.hasOwnProperty("album")?Object(a.jsx)("div",{className:at.a.main__items__container,children:Object(a.jsxs)("div",{className:at.a.main__items,children:[Object(a.jsxs)("div",{className:at.a.main__image_block,children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:t,alt:"artist-image"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("h3",{className:at.a.main__item_header,children:[e.artist.name," - ",e.name]})})]}),Object(a.jsxs)("div",{className:at.a.main__item,children:[Object(a.jsx)("p",{className:at.a.main__text,children:e.wiki.summary}),Object(a.jsxs)("p",{className:at.a.main__text,children:["Duration ",function(t){var e=Math.floor(t/6e4),n=t%6e4*.001;return n<10?"".concat(e,".0").concat(n):"".concat(e,".").concat(n)}(e.duration)]}),Object(a.jsx)("p",{className:at.a.main__text,children:e.wiki.published})]})]})}):Object(a.jsx)("div",{})},pt=function(t){Object(_.a)(n,t);var e=Object(j.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(h,{}),Object(a.jsxs)("div",{className:"app-components",children:[Object(a.jsx)(b.a,{path:"/TopSongs",render:function(){return Object(a.jsx)(et,{})}}),Object(a.jsx)(b.a,{path:"/about",render:function(){return Object(a.jsx)(ot,{})}}),Object(a.jsx)(b.a,{path:"/SearchPage",render:function(){return Object(a.jsx)(dt,{})}}),Object(a.jsx)(b.a,{path:"/FavoritePage",render:function(){return Object(a.jsx)(ft,{})}}),Object(a.jsx)(b.a,{path:"/History",render:function(){return Object(a.jsx)(Ot,{})}}),Object(a.jsx)(b.a,{path:"/Track",render:function(){return Object(a.jsx)(gt,{})}})]})]})}}]),n}(r.Component),xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))},vt=n(50),kt=Object(O.c)({songsList:V}),Nt=Object(O.e)(kt,Object(O.a)(vt.a));window.store=Nt;var St=Nt;i.a.render(Object(a.jsx)(l.a,{children:Object(a.jsx)(f.a,{store:St,children:Object(a.jsx)(pt,{})})}),document.getElementById("root")),xt()}},[[82,1,2]]]);
//# sourceMappingURL=main.ad485f88.chunk.js.map