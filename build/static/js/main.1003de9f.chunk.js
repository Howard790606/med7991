(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){},23:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(20),c=a.n(r),i=(a(18),a(1)),s=a(2),o=a(4),u=a(3),h=a(5),m=a(7),p=a(11),d=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=["Antibiotics","Inotropics","Fluid status","ECG","Acid-base status"].map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(m.b,{to:"/posts/"+e},e))});return l.a.createElement("div",null,e)}}]),t}(n.Component),b=["EKG\u5feb\u901f\u5224\u8b80,1.Rhythm 2.Rate 3.Axis 4.P wave 5.PR interval 6.Q wave 7.QRS complex 8.QT interval 9.ST segment 10.T wave","\u7cd6\u5c3f\u75c5\u91cd\u9ede\u6574\u7406, \u7cd6\u5c3f\u75c5\u8a3a\u65b7Criteria \u7b26\u5408\u4efb\u4e00\u500b\u90fd\u80fd\u8a3a\u65b7\u70baDiabetes Mellitus 1. FPG >= 126 mg / dL \u81f3\u5c11\u7a7a\u81798\u5c0f\u6642 2. 2 - h PG >= 200 mg / dL during an OGTT. (75g\u7cd6\u6c34\u6e2c\u8a66)  3. A1C >= 6.5 % 4. \u7cd6\u5c3f\u75c5\u5178\u578b\u75c7\u72c0\u6216\u6025\u6027\u75c7\u72c0\u51fa\u73fe\uff0c\u4e14\u96a8\u6a5f\u8840\u7cd6\u503c >= 200 mg / dL.","\u6838\u5fc3\u808c\u7fa4\u8a13\u7df4: '\u982d\u9838\uff1a\u60f3\u50cf\u6709\u4e00\u689d\u7dda\u628a\u982d\u5411\u4e0a\u62c9\uff0c\u8033\u5782\u8207\u80a9\u5cf0\u3001\u5e73\u884c \u809a\u5b50\uff1a\u809a\u5b50\u5167\u7e2e\uff0c\u50cf\u618b\u5c3f\u4e00\u6a23\uff0c\u5c41\u80a1\u5f8c\u5750 \u5e73\u5e38\u5c31\u8981\u7dad\u6301\u52d5\u4f5c\u3001\u4fdd\u6301\u810a\u690e\u7a69\u5b9a\u5ea6","\u751f\u5316\u6578\u503c: 'Lipid profile \u6574\u7406 Lipid = TG + Cholesterol T - Cholesterol(Total cholesterol)= Chylomicron + VLDL - C + LDL - C + IDL - C + HDL - C","\u7db2\u8a8c\u958b\u5f35', '2016.12.25 Christmas \u7db2\u8a8c\u958b\u5f35\u7d00\u5ff5"],g=function(e){var t=e.id;return l.a.createElement("article",null,l.a.createElement("h1",null,t),l.a.createElement("p",null,b[(t-1)/2]))},E=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.match.params.id;return e&&["Antibiotics","Inotropics","Fluid status","ECG","Acid-base status"].includes(e)?l.a.createElement(g,{id:e}):l.a.createElement("div",null,l.a.createElement("h3",null,"Error: Post #",e," NOT FOUND"))}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",null),l.a.createElement("p",null,"A doctor with his interest in techonology especially in computer science, hoping that he can leverage it to clinical use. Also, a man with his love."))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About"),l.a.createElement("p",null,"This project is aimed to provide a platform for accessing clinical notes online. Visitors can browse through useful information for clinical use and add or revise the contents on the website supported by a backend system. Clinicians may find it practical for daily use!"))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleIncCCr=function(){"male"==a.state.gender?a.setState(function(e){return{ccr:((140-a.state.ageValue)*a.state.kgValue/(72*a.state.creValue)).toFixed(2),eGFR:(175*Math.pow(a.state.creValue,-1.154)*Math.pow(a.state.ageValue,-.203)).toFixed(2)}}):a.setState(function(e){return{ccr:(.85*(140-a.state.ageValue)*a.state.kgValue/(72*a.state.creValue)).toFixed(2),eGFR:(129.85*Math.pow(a.state.creValue,-1.154)*Math.pow(a.state.ageValue,-.203)).toFixed(2)}})},a.handleChangeKg=function(e){return a.setState({kgValue:e.target.value})},a.handleChangeAge=function(e){return a.setState({ageValue:e.target.value})},a.handleChangeCre=function(e){return a.setState({creValue:e.target.value})},a.changeGender=function(e){return a.setState({gender:e.target.value})},a.state={ccr:0,eGFR:0,kgValue:0,ageValue:0,creValue:0,gender:"male"},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"CCr calulator "),l.a.createElement("input",{type:"radio",value:"male",checked:"male"===this.state.gender,onChange:this.changeGender}),"male",l.a.createElement("input",{type:"radio",value:"female",checked:"female"===this.state.gender,onChange:this.changeGender}),"female",l.a.createElement("label",null,"Kg",l.a.createElement("input",{type:"number",value:this.state.kgValue,onChange:this.handleChangeKg})),l.a.createElement("label",null," Age",l.a.createElement("input",{type:"number",value:this.state.ageValue,onChange:this.handleChangeAge})),l.a.createElement("label",null," Cre",l.a.createElement("input",{type:"number",value:this.state.creValue,onChange:this.handleChangeCre})),l.a.createElement("span",null,l.a.createElement("button",{onClick:this.handleIncCCr},"calculate")),l.a.createElement("h3",null,"CCr: ",this.state.ccr,"mg/dl"),l.a.createElement("h3",null,"eGFR: ",this.state.eGFR,"mg/dl"))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handleABG=function(){a.state.pH<7.36?a.state.PaCO2>44?1.2*(24-a.state.HCO3)-(a.state.PaCO2-40)>=-2&&1.2*(24-a.state.HCO3)-(a.state.PaCO2-40)<=2?a.setState(function(e){return{diagnosis:"Primary respiratory acidosis with appropriate renal response"}}):a.setState(function(e){return{diagnosis:"Primary respiratory acidosis with secondary metalbolic alkalosis"}}):a.state.PaCO2<36&&a.setState(function(e){return{diagnosis:"Primary metabolic acidosis"}}):a.state.pH>7.44&&(a.state.PaCO2>44?a.setState(function(e){return{diagnosis:"Primary metabolic alkalosis"}}):a.state.PaCO2<36&&a.setState(function(e){return{diagnosis:"Primary respiratory alkalosis"}}))},a.handleChange_pH=function(e){return a.setState({pH:e.target.value})},a.handleChange_PaO2=function(e){return a.setState({PaO2:e.target.value})},a.handleChange_PaCO2=function(e){return a.setState({PaCO2:e.target.value})},a.handleChange_HCO3=function(e){return a.setState({HCO3:e.target.value})},a.handleChange_Na=function(e){return a.setState({Na:e.target.value})},a.state={pH:7.3,PaO2:90,PaCO2:60,HCO3:32,Na:132,diagnosis:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ABG Interpretator "),l.a.createElement("label",null," pH",l.a.createElement("input",{type:"number",value:this.state.pH,onChange:this.handleChange_pH})),l.a.createElement("label",null,"  PaO2",l.a.createElement("input",{type:"number",value:this.state.PaO2,onChange:this.handleChange_PaO2}),"mmHg"),l.a.createElement("label",null,"  PaCO2",l.a.createElement("input",{type:"number",value:this.state.PaCO2,onChange:this.handleChange_PaCO2}),"mmHg"),l.a.createElement("label",null,"  HCO3",l.a.createElement("input",{type:"number",value:this.state.HCO3,onChange:this.handleChange_HCO3}),"mEg/L"),l.a.createElement("label",null,"  Na",l.a.createElement("input",{type:"number",value:this.state.Na,onChange:this.handleChange_Na}),"mEg/L"),l.a.createElement("span",null,l.a.createElement("button",{onClick:this.handleABG},"calculate")),l.a.createElement("h3",null,"Diagnosis: ",this.state.diagnosis))}}]),t}(n.Component),j=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement("br",null),l.a.createElement(f,null))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Notes"),l.a.createElement("p",null,"MedAssist Notes here."))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand"},"Med7991"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{class:"navbar-nav"},l.a.createElement("a",{class:"nav-item nav-link active",href:"#"},l.a.createElement(m.b,{to:"/about"},"About"),l.a.createElement("span",{class:"sr-only"},"(current)")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(m.b,{to:"/posts"},"Posts")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(m.b,{to:"/authors"},"Authors")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(m.b,{to:"/medcalculator"},"MedCalculator")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(m.b,{to:"/notes"},"Notes"))))),l.a.createElement(p.d,null,l.a.createElement(p.b,{path:"/posts",component:d}),l.a.createElement(p.b,{path:"/posts/:id?",component:E}),l.a.createElement(p.b,{path:"/authors",component:v}),l.a.createElement(p.b,{path:"/about",component:C}),l.a.createElement(p.b,{path:"/medcalculator",component:j}),l.a.createElement(p.b,{path:"/notes",component:y}),l.a.createElement(p.b,{path:"/",component:j}),l.a.createElement(p.a,{from:"/medcalculator",to:"/"})))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(m.a,null,l.a.createElement("div",{className:"App",style:{height:900}},l.a.createElement(k,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.1003de9f.chunk.js.map