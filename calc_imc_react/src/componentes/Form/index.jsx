import React from "react";
import { useState, useEffect } from "react";
import styles from './form.module.css';

export default()=>{
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [IMC, setIMC] = useState(0)

    function resultado(){
        const alturaM = altura/100
        const IMCcompleto = (peso/(alturaM*alturaM)).toFixed(1)
        setIMC(IMCcompleto)
    }

    return(
        <div className={styles.allBox}>
            <div className={styles.contentBox}>
                <h1>Como está sua saúde?</h1>
                <div className={styles.formBox}>
                    <h2>Calcule seu IMC aqui:</h2>
                    <input type="number" placeholder="Seu peso em kg" onChange={e => setPeso(Number(e.target.value))} onKeyUp={resultado} />
                    <input type="number" placeholder="Sua altura em cm" onChange={e => setAltura(Number(e.target.value))} onKeyUp={resultado} />
                    <div className={styles.resultBox}>
                        {peso && altura&& (<p>Seu IMC é de: {IMC}</p>)}
                    </div>
                </div>
            </div>
        </div>
    )
}