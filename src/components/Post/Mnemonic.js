import React from "react";

export default ({ id }) => {
    let list;
    if(id == "Acute decompensated heart failure") {
        list = 
        <p>急性心臟衰竭成因口訣<br></br>
        <b>FAILURE</b><br></br>
        <b>F</b>orgot medication<br></br>
        <b>A</b>naemia/Ischemia<br></br>
        <b>I</b>nfarction/Infection<br></br>
        <b>L</b>ifestyle: taken too much salt<br></br>
        <b>U</b>pregulation of CO: pregnancy, hyperthyroidism<br></br>
        <b>R</b>enal failure<br></br>
        <b>E</b>mbolism: pulmonary</p>
    }else if(id == "High anion gap metabolic acidosis"){
        list = 
        <p>高陰離子間隙成因口訣<br></br>
        <b>MUDPILES</b><br></br>
        <b>M</b>ethanol (formic acid)<br></br>
        <b>U</b>remia<br></br>
        <b>D</b>iabetic ketoacidosis<br></br>
        <b>P</b>ropylene glycol<br></br>
        <b>I</b>ron tablets or isoniazid<br></br>
        <b>L</b>actic acidosis (such as by metformin toxicity)<br></br>
        <b>E</b>thylene glycol<br></br>
        <b>S</b>alicylates (late)<br></br>
        </p>
    }else if(id == "Systemic lupus erythematosus"){
        list = 
        <p>紅斑性狼瘡診斷準則口訣<br></br>
        <b>DOPAMINE RASH</b> Criteria: >=4 (96% Sensitivity and Specificity)<br></br>
        <b>D</b>iscoid rash<br></br>
        <b>O</b>ral ulcers<br></br>
        <b>P</b>hotosensitivity<br></br>
        <b>A</b>rthritis (nondeforming)<br></br>
        <b>M</b>alar rash<br></br>
        <b>I</b>mmunologic criteria: dsDNA, Sm proteins, antiphospholipids<br></br>
        <b>N</b>eurologic symptoms (lupus cerebritis, seizures)<br></br>
        <b>E</b>levated ESR<br></br>
        <b>R</b>enal disease<br></br>
        <b>A</b>NA (+)<br></br>
        <b>S</b>erositis (pleural or pericardial effusion)<br></br>
        <b>H</b>ematologic abnormalities<br></br>
        </p>
    }
    return (
        <article>
            <h1>{id}</h1>
            <p>{list}</p>
        </article>
    );
};
