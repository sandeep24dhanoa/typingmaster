(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(42),c=a.n(l),s=(a(85),a(56),a(20)),u=a(5),m=a(37),i=a.n(m);var o=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex justify-center py-4 bg-blue-500"},r.a.createElement("div",{className:" text-3xl text-white font-bold"},"Typing Master")),r.a.createElement("div",{className:" w-screen h-screen text-xl justify-center items-center bg-gray-400 p-5"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"text-black underline"},"Back"))),r.a.createElement("div",{className:"flex w-screen h-screen text-2xl justify-center items-center p-8 bg-gray-400"},[1,2,3,5].map((function(e){return r.a.createElement(s.b,{to:"/typingtest?time=".concat(e)},r.a.createElement("button",{className:" border p-4 rounded-full text-gray-800 shadow-2xl border-xl mr-4 border-blue-800 bg-white"},e," Min Test"))})))))};function d(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex w-screen h-screen text-2xl justify-center items-center p-8 bg-gray-400"},r.a.createElement(s.b,{to:"/timerset"},r.a.createElement("button",{className:" border p-4 rounded-full text-gray-800 shadow-2xl border-xl mr-4 border-blue-800 bg-white"},"Next"))))}var b=a(41),E=a(120),f=a(121),x=a(122),v=a(123);var p=function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],c=a[1],m=Object(n.useState)(0),o=Object(b.a)(m,2),d=(o[0],o[1]),p=Object(n.useState)(!0),g=Object(b.a)(p,2),N=g[0],y=g[1],h=r.a.useState(60),w=Object(b.a)(h,2),j=w[0],k=w[1],S=Object(n.useRef)(),O=new URLSearchParams(Object(u.e)().search).get("time"),M=function(e){var t,a=e;return(null===(t=a=a.match(/\b[-?(\w+)?]+\b/gi))||void 0===t?void 0:t.length)||0};return Object(n.useEffect)((function(){d(M(l))}),[l]),Object(n.useEffect)((function(){var e=j>0&&setInterval((function(){return k(j-1)}),1e3);return function(){return clearInterval(e)}}),[j]),console.log(S,"TIMER"),r.a.createElement("div",null,r.a.createElement("div",{className:"flex justify-center py-4 bg-blue-500"},r.a.createElement("div",{className:" text-3xl text-white font-bold"},"Typing Master")),r.a.createElement("div",{className:" w-screen h-screen text-xl justify-center items-center bg-gray-400 p-5"},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("button",{className:"text-black underline mx-10"},"Back")),r.a.createElement(s.b,{to:"/timerset"},r.a.createElement("button",{className:"text-black underline"},"Select time"))),r.a.createElement("div",{className:"flex justify-center items-center rounded-lg"},r.a.createElement("div",{className:"p-10 bg-white rounded-full"},"Word Count",r.a.createElement("div",{className:"text-red-600"},M(l))),r.a.createElement("div",{className:"p-10 px-16 m-10 bg-white rounded-full "},"Timer",r.a.createElement("div",null,r.a.createElement(i.a,{ref:S,initialTime:6e4*Number(O),direction:"backward",startImmediately:!1,onStart:function(){return y(!1)},onStop:function(){return y(!0)}},(function(e){e.start,e.reset;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(i.a.Minutes,null),":",r.a.createElement(i.a.Seconds,null),":",r.a.createElement(i.a.Milliseconds,null)))}))))),r.a.createElement("div",{className:"flex justify-between items-center"},r.a.createElement("div",null,r.a.createElement(f.a,{className:"bg-blue-700 p-8 rounded-full",type:"button",onClick:function(){S.current.start()}},"Start")," "),r.a.createElement("div",{className:"text-white"},r.a.createElement(x.a,{className:"bg-blue-700 p-8 rounded-full",type:"button",onClick:function(){S.current.reset()}},"Reset")," "),r.a.createElement("div",{className:"text-white"},r.a.createElement(v.a,{className:"bg-blue-700 p-8 rounded-full",type:"button",onClick:function(){S.current.stop()}},"Stop"))),r.a.createElement("div",{className:"text-center mt-10"},r.a.createElement(E.a.TextArea,{className:"border rounded-xl border-black",type:"text",value:l,onChange:function(e){return c(e.target.value)},rows:10,cols:100,disabled:N}))))};function g(){return r.a.createElement("div",{className:""},r.a.createElement(s.a,null,r.a.createElement(u.a,{exact:!0,path:"/",component:d}),r.a.createElement(u.a,{exact:!0,path:"/typingtest",component:p}),r.a.createElement(u.a,{exact:!0,path:"/timerset",component:o})))}var N=document.getElementById("root");c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),N)},56:function(e,t,a){},80:function(e,t,a){e.exports=a(117)}},[[80,1,2]]]);
//# sourceMappingURL=main.41cb4fa6.chunk.js.map