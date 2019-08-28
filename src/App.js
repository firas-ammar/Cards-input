import React from 'react';
import Card from './card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
       number: '',
      date: '',
      car: ''
    }
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChangeName=(event)=> {
  //   this.setState({name: event.target.value});
  // }
  // handleChangeNumber=(event)=> {
  //   this.setState({number: event.target.value});
  // }
  // handleChangeThru=(event)=> {
  //   this.setState({date: event.target.value});
  // }
  // handleChangeThru=(event)=> {
  //   this.setState({card: event.target.value});
  // }
  
  // renderCardNumber = number => {
  //   number = number.toString()
  //   let resultStr = ''
  //   for  (let i = 0; i< number.length; i +=4){
  //     resultStr += number.slice(i, i + 4) + ' '
  
  //   }
  //   return resultStr.trim()
  // }
  render() {
    return (
      <div className="App">
        {/* <div className="Title">
          <form >
            <label>
              companyName:
          <input type="text" value={this.state.value} onChange={this.handleChangeName} />
            </label>
            <input type="Button" value="confirm" />
          </form>
          <form >
            <label>
              cardNumber:
          <input type="text" value={this.state.value} onChange={this.handleChangeNumber} />
            </label>
            <input type="Button" value="confirm" />
          </form>
          <form >
            <label>
              validThru:
          <input type="text" value={this.state.value} onChange={this.handleChangeThru} />
            </label>
            <input type="Button" value="confirm" />
          </form>
          <form >
            <label>
              cardHolder:
          <input type="text" value={this.state.value} onChange={this.handleChangeHolder} />
            </label>
            <input type="Button" value="confirm" />
          </form>
        </div> */}
        <Card />

      </div>
    );
  }

}
export default App;
