(this["webpackJsonpreact-router-blogs"]=this["webpackJsonpreact-router-blogs"]||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(15),i=a.n(l),r=(a(13),a(23),a(1)),h=a(6);class c extends s.Component{render(){const e=["Antibiotics","Inotropics","Fluid status","ECG","Acid-base status"].map((e,t)=>n.a.createElement("li",{key:t},n.a.createElement(r.b,{to:"/posts/"+e},e)));return n.a.createElement("div",null,e)}}const o=["EKG\u5feb\u901f\u5224\u8b80,1.Rhythm 2.Rate 3.Axis 4.P wave 5.PR interval 6.Q wave 7.QRS complex 8.QT interval 9.ST segment 10.T wave","\u7cd6\u5c3f\u75c5\u91cd\u9ede\u6574\u7406, \u7cd6\u5c3f\u75c5\u8a3a\u65b7Criteria \u7b26\u5408\u4efb\u4e00\u500b\u90fd\u80fd\u8a3a\u65b7\u70baDiabetes Mellitus 1. FPG >= 126 mg / dL \u81f3\u5c11\u7a7a\u81798\u5c0f\u6642 2. 2 - h PG >= 200 mg / dL during an OGTT. (75g\u7cd6\u6c34\u6e2c\u8a66)  3. A1C >= 6.5 % 4. \u7cd6\u5c3f\u75c5\u5178\u578b\u75c7\u72c0\u6216\u6025\u6027\u75c7\u72c0\u51fa\u73fe\uff0c\u4e14\u96a8\u6a5f\u8840\u7cd6\u503c >= 200 mg / dL.","\u6838\u5fc3\u808c\u7fa4\u8a13\u7df4: '\u982d\u9838\uff1a\u60f3\u50cf\u6709\u4e00\u689d\u7dda\u628a\u982d\u5411\u4e0a\u62c9\uff0c\u8033\u5782\u8207\u80a9\u5cf0\u3001\u5e73\u884c \u809a\u5b50\uff1a\u809a\u5b50\u5167\u7e2e\uff0c\u50cf\u618b\u5c3f\u4e00\u6a23\uff0c\u5c41\u80a1\u5f8c\u5750 \u5e73\u5e38\u5c31\u8981\u7dad\u6301\u52d5\u4f5c\u3001\u4fdd\u6301\u810a\u690e\u7a69\u5b9a\u5ea6","\u751f\u5316\u6578\u503c: 'Lipid profile \u6574\u7406 Lipid = TG + Cholesterol T - Cholesterol(Total cholesterol)= Chylomicron + VLDL - C + LDL - C + IDL - C + HDL - C","\u7db2\u8a8c\u958b\u5f35', '2016.12.25 Christmas \u7db2\u8a8c\u958b\u5f35\u7d00\u5ff5"];var u=({id:e})=>n.a.createElement("article",null,n.a.createElement("h1",null,e),n.a.createElement("p",null,o[(e-1)/2]));class m extends s.Component{render(){const e=this.props.match.params.id;return e&&["Antibiotics","Inotropics","Fluid status","ECG","Acid-base status"].includes(e)?n.a.createElement(u,{id:e}):n.a.createElement("div",null,n.a.createElement("h3",null,"Error: Post #",e," NOT FOUND"))}}class d extends s.Component{render(){return n.a.createElement("div",null,n.a.createElement("p",null,"A doctor with his interest in techonology especially in computer science, hoping that he can leverage it to clinical use."))}}class C extends s.Component{render(){return n.a.createElement("div",null,n.a.createElement("h1",null,"About \u95dc\u65bc\u6211"),n.a.createElement("p",null,"This website is aimed to provide a platform for accessing clinical notes and medical formulas online. Visitors can browse through useful information for clinical use and add or revise the contents on the website supported by a backend system. Clinicians may find it practical for daily use!"))}}class p extends s.Component{constructor(e){super(e),this.handleIncCCr=()=>{"male"==this.state.gender?this.setState(e=>({ccr:((140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2),eGFR:(175*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue,-.203)).toFixed(2)})):this.setState(e=>({ccr:(.85*(140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2),eGFR:(129.85*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue,-.203)).toFixed(2)}))},this.handleChangeKg=e=>this.setState({kgValue:e.target.value}),this.handleChangeAge=e=>this.setState({ageValue:e.target.value}),this.handleChangeCre=e=>this.setState({creValue:e.target.value}),this.changeGender=e=>this.setState({gender:e.target.value}),this.state={ccr:0,eGFR:0,kgValue:0,ageValue:0,creValue:0,gender:"male"}}render(){return n.a.createElement("div",null,n.a.createElement("h2",null,"CCr calulator "),n.a.createElement("input",{type:"radio",value:"male",checked:"male"===this.state.gender,onChange:this.changeGender}),"male",n.a.createElement("input",{type:"radio",value:"female",checked:"female"===this.state.gender,onChange:this.changeGender}),"female",n.a.createElement("a",null,"\xa0"),n.a.createElement("label",null,"Kg",n.a.createElement("input",{type:"number",value:this.state.kgValue,onChange:this.handleChangeKg})),n.a.createElement("label",null,n.a.createElement("a",null,"\xa0"),"Age",n.a.createElement("input",{type:"number",value:this.state.ageValue,onChange:this.handleChangeAge})),n.a.createElement("label",null,n.a.createElement("a",null,"\xa0"),"Cre",n.a.createElement("input",{type:"number",value:this.state.creValue,onChange:this.handleChangeCre})),n.a.createElement("span",null,n.a.createElement("button",{onClick:this.handleIncCCr},n.a.createElement("a",null,"\xa0"),"calculate")),n.a.createElement("h3",null,"CCr: ",this.state.ccr,"mg/dl"),n.a.createElement("h3",null,"eGFR: ",this.state.eGFR,"mg/dl"))}}class g extends s.Component{constructor(e){super(e),this.handleABG=()=>{this.state.Na-this.state.HCO3-this.state.Cl+2.5*(4-this.state.Alb)>=11?this.setState(e=>({Anion_gap:this.state.Na-this.state.HCO3-this.state.Cl+2.5*(4-this.state.Alb)+" (High anion gap, corrected)"})):this.setState(e=>({Anion_gap:this.state.Na-this.state.HCO3-this.state.Cl+2.5*(4-this.state.Alb)+" (corrected)"})),this.state.pH<7.36?this.state.PaCO2>=44?this.state.HCO3-24-.1*(this.state.PaCO2-40)>-2&&this.state.HCO3-24-.1*(this.state.PaCO2-40)<2?this.setState(e=>({diagnosis:"Primary respiratory acidosis with appropriate renal response(Compensated)"})):this.state.HCO3-24-.1*(this.state.PaCO2-40)<=-2?this.setState(e=>({diagnosis:"Primary respiratory acidosis with secondary metalbolic acidosis"})):this.state.HCO3-24-.1*(this.state.PaCO2-40)>=2&&this.setState(e=>({diagnosis:"Primary respiratory acidosis with secondary metalbolic alkalosis"})):this.state.PaCO2<44&&(this.state.HCO3<=22?-2<40-this.state.PaCO2-1.2*(24-this.state.HCO3)&&40-this.state.PaCO2-1.2*(24-this.state.HCO3)<2?this.setState(e=>({diagnosis:"Primary metabolic acidosis with appropriate pulmonary response"})):40-this.state.PaCO2-1.2*(24-this.state.HCO3)>=2?this.setState(e=>({diagnosis:"Primary metabolic acidosis with secondary respiratory alkalosis"})):40-this.state.PaCO2-1.2*(24-this.state.HCO3)<=-2&&this.setState(e=>({diagnosis:"Primary metabolic acidosis with secondary respiratory acidosis"})):this.state.HCO3>=22&&this.setState(e=>({diagnosis:"Not likely"}))):this.state.pH>7.44?this.state.PaCO2>44?this.state.HCO3>26?24-this.state.HCO3-(this.state.PaCO2-40)/.7>-2&&24-this.state.HCO3-(this.state.PaCO2-40)/.7<2?this.setState(e=>({diagnosis:"Primary metabolic alkalosis with appropriate pulmonary response(Compensated)"})):(this.state.PaCO2-40)/.7-(24-this.state.HCO3)<=-2?this.setState(e=>({diagnosis:"Primary metabolic alkalosis with secondary respiratory alkalosis"})):(this.state.PaCO2-40)/.7-(24-this.state.HCO3)>=2&&this.setState(e=>({diagnosis:"Primary metabolic alkalosis with secondary respiratory acidosis"})):this.state.HCO3<=26&&this.setState(e=>({diagnosis:"Not likely"})):this.state.PaCO2<36?this.state.HCO3-24-.2*(this.state.PaCO2-40)>-2&&this.state.HCO3-24-.1*(this.state.PaCO2-40)<2?this.setState(e=>({diagnosis:"Primary respiratory alkalosis with appropriate renal response(Acute Compensated)"})):24-this.state.HCO3-.2*(40-this.state.PaCO2)<=-2?this.setState(e=>({diagnosis:"Primary respiratory alkalosis with secondary metalbolic alkalosis"})):24-this.state.HCO3-.2*(40-this.state.PaCO2)>=2&&this.setState(e=>({diagnosis:"Primary respiratory alkalosis with secondary metalbolic acidosis"})):this.setState(e=>({diagnosis:"Not likely"})):7.36<=this.state.pH&&this.state.pH<=7.44&&(this.state.PaCO2>44&&this.state.HCO3>26?this.setState(e=>({diagnosis:"Respiratory acidosis with metabolic alkalosis"})):this.state.PaCO2<36&&this.state.HCO3<22?this.setState(e=>({diagnosis:"Metabolic acidosis with respiratory alkalosis"})):this.state.HCO3>=22&&this.state.HCO3<=26&&this.state.PaCO2>=36&&this.state.PaCO2<=44?this.setState(e=>({diagnosis:"Normal"})):this.setState(e=>({diagnosis:"Not likely"})))},this.handleChange_pH=e=>this.setState({pH:e.target.value}),this.handleChange_PaO2=e=>this.setState({PaO2:e.target.value}),this.handleChange_PaCO2=e=>this.setState({PaCO2:e.target.value}),this.handleChange_HCO3=e=>this.setState({HCO3:e.target.value}),this.handleChange_Na=e=>this.setState({Na:e.target.value}),this.handleChange_Cl=e=>this.setState({Cl:e.target.value}),this.handleChange_Alb=e=>this.setState({Alb:e.target.value}),this.state={pH:7.3,PaO2:90,PaCO2:60,HCO3:32,Na:132,Cl:90,Alb:4,diagnosis:"",Anion_gap:""}}render(){return n.a.createElement("div",null,n.a.createElement("h2",null,"ABG Interpretator"),n.a.createElement("label",null," pH",n.a.createElement("input",{type:"number",value:this.state.pH,onChange:this.handleChange_pH}),n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"  PaO2",n.a.createElement("input",{type:"number",value:this.state.PaO2,onChange:this.handleChange_PaO2}),"mmHg",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"  PaCO2",n.a.createElement("input",{type:"number",value:this.state.PaCO2,onChange:this.handleChange_PaCO2}),"mmHg",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"  HCO3",n.a.createElement("input",{type:"number",value:this.state.HCO3,onChange:this.handleChange_HCO3}),"mEg/L",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"  Na",n.a.createElement("input",{type:"number",value:this.state.Na,onChange:this.handleChange_Na}),"mEg/L",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"  Cl",n.a.createElement("input",{type:"number",value:this.state.Cl,onChange:this.handleChange_Cl}),"mEg/L",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"  Alb",n.a.createElement("input",{type:"number",value:this.state.Alb,onChange:this.handleChange_Alb}),"g/dL",n.a.createElement("a",null,"\xa0")),n.a.createElement("span",null,n.a.createElement("button",{onClick:this.handleABG},"calculate")),n.a.createElement("h3",null,"Diagnosis: ",this.state.diagnosis),n.a.createElement("h3",null,"Anion gap: ",this.state.Anion_gap))}}class E extends s.Component{constructor(e){super(e),this.changeTIMI=()=>{const e=this.state.TIMIscore;this.setState(t=>({TIMIscore:e+1}))},this.state={time:0,TIMIscore:0}}render(){return n.a.createElement("div",null,n.a.createElement("h2",null,"TIMI Score for UA/NSTEMI"),n.a.createElement("input",{type:"checkbox",value:"age",onChange:this.changeTIMI})," age>=65",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("input",{type:"checkbox",value:"Risk",onChange:this.changeTIMI})," >=3 CAD risk factors",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("input",{type:"checkbox",value:"knownCAD",onChange:this.changeTIMI})," known CAD(stenosis>=50%)",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("input",{type:"checkbox",value:"ASA",onChange:this.changeTIMI})," ASA use in past 7 days",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("input",{type:"checkbox",value:"ServereAngina",onChange:this.changeTIMI})," Severe angina (\u22652 episodes in 24 hrs)",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("input",{type:"checkbox",value:"EKGST",onChange:this.changeTIMI})," EKG ST changes \u22650.5mm",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("input",{type:"checkbox",value:"PosCard",onChange:this.changeTIMI})," Positive cardiac marker",n.a.createElement("a",null,"\xa0\xa0"),n.a.createElement("h3",null,"Score: ",this.state.TIMIscore))}}class v extends s.Component{constructor(e){super(e),this.handleIncFENa=()=>{this.setState(e=>({FENa:(this.state.UNaValue/this.state.SNaValue/(this.state.UCreValue/this.state.SCreValue)).toFixed(4)}))},this.handleChangeSNa=e=>this.setState({SNaValue:e.target.value}),this.handleChangeUNa=e=>this.setState({UNaValue:e.target.value}),this.handleChangeSCre=e=>this.setState({SCreValue:e.target.value}),this.handleChangeUCre=e=>this.setState({UCreValue:e.target.value}),this.state={SNaValue:140,UNaValue:150,SCreValue:.8,UCreValue:120,FENa:0}}render(){return n.a.createElement("div",null,n.a.createElement("h2",null,"FENa calulator "),n.a.createElement("label",null,"Serum Na",n.a.createElement("input",{type:"number",value:this.state.SNaValue,onChange:this.handleChangeSNa}),"mmol/l",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"Urine Na",n.a.createElement("input",{type:"number",value:this.state.UNaValue,onChange:this.handleChangeUNa}),"mmol/l",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"Serum Cre",n.a.createElement("input",{type:"number",value:this.state.SCreValue,onChange:this.handleChangeSCre}),"mg/dl",n.a.createElement("a",null,"\xa0")),n.a.createElement("label",null,"Urine Cre",n.a.createElement("input",{type:"number",value:this.state.UCreValue,onChange:this.handleChangeUCre}),"mg/dl",n.a.createElement("a",null,"\xa0")),n.a.createElement("span",null,n.a.createElement("button",{onClick:this.handleIncFENa},"calculate")),n.a.createElement("h3",null,"FENa: ",100*this.state.FENa,"%"))}}class b extends s.Component{render(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Medcalculator \u91ab\u5b78\u516c\u5f0f"),n.a.createElement(p,null),n.a.createElement("p",null,"Reference:  1. Cockcroft-Gault Equation 2. MDRD quation"),n.a.createElement(g,null),n.a.createElement("p",null,"Reference: The ICU book, 4th edition, Paul L. Marino"),n.a.createElement(E,null),n.a.createElement(v,null))}}class y extends s.Component{render(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Notes \u91ab\u5b78\u7b46\u8a18"),n.a.createElement("p",null,"MedAssist Notes here."))}}class S extends s.Component{constructor(e){super(e),this.state={value:"Please paste the lab data.",value_transform:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleChange(e){this.setState({value:e.target.value})}handleSubmit(e){const t=this.state.value.search("HB"),a=this.state.value.search("WBC"),s=this.state.value.search("Seg"),n=this.state.value.search("Band"),l=this.state.value,i=l.search("PLT"),r=(this.state.value,l.search("T-bil")),h=(this.state.value,l.search("AST")),c=(this.state.value,l.search("ALT")),o=(this.state.value,l.search("BUN")),u=(this.state.value,l.search("CRE"));this.setState({value_transform:this.state.value_transform.concat(this.state.value.slice(t,t+13)).concat(", ").concat(this.state.value.slice(a,a+13)).concat(", ").concat(this.state.value.slice(s,s+11)).concat(", ").concat(this.state.value.slice(n,n+11)).concat(", ").concat(this.state.value.slice(i,i+13)).concat("\n").concat(this.state.value.slice(r,r+13)).concat(", ").concat(this.state.value.slice(h,h+11)).concat(", ").concat(this.state.value.slice(c,c+11)).concat(", ").concat(this.state.value.slice(o,o+12)).concat(", ").concat(this.state.value.slice(u,u+14))}),e.preventDefault()}render(){return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("br",null),n.a.createElement("label",null,"Lab",n.a.createElement("br",null),n.a.createElement("textarea",{value:this.state.value,rows:8,cols:50,onChange:this.handleChange})),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"Transform"}),n.a.createElement("br",null),n.a.createElement("label",null,n.a.createElement("br",null),"Lab selected",n.a.createElement("br",null),n.a.createElement("textarea",{value:this.state.value_transform,rows:8,cols:50})))}}class O extends s.Component{render(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},n.a.createElement("a",{className:"navbar-brand"},"Med7991"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},n.a.createElement("div",{class:"navbar-nav"},n.a.createElement("a",{class:"nav-item nav-link active",href:"#"},n.a.createElement(r.b,{to:"/about"},"About"),n.a.createElement("span",{class:"sr-only"},"(current)")),n.a.createElement("a",{class:"nav-item nav-link",href:"#"},n.a.createElement(r.b,{to:"/posts"},"Posts")),n.a.createElement("a",{class:"nav-item nav-link",href:"#"},n.a.createElement(r.b,{to:"/authors"},"Authors")),n.a.createElement("a",{class:"nav-item nav-link",href:"#"},n.a.createElement(r.b,{to:"/medcalculator"},"MedCalculator")),n.a.createElement("a",{class:"nav-item nav-link",href:"#"},n.a.createElement(r.b,{to:"/notes"},"Notes")),n.a.createElement("a",{class:"nav-item nav-link",href:"#"},n.a.createElement(r.b,{to:"/transformer"},"Transformer"))))),n.a.createElement(h.d,null,n.a.createElement(h.b,{path:"/posts",component:c}),n.a.createElement(h.b,{path:"/posts/:id?",component:m}),n.a.createElement(h.b,{path:"/authors",component:d}),n.a.createElement(h.b,{path:"/about",component:C}),n.a.createElement(h.b,{path:"/medcalculator",component:b}),n.a.createElement(h.b,{path:"/notes",component:y}),n.a.createElement(h.b,{path:"/transformer",component:S}),n.a.createElement(h.b,{path:"/",component:b}),n.a.createElement(h.a,{from:"/medcalculator",to:"/"})))}}class P extends s.Component{render(){return n.a.createElement(r.a,null,n.a.createElement("div",{className:"App",style:{height:1050}},n.a.createElement(O,null)))}}var k=P;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.f1de2eb6.chunk.js.map