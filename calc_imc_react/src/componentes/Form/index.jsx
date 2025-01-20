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
                <div className={styles.IMCbox}>
                    <div>
                        <img src="" alt="" />
                        <h3>Abaixo do Peso</h3>
                        <p className={styles.texto}><strong>IMC menor que 18,5. Indica peso insuficiente para a altura, podendo estar associado a deficiências nutricionais ou problemas de saúde</strong></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Peso Normal</h3>
                        <p className={styles.texto}><strong>IMC entre 18,5 e 24,9. Considerado saudável, indicando equilíbrio entre peso e altura.</strong></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Sobrepeso</h3>
                        <p className={styles.texto}><strong>IMC entre 25,0 e 29,9. Peso acima do ideal, podendo representar risco aumentado para doenças crônicas, como hipertensão.</strong></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Obesidade grau I</h3>
                        <p className={styles.texto}><strong>IMC entre 30,0 e 34,9. Excesso de peso com maior risco de doenças relacionadas, como diabetes tipo 2 e problemas cardiovasculares.</strong></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Obesidade grau II</h3>
                        <p className={styles.texto}><strong>IMC entre 35,0 e 39,9. Condição mais grave, associada a riscos significativos para a saúde e maior probabilidade de complicações.</strong></p>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <h3>Obesidade grau III</h3>
                        <p className={styles.texto}><strong>IMC igual ou maior que 40,0. Nível mais severo, com alto risco de doenças graves e impacto significativo na qualidade de vida.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}