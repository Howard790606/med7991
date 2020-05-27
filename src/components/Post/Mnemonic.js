import React from "react";

export default ({ id }) => {
    let list;
    if(id == "Acute decompensated heart failure") {
        list = 
        <p><b>FAILURE</b><br></br>
        <b>F</b>orgot medication<br></br>
        <b>A</b>naemia/Ischemia<br></br>
        <b>I</b>nfarction/Infection<br></br>
        <b>L</b>ifestyle: taken too much salt<br></br>
        <b>U</b>pregulation of CO: pregnancy, hyperthyroidism<br></br>
        <b>R</b>enal failure<br></br>
        <b>E</b>mbolism: pulmonary</p>
    }else if(id == "High anion gap metabolic acidosis"){
        list = 
        <p><b>MUDPILES</b><br></br>
        <b>M</b>ethanol (formic acid)<br></br>
        <b>U</b>remia<br></br>
        <b>D</b>iabetic ketoacidosis<br></br>
        <b>P</b>ropylene glycol<br></br>
        <b>I</b>ron tablets or isoniazid<br></br>
        <b>L</b>actic acidosis (such as by metformin toxicity)<br></br>
        <b>E</b>thylene glycol<br></br>
        <b>S</b>alicylates (late)<br></br>
        </p>
    }
    return (
        <article>
            <h1>{id}</h1>
            <p>{list}</p>
        </article>
    );
};
