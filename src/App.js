import React from 'react';
import ReadOnlyInput from './components/ReadOnlyInput';
import { calculateSalaryFrom } from './helpers/salary';
import ProgressBarSalary from './components/ProgressBarSalary';
import InputFullSalary from './components/InputFullSalary';

const COLOR_INSS = 'orange';
const COLOR_IRPF = 'red';
const COLOR_NET_SALARY = 'green';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handelFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue });
  };



  render() {
    const { fullSalary } = this.state;

    const salaryCalculations = calculateSalaryFrom(fullSalary);
    const { baseINSS, discountINSS, percentageINSS, baseIRPF, discountIRPF, percentageIRPF, netSalary, percentageNetSalary } = salaryCalculations;
    return (
      <div className='container'>
        <h1 style={{ textAlign: 'center' }}>React Salário</h1>

        <div className='row'>
          <InputFullSalary currentValue={fullSalary} onSalaryChange={this.handelFullSalaryChange} />
        </div>
        <div className='row'>
          <ReadOnlyInput label='Base INSS:' value={baseINSS} />
          <ReadOnlyInput label='Desconto INSS:' value={discountINSS} percentage={percentageINSS} color={COLOR_INSS} />
          <ReadOnlyInput label='Base IRPF:' value={baseIRPF} />
          <ReadOnlyInput label='Desconto IRPF:' value={discountIRPF} percentage={percentageIRPF} color={COLOR_IRPF} />
          <ReadOnlyInput label='Salário líquido:' value={netSalary} percentage={percentageNetSalary} color={COLOR_NET_SALARY} />
        </div>
        <ProgressBarSalary inss={percentageINSS} irpf={percentageIRPF} netSalary={percentageNetSalary} />
      </div>
    );
  }
}


