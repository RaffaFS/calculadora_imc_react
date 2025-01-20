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
            
        </div>
    )
}