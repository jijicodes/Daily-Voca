(this["webpackJsonpdaily-voc"]=this["webpackJsonpdaily-voc"]||[]).push([[0],{28:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n.n(c),i=n(20),r=n.n(i),a=(n(28),n(6)),d=n(21),j=n.n(d),o=n(23),b=(n(47),n(10)),l=(n(48),n(0)),u=function(){var e=Object(b.a)(new Date,"yyyy"),t=Object(b.a)(new Date,"MMM d");return Object(l.jsxs)("div",{className:"date",children:[Object(l.jsxs)("h1",{children:["| ",e]}),Object(l.jsx)("div",{children:t})]})},h=(n(50),function(e){var t=e.phrase,n=e.pronunciation,c=e.sentence,s=e.definition,i=e.audioUrl;return Object(l.jsxs)("div",{className:"wordCard",children:[Object(l.jsx)("h1",{children:t}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("button",{className:"audioButton",onClick:function(){return i},children:"\ud83d\udde3\ufe0f"})," ","[",n,"]"]}),Object(l.jsx)("h4",{children:c}),Object(l.jsx)("div",{className:"defnition",children:s})]})}),O=(n(51),function(e){var t=e.onPress,n=e.label;return Object(l.jsx)("button",{className:"genericButton",onClick:t,children:n})}),x=n(22),f=Object(x.a)(new Date),v=function(e){var t=e.onReviewToggle,n=e.wordList,c=function(e,t){return t[e%t.length]}(f,n);return Object(l.jsx)("div",{className:"body",children:Object(l.jsxs)("div",{className:"frame",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("p",{className:"title",children:["word ",Object(l.jsx)("br",{})," of the ",Object(l.jsx)("br",{})," day."]}),Object(l.jsx)(u,{})]}),c&&Object(l.jsx)(h,Object(o.a)({},c)),Object(l.jsx)(O,{label:"Review the Word",onPress:t})]})})},m=n(11),g=(n(52),function(e){var t=e.phrase,n=e.definition,c=e.starred,s=e.onStarToggle;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{className:"word",children:Object(l.jsx)("div",{children:t})}),Object(l.jsx)("td",{className:"def",children:Object(l.jsx)("div",{children:n})}),Object(l.jsx)("td",{children:Object(l.jsx)(O,{label:c?Object(l.jsx)(m.b,{size:30}):Object(l.jsx)(m.a,{size:30}),onPress:s})})]})}),w=(n(53),function(e){var t=e.wordList,n=e.onClick,s=Object(c.useState)(),i=Object(a.a)(s,2),r=i[0],d=i[1];return Object(l.jsxs)("div",{className:"reviewView",children:[Object(l.jsx)("button",{className:"backButton",onClick:n,children:"\ud83d\udd19"}),Object(l.jsx)("div",{className:"header",children:Object(l.jsx)("p",{children:" Review the Words"})}),Object(l.jsx)("div",{className:"wordListItem",children:Object(l.jsx)("table",{children:t.map((function(e){return Object(l.jsx)(g,{phrase:e.phrase,definition:e.definition,starred:e.starred,onStarToggle:function(){return d(r)}},e.phrase)}))})})]})});n(54);var p=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1];Object(c.useEffect)((function(){j.a.get("https://gist.githubusercontent.com/jijicodes/d077ebaeddf0b273a6e3ed79e9383a32/raw/a8d2172cddf2d27e88964e5d8dd197290edde849/koreanWord.json").then((function(e){return e.data})).then(s)}),[]),console.log(n);var i=Object(c.useState)(!1),r=Object(a.a)(i,2),d=r[0],o=r[1];return Object(l.jsx)("div",{children:d?Object(l.jsx)(w,{wordList:n,onClick:function(){return o(!1)}}):Object(l.jsx)(v,{onReviewToggle:function(){return o(!0)},wordList:n})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),i(e),r(e)}))};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),N()}},[[55,1,2]]]);
//# sourceMappingURL=main.4643074a.chunk.js.map