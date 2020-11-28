//import logo from './logo.svg';
import './App.css';
//import StudentApp from './studentList.jsx';
import React from 'react';
import logo from './assets/BL_logo_square_jpg.jpg';

class App extends React.Component {
  url="http://bridgelabz.com/";
  constructor() {
    super()
    this.state= {
      userName: '',
      nameError: ''
    }
  }
  onClick = ($event) => {
    console.log("save button is clicked! ", $event);
    window.open(this.url,"_blank");
  }
  onNameChange = (event) => {
    console.log("Value is: ",event.target.value);
    this.setState({userName:event.target.value});
    let nameReg=RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameReg.test(event.target.value))
    this.setState({nameError: ''});
    else
    this.setState({nameError: 'Invalid Name!'});
  }

  render() {
    return (
      <>
      <div>
        <h2>Hello {this.state.userName} from the other world!!</h2>
        <img src={logo} onClick={this.onClick} alt="sample" />
      </div>
      <div>
        <input onChange={this.onNameChange} />
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </>
      /*<div>
        <StudentApp />
      </div>*/
    );
  }
}
export default App;
