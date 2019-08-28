import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import puce from "./puce.png";
import mastercard from "./visa.png";


class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    companyName :'CREDIT CARD',
    cardNumber :'7253325678951245',
    validThru :'1150',
    cardHolder :'CARDHOLDER' ,
     
    }
  }
  handleChangeName=(event)=> {
    this.setState({companyName: event.target.value});
  }
  handleChangeNumber=(event)=> {
    this.setState({cardNumber: event.target.value});
  }
  handleChangeThru=(event)=> {
    this.setState({validThru: event.target.value});
  }
  handleChangeHolder=(event)=> {
    this.setState({cardHolder: event.target.value});
  }
//  renderCardNumber = number => {
//     number = number.toString()
//     let resultStr = ''
//     for  (let i = 0; i< number.length; i +=4){
//       resultStr += number.slice(i, i + 4) + ' '
  
//     }
//     return resultStr.trim()
//   }
  render() {
   
  return (
    <div className="npn">
    <div className="row">
    <h1 className="credit-card-title" >{this.state.companyName.toLocaleUpperCase().slice(0,10)} </h1>
      <div className="card-info">
        <div className="info">
          <div  className="container">
          <img id="pus" src={puce} alt="puce" />
          <h2 className="credit-card-number" placeholder={this.state.cardNumber}> 
            {this.state.cardNumber.slice(0,4)+' '+this.state.cardNumber.slice(4,8)+'  '+this.state.cardNumber.slice(8,12)+' '+this.state.cardNumber.slice(12,16)}
            </h2>
            </div>
          <h2 className="credit-card-holder-name" placeholder={this.state.cardHolder}>
          {this.state.cardHolder.slice(0,15)}
          </h2>
        </div>
        <div className='date-info'>
          <div className='valid-date'>
              <p>
                VALID
                <br />
                THRU 
              </p>
            <div className='date'>
              <center><p>MONTH/YEAR <br/><h2 className="credit-card-valid-thru">{this.state.validThru.slice(0,2)+' / '+this.state.validThru.slice(2,4)}</h2></p></center>
            
            </div>
          </div>
          <img id="log" src={mastercard} alt="logo" />
        </div>
      </div>
      </div>
      <div className="Title">
          <form >
            <label>
              companyName:
          <input type="text"  onChange={this.handleChangeName} />
            </label>
            <input type="Button" value="confirm" />
          </form>
          <form >
            <label>
              cardNumber:
          <input type="text"  onChange={this.handleChangeNumber} />
            </label>
            <input type="Button" value="confirm" />
          </form>
          <form >
            <label>
              validThru:
          <input type="text" onChange={this.handleChangeThru} />
            </label>
            <input type="Button" value="confirm" />
          </form>
          <form >
            <label>
              cardHolder:
          <input type="text" onChange={this.handleChangeHolder} />
            </label>
            <input type="Button" value="confirm" />
          </form>
        </div>
      
    </div>
  );
}
}
export default Card;
