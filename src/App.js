import React from 'react';
import ReadOnlyInput from './components/ReadOnlyInput';
import { calculateSalaryFrom } from './helpers/salary';



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      grossSalary: null,
      calculations: {
        baseINSS: 0,
        discountINSS: 0,
        percentageINSS: 0,
        baseIRPF: 0,
        discountIRPF: 0,
        percentageIRPF: 0,
        netSalary: 0,
      },
    };
  }

  handleInputChange = (event) => {
    const newNumber = Number(event.target.value);

    this.setState({ grossSalary: newNumber })
  };

  componentDidUpdate(_, previousState) {
    if (this.state.grossSalary !== previousState.grossSalary) {
      const calculations = calculateSalaryFrom(this.state.grossSalary);
      this.setState({ calculations });
    }
  }

  render() {
    const { calculations } = this.state;
    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = calculations;

    return (
      <div className='container'>
        <h1>React Calculator</h1>
        <label>
          <span>Salário bruto</span>
          <input type='number' onChange={this.handleInputChange} placeholder='ex:1.045,00' />
        </label>
        <ReadOnlyInput label='Base INSS:' value={baseINSS} />
        <ReadOnlyInput label='Desconto INSS:' value={discountINSS} />
        <ReadOnlyInput label='Base IRPF:' value={baseIRPF} />
        <ReadOnlyInput label='Desconto IRPF:' value={discountIRPF} />
        <ReadOnlyInput label='Salário líquido:' value={netSalary} />
      </div >
    );
  }
}


