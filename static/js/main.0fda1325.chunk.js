(this["webpackJsonpreact-router-blogs"]=this["webpackJsonpreact-router-blogs"]||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(15),r=a.n(s),i=(a(13),a(23),a(1)),c=a(6);class h extends n.Component{render(){const e=["Acute decompensated heart failure","High anion gap metabolic acidosis"].map((e,t)=>l.a.createElement("li",{key:t},l.a.createElement(i.b,{to:"/mnemonics/"+e},e)));return l.a.createElement("div",null,e)}}var o=({id:e})=>{let t;return"Acute decompensated heart failure"==e?t=l.a.createElement("p",null,l.a.createElement("b",null,"FAILURE"),l.a.createElement("br",null),l.a.createElement("b",null,"F"),"orgot medication",l.a.createElement("br",null),l.a.createElement("b",null,"A"),"naemia/Ischemia",l.a.createElement("br",null),l.a.createElement("b",null,"I"),"nfarction/Infection",l.a.createElement("br",null),l.a.createElement("b",null,"L"),"ifestyle: taken too much salt",l.a.createElement("br",null),l.a.createElement("b",null,"U"),"pregulation of CO: pregnancy, hyperthyroidism",l.a.createElement("br",null),l.a.createElement("b",null,"R"),"enal failure",l.a.createElement("br",null),l.a.createElement("b",null,"E"),"mbolism: pulmonary"):"High anion gap metabolic acidosis"==e&&(t=l.a.createElement("p",null,l.a.createElement("b",null,"MUDPILES"),l.a.createElement("br",null),l.a.createElement("b",null,"M"),"ethanol (formic acid)",l.a.createElement("br",null),l.a.createElement("b",null,"U"),"remia",l.a.createElement("br",null),l.a.createElement("b",null,"D"),"iabetic ketoacidosis",l.a.createElement("br",null),l.a.createElement("b",null,"P"),"ropylene glycol",l.a.createElement("br",null),l.a.createElement("b",null,"I"),"ron tablets or isoniazid",l.a.createElement("br",null),l.a.createElement("b",null,"L"),"actic acidosis (such as by metformin toxicity)",l.a.createElement("br",null),l.a.createElement("b",null,"E"),"thylene glycol",l.a.createElement("br",null),l.a.createElement("b",null,"S"),"alicylates (late)",l.a.createElement("br",null))),l.a.createElement("article",null,l.a.createElement("h1",null,e),l.a.createElement("p",null,t))};class u extends n.Component{render(){const e=this.props.match.params.id;return e&&["Acute decompensated heart failure","High anion gap metabolic acidosis"].includes(e)?l.a.createElement(o,{id:e}):l.a.createElement("div",null,l.a.createElement("h3",null,"Error: Mnemonic #",e," NOT FOUND"))}}class m extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("img",{src:"./Author.jpg"}),l.a.createElement("p",null,"Howard Lu",l.a.createElement("br",null),"A doctor with his interest in technology especially in computer science, hoping that he can leverage it to clinical use."),l.a.createElement("a",null,"contact me: "),l.a.createElement("a",null,"howard790606@gmail.com"))}}class d extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About \u95dc\u65bc\u6211"),l.a.createElement("p",null,"This website is aimed to provide a platform for accessing clinical notes and medical formulas online. Visitors can browse through useful information for clinical use and add or revise the contents on the website supported by a backend system. Clinicians may find it practical for daily use!"))}}class E extends n.Component{constructor(e){super(e),this.handleIncCCr=()=>{"male"==this.state.gender?this.setState(e=>({ccr:((140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2),eGFR:(175*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue,-.203)).toFixed(2)})):this.setState(e=>({ccr:(.85*(140-this.state.ageValue)*this.state.kgValue/(72*this.state.creValue)).toFixed(2),eGFR:(129.85*Math.pow(this.state.creValue,-1.154)*Math.pow(this.state.ageValue,-.203)).toFixed(2)}))},this.handleChangeKg=e=>this.setState({kgValue:e.target.value}),this.handleChangeAge=e=>this.setState({ageValue:e.target.value}),this.handleChangeCre=e=>this.setState({creValue:e.target.value}),this.changeGender=e=>this.setState({gender:e.target.value}),this.state={ccr:0,eGFR:0,kgValue:0,ageValue:0,creValue:0,gender:"male"}}render(){return l.a.createElement("div",null,l.a.createElement("h2",null,"CCr calulator "),l.a.createElement("input",{type:"radio",value:"male",checked:"male"===this.state.gender,onChange:this.changeGender}),"male",l.a.createElement("input",{type:"radio",value:"female",checked:"female"===this.state.gender,onChange:this.changeGender}),"female",l.a.createElement("a",null,"\xa0"),l.a.createElement("label",null,"Kg",l.a.createElement("input",{type:"number",value:this.state.kgValue,onChange:this.handleChangeKg})),l.a.createElement("label",null,l.a.createElement("a",null,"\xa0"),"Age",l.a.createElement("input",{type:"number",value:this.state.ageValue,onChange:this.handleChangeAge})),l.a.createElement("label",null,l.a.createElement("a",null,"\xa0"),"Cre",l.a.createElement("input",{type:"number",value:this.state.creValue,onChange:this.handleChangeCre})),l.a.createElement("span",null,l.a.createElement("button",{onClick:this.handleIncCCr},l.a.createElement("a",null,"\xa0"),"calculate")),l.a.createElement("h3",null,"CCr: ",this.state.ccr,"mg/dl"),l.a.createElement("h3",null,"eGFR: ",this.state.eGFR,"mg/dl"))}}class g extends n.Component{constructor(e){super(e),this.handleABG=()=>{this.state.Na-this.state.HCO3-this.state.Cl+2.5*(4-this.state.Alb)>=11?this.setState(e=>({Anion_gap:this.state.Na-this.state.HCO3-this.state.Cl+2.5*(4-this.state.Alb)+" (High anion gap, corrected)"})):this.setState(e=>({Anion_gap:this.state.Na-this.state.HCO3-this.state.Cl+2.5*(4-this.state.Alb)+" (corrected)"})),this.state.pH<7.36?this.state.PaCO2>=44?this.state.HCO3-24-.1*(this.state.PaCO2-40)>-2&&this.state.HCO3-24-.1*(this.state.PaCO2-40)<2?this.setState(e=>({diagnosis:"Primary respiratory acidosis with appropriate renal response(Compensated)"})):this.state.HCO3-24-.1*(this.state.PaCO2-40)<=-2?this.setState(e=>({diagnosis:"Primary respiratory acidosis with secondary metalbolic acidosis"})):this.state.HCO3-24-.1*(this.state.PaCO2-40)>=2&&this.setState(e=>({diagnosis:"Primary respiratory acidosis with secondary metalbolic alkalosis"})):this.state.PaCO2<44&&(this.state.HCO3<=22?-2<40-this.state.PaCO2-1.2*(24-this.state.HCO3)&&40-this.state.PaCO2-1.2*(24-this.state.HCO3)<2?this.setState(e=>({diagnosis:"Primary metabolic acidosis with appropriate pulmonary response"})):40-this.state.PaCO2-1.2*(24-this.state.HCO3)>=2?this.setState(e=>({diagnosis:"Primary metabolic acidosis with secondary respiratory alkalosis"})):40-this.state.PaCO2-1.2*(24-this.state.HCO3)<=-2&&this.setState(e=>({diagnosis:"Primary metabolic acidosis with secondary respiratory acidosis"})):this.state.HCO3>=22&&this.setState(e=>({diagnosis:"Not likely"}))):this.state.pH>7.44?this.state.PaCO2>44?this.state.HCO3>26?24-this.state.HCO3-(this.state.PaCO2-40)/.7>-2&&24-this.state.HCO3-(this.state.PaCO2-40)/.7<2?this.setState(e=>({diagnosis:"Primary metabolic alkalosis with appropriate pulmonary response(Compensated)"})):(this.state.PaCO2-40)/.7-(24-this.state.HCO3)<=-2?this.setState(e=>({diagnosis:"Primary metabolic alkalosis with secondary respiratory alkalosis"})):(this.state.PaCO2-40)/.7-(24-this.state.HCO3)>=2&&this.setState(e=>({diagnosis:"Primary metabolic alkalosis with secondary respiratory acidosis"})):this.state.HCO3<=26&&this.setState(e=>({diagnosis:"Not likely"})):this.state.PaCO2<36?this.state.HCO3-24-.2*(this.state.PaCO2-40)>-2&&this.state.HCO3-24-.1*(this.state.PaCO2-40)<2?this.setState(e=>({diagnosis:"Primary respiratory alkalosis with appropriate renal response(Acute Compensated)"})):24-this.state.HCO3-.2*(40-this.state.PaCO2)<=-2?this.setState(e=>({diagnosis:"Primary respiratory alkalosis with secondary metalbolic alkalosis"})):24-this.state.HCO3-.2*(40-this.state.PaCO2)>=2&&this.setState(e=>({diagnosis:"Primary respiratory alkalosis with secondary metalbolic acidosis"})):this.setState(e=>({diagnosis:"Not likely"})):7.36<=this.state.pH&&this.state.pH<=7.44&&(this.state.PaCO2>44&&this.state.HCO3>26?this.setState(e=>({diagnosis:"Respiratory acidosis with metabolic alkalosis"})):this.state.PaCO2<36&&this.state.HCO3<22?this.setState(e=>({diagnosis:"Metabolic acidosis with respiratory alkalosis"})):this.state.HCO3>=22&&this.state.HCO3<=26&&this.state.PaCO2>=36&&this.state.PaCO2<=44?this.setState(e=>({diagnosis:"Normal"})):this.setState(e=>({diagnosis:"Not likely"})))},this.handleChange_pH=e=>this.setState({pH:e.target.value}),this.handleChange_PaO2=e=>this.setState({PaO2:e.target.value}),this.handleChange_PaCO2=e=>this.setState({PaCO2:e.target.value}),this.handleChange_HCO3=e=>this.setState({HCO3:e.target.value}),this.handleChange_Na=e=>this.setState({Na:e.target.value}),this.handleChange_Cl=e=>this.setState({Cl:e.target.value}),this.handleChange_Alb=e=>this.setState({Alb:e.target.value}),this.state={pH:7.3,PaO2:90,PaCO2:60,HCO3:32,Na:132,Cl:90,Alb:4,diagnosis:"",Anion_gap:""}}render(){return l.a.createElement("div",null,l.a.createElement("h2",null,"ABG Interpretator"),l.a.createElement("label",null," pH",l.a.createElement("input",{type:"number",value:this.state.pH,onChange:this.handleChange_pH}),l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"  PaO2",l.a.createElement("input",{type:"number",value:this.state.PaO2,onChange:this.handleChange_PaO2}),"mmHg",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"  PaCO2",l.a.createElement("input",{type:"number",value:this.state.PaCO2,onChange:this.handleChange_PaCO2}),"mmHg",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"  HCO3",l.a.createElement("input",{type:"number",value:this.state.HCO3,onChange:this.handleChange_HCO3}),"mEg/L",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"  Na",l.a.createElement("input",{type:"number",value:this.state.Na,onChange:this.handleChange_Na}),"mEg/L",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"  Cl",l.a.createElement("input",{type:"number",value:this.state.Cl,onChange:this.handleChange_Cl}),"mEg/L",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"  Alb",l.a.createElement("input",{type:"number",value:this.state.Alb,onChange:this.handleChange_Alb}),"g/dL",l.a.createElement("a",null,"\xa0")),l.a.createElement("span",null,l.a.createElement("button",{onClick:this.handleABG},"calculate")),l.a.createElement("h3",null,"Diagnosis: ",this.state.diagnosis),l.a.createElement("h3",null,"Anion gap: ",this.state.Anion_gap))}}class C extends n.Component{constructor(e){super(e),this.changeTIMI_age=()=>{this.setState({TIMI_age:this.state.TIMI_age+1}),this.state.TIMI_age%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.changeTIMI_Risk=()=>{this.setState({TIMI_Risk:this.state.TIMI_Risk+1}),this.state.TIMI_Risk%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.changeTIMI_knownCAD=()=>{this.setState({TIMI_knownCAD:this.state.TIMI_knownCAD+1}),this.state.TIMI_knownCAD%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.changeTIMI_ASA=()=>{this.setState({TIMI_ASA:this.state.TIMI_ASA+1}),this.state.TIMI_ASA%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.changeTIMI_SevereAngina=()=>{this.setState({TIMI_ServereAngina:this.state.TIMI_ServereAngina+1}),this.state.TIMI_ServereAngina%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.changeTIMI_EKGST=()=>{this.setState({TIMI_EKGST:this.state.TIMI_EKGST+1}),this.state.TIMI_EKGST%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.changeTIMI_PosCard=()=>{this.setState({TIMI_PosCard:this.state.TIMI_PosCard+1}),this.state.TIMI_PosCard%2==0?this.setState({TIMIscore:this.state.TIMIscore+1}):this.setState({TIMIscore:this.state.TIMIscore-1})},this.state={TIMIscore:0,TIMI_age:0,TIMI_Risk:0,TIMI_knownCAD:0,TIMI_ASA:0,TIMI_ServereAngina:0,TIMI_EKGST:0,TIMI_PosCard:0}}render(){return l.a.createElement("div",null,l.a.createElement("h2",null,"TIMI Score for UA/NSTEMI"),l.a.createElement("input",{type:"checkbox",value:"age",onChange:this.changeTIMI_age})," age>=65",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("input",{type:"checkbox",value:"Risk",onChange:this.changeTIMI_Risk})," >=3 CAD risk factors",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("input",{type:"checkbox",value:"knownCAD",onChange:this.changeTIMI_knownCAD})," known CAD(stenosis>=50%)",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("input",{type:"checkbox",value:"ASA",onChange:this.changeTIMI_ASA})," ASA use in past 7 days",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("input",{type:"checkbox",value:"ServereAngina",onChange:this.changeTIMI_SevereAngina})," Severe angina (\u22652 episodes in 24 hrs)",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("input",{type:"checkbox",value:"EKGST",onChange:this.changeTIMI_EKGST})," EKG ST changes \u22650.5mm",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("input",{type:"checkbox",value:"PosCard",onChange:this.changeTIMI_PosCard})," Positive cardiac marker",l.a.createElement("a",null,"\xa0\xa0"),l.a.createElement("h3",null,"Score: ",this.state.TIMIscore))}}class p extends n.Component{constructor(e){super(e),this.handleIncFENa=()=>{this.setState(e=>({FENa:(this.state.UNaValue/this.state.SNaValue/(this.state.UCreValue/this.state.SCreValue)).toFixed(4)}))},this.handleChangeSNa=e=>this.setState({SNaValue:e.target.value}),this.handleChangeUNa=e=>this.setState({UNaValue:e.target.value}),this.handleChangeSCre=e=>this.setState({SCreValue:e.target.value}),this.handleChangeUCre=e=>this.setState({UCreValue:e.target.value}),this.state={SNaValue:140,UNaValue:150,SCreValue:.8,UCreValue:120,FENa:0}}render(){return l.a.createElement("div",null,l.a.createElement("h2",null,"FENa calulator "),l.a.createElement("label",null,"Serum Na",l.a.createElement("input",{type:"number",value:this.state.SNaValue,onChange:this.handleChangeSNa}),"mmol/l",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"Urine Na",l.a.createElement("input",{type:"number",value:this.state.UNaValue,onChange:this.handleChangeUNa}),"mmol/l",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"Serum Cre",l.a.createElement("input",{type:"number",value:this.state.SCreValue,onChange:this.handleChangeSCre}),"mg/dl",l.a.createElement("a",null,"\xa0")),l.a.createElement("label",null,"Urine Cre",l.a.createElement("input",{type:"number",value:this.state.UCreValue,onChange:this.handleChangeUCre}),"mg/dl",l.a.createElement("a",null,"\xa0")),l.a.createElement("span",null,l.a.createElement("button",{onClick:this.handleIncFENa},"calculate")),l.a.createElement("h3",null,"FENa: ",100*this.state.FENa,"%"))}}class b extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Medcalculator \u91ab\u5b78\u516c\u5f0f"),l.a.createElement(E,null),l.a.createElement("p",null,"Reference:  1. Cockcroft-Gault Equation 2. MDRD quation"),l.a.createElement(g,null),l.a.createElement("p",null,"Reference: The ICU book, 4th edition, Paul L. Marino"),l.a.createElement(C,null),l.a.createElement(p,null))}}class I extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Notes \u91ab\u5b78\u7b46\u8a18"),l.a.createElement("p",null,"MedAssist Notes here."))}}class v extends n.Component{constructor(e){super(e),this.state={value:"Please paste the original laboratory data forms from your hospital web page. The lab data will be organized in the following table.",value_transform:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleOnfocus(e){this.setState({value:""})}handleChange(e){this.setState({value:e.target.value})}handleSubmit(e){const t=this.state.value,a=t.search("HB"),n=t.search("WBC"),l=t.search("Seg"),s=t.search("Band"),r=t.search("PLT"),i=t.search("T-BIL"),c=t.search("D-BIL"),h=t.search("AST"),o=t.search("ALT"),u=t.search("LDH"),m=t.search("BUN"),d=t.search("CRE"),E=t.search("Na"),g=t.search("K"),C=t.search("Ca"),p=t.search("PT"),b=t.search("PT INR"),I=t.search("aPTT");this.setState({value_transform:"".concat(this.state.value.slice(a,a+13)).concat(", ").concat(this.state.value.slice(n,n+14)).concat(", ").concat(this.state.value.slice(l,l+11)).concat(", ").concat(this.state.value.slice(s,s+11)).concat(", ").concat(this.state.value.slice(r,r+13)).concat(", ").concat(this.state.value.slice(i,i+17)).concat(", ").concat(this.state.value.slice(c,c+13)).concat(", ").concat(this.state.value.slice(h,h+11)).concat(", ").concat(this.state.value.slice(o,o+11)).concat(", ").concat(this.state.value.slice(u,u+12)).concat(", ").concat(this.state.value.slice(m,m+15)).concat(", ").concat(this.state.value.slice(d,d+14)).concat(", ").concat(this.state.value.slice(E,E+14)).concat(", ").concat(this.state.value.slice(g,g+14)).concat(", ").concat(this.state.value.slice(C,C+15)).concat(", ").concat(this.state.value.slice(p,p+12)).concat(", ").concat(this.state.value.slice(b,b+10)).concat(", ").concat(this.state.value.slice(I,I+14))}),e.preventDefault()}render(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("br",null),l.a.createElement("label",null,"Lab",l.a.createElement("br",null),l.a.createElement("textarea",{value:this.state.value,rows:8,cols:50,onFocus:this.handleOnfocus.bind(this),onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Transform"}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("br",null),"Lab selected",l.a.createElement("br",null),l.a.createElement("textarea",{value:this.state.value_transform,rows:8,cols:50})))}}class S extends n.Component{constructor(e){super(e),this.state={value:"Please paste the original culture data forms from your hospital web page. The culture data will be organized in the following table",value_transform:""},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}handleOnfocus(e){this.setState({value:""})}handleChange(e){this.setState({value:e.target.value})}handleSubmit(e){let t,a=this.state.value,n=(a.search("BLOOD Peripheral"),a.search("BLOOD CVP")),l=a.search("BLOOD Double lumen"),s=/ID\+DS Blood\.\#1\(\*\)/g;for(;null!==(t=s.exec(a));){let e;s.lastIndex<n?e=a.slice(s.lastIndex-35,s.lastIndex-25)+" B/C(PB): "+a.slice(s.lastIndex+1,s.lastIndex+25):s.lastIndex>n&&s.lastIndex<l?e=a.slice(s.lastIndex-35,s.lastIndex-25)+" B/C(CVC): "+a.slice(s.lastIndex+1,s.lastIndex+25):s.lastIndex>l&&(e=a.slice(s.lastIndex-35,s.lastIndex-25)+" B/C(DLC): "+a.slice(s.lastIndex+1,s.lastIndex+25));let t=e.search("\n");e=e.slice(0,t),this.setState(({value_transform:t})=>({value_transform:t.concat(e).concat("\n")}))}let r,i=/ID\+DS Urine \#1\(\/ml\)/g;for(;null!==(r=i.exec(a));){let e=a.slice(i.lastIndex-37,i.lastIndex-27)+" U/C: "+a.slice(i.lastIndex+1,i.lastIndex+25),t=e.search("\n");e=e.slice(0,t),this.setState(({value_transform:t})=>({value_transform:t.concat(e).concat("\n")}))}e.preventDefault()}render(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("br",null),l.a.createElement("label",null,"Lab",l.a.createElement("br",null),l.a.createElement("textarea",{value:this.state.value,rows:8,cols:50,onFocus:this.handleOnfocus.bind(this),onChange:this.handleChange})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Transform"}),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("br",null),"Culture selected",l.a.createElement("br",null),l.a.createElement("textarea",{value:this.state.value_transform,rows:8,cols:50})))}}class T extends n.Component{render(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("a",{className:"navbar-brand"},"Med7991"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},l.a.createElement("div",{class:"navbar-nav"},l.a.createElement("a",{class:"nav-item nav-link active",href:"#"},l.a.createElement(i.b,{to:"/about"},"About"),l.a.createElement("span",{class:"sr-only"},"(current)")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(i.b,{to:"/mnemonics"},"Mnemonics")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(i.b,{to:"/authors"},"Authors")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(i.b,{to:"/medcalculator"},"MedCalculator")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(i.b,{to:"/notes"},"Notes")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(i.b,{to:"/transformer"},"Transformer")),l.a.createElement("a",{class:"nav-item nav-link",href:"#"},l.a.createElement(i.b,{to:"/culture"},"Culture"))))),l.a.createElement(c.d,null,l.a.createElement(c.b,{exact:!0,path:"/Mnemonics",component:h}),l.a.createElement(c.b,{path:"/mnemonics/:id?",component:u}),l.a.createElement(c.b,{path:"/authors",component:m}),l.a.createElement(c.b,{path:"/about",component:d}),l.a.createElement(c.b,{path:"/medcalculator",component:b}),l.a.createElement(c.b,{path:"/notes",component:I}),l.a.createElement(c.b,{path:"/transformer",component:v}),l.a.createElement(c.b,{path:"/culture",component:S}),l.a.createElement(c.b,{path:"/",component:b}),l.a.createElement(c.a,{from:"/medcalculator",to:"/"})))}}class M extends n.Component{render(){return l.a.createElement(i.a,null,l.a.createElement("div",{className:"App",style:{height:1050}},l.a.createElement(T,null)))}}var y=M;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.0fda1325.chunk.js.map