(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(3),o=n.n(i),s=(n(16),n(4)),l=n(5),d=n(6),u=n(10),b=n(9),j=n(7),h=n.n(j);function O(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,i=e.average,o=i()>=50?"green":"red";return Object(c.jsxs)("ul",{className:h.a.list,children:[Object(c.jsxs)("li",{children:["Good:",t]}),Object(c.jsxs)("li",{children:["Neutral:",n]}),Object(c.jsxs)("li",{children:["Bad:",a]}),Object(c.jsxs)("li",{children:["Total: ",r()]}),Object(c.jsxs)("li",{style:{color:o},children:["Average:",i(),"%"]})]})}var v=n(8),f=n.n(v);function x(e){var t=e.onLeaveFeedback;return Object(c.jsxs)("ul",{className:f.a.list,children:[Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){t("good")},children:"Good"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){return t("neutral")},children:"Neutral"})}),Object(c.jsx)("li",{children:Object(c.jsx)("button",{onClick:function(){return t("bad")},children:"Bad"})})]})}function g(e){var t=e.title,n=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:t}),n]})}function k(e){var t=e.message;return Object(c.jsx)("h1",{children:t})}var F=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,c=t.neutral,a=t.bad;return Math.round(n/(n+c+a)*100)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad;return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{title:"Please leave your feedback",children:Object(c.jsx)(x,{onLeaveFeedback:this.onLeaveFeedback})}),this.countTotalFeedback()>0&&Object(c.jsx)(g,{title:"Statistics",children:Object(c.jsx)(O,{good:t,neutral:n,bad:a,total:this.countTotalFeedback,average:this.countPositiveFeedbackPercentage})}),0===this.countTotalFeedback()&&Object(c.jsx)(k,{message:"No feedback given"})]})}}]),n}(a.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(F,{})}),document.getElementById("root")),p()},7:function(e,t,n){e.exports={list:"Statistics_list__3oKT7"}},8:function(e,t,n){e.exports={list:"FeedbackOptions_list__2lRUp"}}},[[17,1,2]]]);
//# sourceMappingURL=main.49f6b72e.chunk.js.map