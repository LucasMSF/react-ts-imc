import { useState } from 'react';
import { ImcForm } from './components/ImcForm/ImcForm';
import { ImcState } from './components/ImcState/ImcState';
import { Imc, imcState } from './types/Imc';

function App() {
  const [imc, setImc] = useState({} as Imc);

  const getImcState = (imc: number) => {
    let state: imcState = {} as imcState;

    if (imc < 18) {
      state.state = 'Baixo peso';
      state.color = 'blue';
    }
    else if (imc < 25) {
      state.state = 'Peso normal';
      state.color = 'green';
    }
    else {
      state.state = 'Acima do peso';
      state.color = 'red';
    }

    return state;
  }

  const imcCalc = (peso: number, altura: number) => {
    if ((isNaN(peso) || isNaN(altura)) || (peso == 0 || altura == 0)) {
      alert('Insira valores válidos!');
      return;
    }

    let imc = parseFloat((peso / altura ** 2).toFixed(2));

    if (imc < 1) {
      alert('IMC zerado, confira os valores informados!');
      return;
    }

    setImc({
      imc,
      state: getImcState(imc)
    });
  }


  return (
    <div className="App">
      <h1>REACT IMC</h1>
      <ImcForm handleClick={imcCalc} />

      {imc.imc
        ? <ImcState imc={imc.imc} state={imc.state} />
        : 'Insira os valores para o cálculo'
      }

    </div>
  )
}

export default App;
