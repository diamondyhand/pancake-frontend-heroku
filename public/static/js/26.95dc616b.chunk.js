(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[26],{1524:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var i,o=n(15),c=n(14),r=n(0),l=n(6),u=n(3),d=n(92),a=n(22),s=n(35),b=n(384),j=n(107),O=n(138),x=n(73),h=n(227),f=n(195),p=n(255),m=n(1),v=Object(l.e)(u.v)(i||(i=Object(c.a)(["\n  background-color: ",";\n"])),(function(t){return t.theme.colors.dropdownDeep}));function k(){var t=Object(s.a)().account,e=Object(a.b)().t,n=Object(x.h)(),i=Object(r.useMemo)((function(){return n.map((function(t){return{liquidityToken:Object(x.a)(t),tokens:t}}))}),[n]),c=Object(r.useMemo)((function(){return i.map((function(t){return t.liquidityToken}))}),[i]),l=Object(j.f)(null!==t&&void 0!==t?t:void 0,c),k=Object(o.a)(l,2),y=k[0],g=k[1],q=Object(r.useMemo)((function(){return i.filter((function(t){var e,n=t.liquidityToken;return null===(e=y[n.address])||void 0===e?void 0:e.greaterThan("0")}))}),[i,y]),w=Object(O.c)(q.map((function(t){return t.tokens}))),T=g||(null===w||void 0===w?void 0:w.length)<q.length||(null===w||void 0===w?void 0:w.some((function(t){return!t}))),A=w.map((function(t){return Object(o.a)(t,2)[1]})).filter((function(t){return Boolean(t)}));return Object(m.jsx)(p.a,{children:Object(m.jsxs)(f.a,{children:[Object(m.jsx)(f.b,{title:"Your Liquidity",subtitle:"Remove liquidity to receive tokens back"}),Object(m.jsxs)(v,{children:[t?T?Object(m.jsx)(u.Wb,{color:"textSubtle",textAlign:"center",children:Object(m.jsx)(h.a,{children:"Loading"})}):(null===A||void 0===A?void 0:A.length)>0?A.map((function(t,e){return Object(m.jsx)(b.b,{pair:t,mb:e<A.length-1?"16px":0},t.liquidityToken.address)})):Object(m.jsx)(u.Wb,{color:"textSubtle",textAlign:"center",children:e("No liquidity found.")}):Object(m.jsx)(u.Wb,{color:"textSubtle",textAlign:"center",children:e("Connect to a wallet to view your liquidity.")}),t&&!T&&Object(m.jsxs)(u.T,{flexDirection:"column",alignItems:"center",mt:"24px",children:[Object(m.jsx)(u.Wb,{color:"textSubtle",mb:"8px",children:e("Don't see a pool you joined?")}),Object(m.jsx)(u.q,{id:"import-pool-link",variant:"secondary",scale:"sm",as:d.a,to:"/find",children:e("Find other LP tokens")})]})]}),Object(m.jsx)(u.w,{style:{textAlign:"center"},children:Object(m.jsx)(u.q,{id:"join-pool-button",as:d.a,to:"/add",width:"100%",startIcon:Object(m.jsx)(u.a,{color:"white"}),children:e("Add Liquidity")})})]})})}}}]);
//# sourceMappingURL=26.95dc616b.chunk.js.map