import { useState } from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  const renderizaResultado = () => {
    const imc = (peso / (altura * altura)).toFixed(1);

    if (imc >= 18.5 && imc <= 24.9) {
      return (
        <>
          <h3>Seu IMC é: {imc}</h3>
          <h4>Sua classificação é: Normal</h4>
        </>
      );
    } else if (imc >= 25 && imc <= 29.9) {
      return (
        <>
          <h3>Seu IMC é: {imc}</h3>
          <h4>Sua classificação é: Sobrepeso</h4>
        </>
      );
    } else if (imc >= 30 && imc <= 39.9) {
      return (
        <>
          <h3>Seu IMC é: {imc}</h3>
          <h4>Sua classificação é: Obesidade</h4>
        </>
      );
    } else if (imc >= 40) {
      return (
        <>
          <h3>Seu IMC é: {imc}</h3>
          <h4>Sua classificação é: Obesidade Grave</h4>
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      <form>
        <label className={styles.labelWeight}>Peso</label>
        <input
          type="number"
          placeholder="Peso (Kg)"
          onChange={({ target }) => setPeso(parseFloat(target.value))}
        />
        <label className={styles.labelHeight}>Altura</label>
        <input
          type="number"
          placeholder="Altura (m)"
          onChange={({ target }) => setAltura(parseFloat(target.value))}
        />
        {renderizaResultado()}
      </form>
    </div>
  );
};

export default Formulario;
