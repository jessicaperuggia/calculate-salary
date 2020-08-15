import React from 'react';



export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      grossSalary: null,
      inssBase: 0,
      inssDiscount: 0,
      inssDiscountPercentage: 0,
      irpfBase: 0,
      irpfDiscount: 0,
      irpfDiscountPercentage: 0,
      netSalary: 0,
    };
  }

  handleInputChange = (event) => {
    const newNumber = Number(event.target.value);

    this.setState({ grossSalary: newNumber })
  };

  render() {
    const { grossSalary } = this.setState;
    return (
      <div className='container'>
        <h1>React Calculator</h1>
        <label>
          <span>Salário bruto</span>
          <input type='number' value={grossSalary} onChange={this.handleInputChange} step='any' min='1' max='9999999999' placeholder='ex:1.045,00'></input>
        </label>
      </div >
    );
  }
}


