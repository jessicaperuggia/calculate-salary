import React from 'react';
import ReadOnlyInput from './components/ReadOnlyInput';



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

  render() {
    const { grossSalary, calculations } = this.setState;
    const
    return (
      <div className='container'>
        <h1>React Calculator</h1>
        <label>
          <span>Salário bruto</span>
          <input type='number' value={grossSalary} onChange={this.handleInputChange} step='any' min='1' max='9999999999' placeholder='ex:1.045,00' />
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


