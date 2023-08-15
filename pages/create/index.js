import React, {Component} from 'react';
import {MainPageView}  from '../../containers/create';

export class CreateScreen extends Component {

  constructor(props) {
    super(props);
    this.sendFormula = this.sendFormula.bind(this);
    this.state = { 
      formula: '',
      subject: '',
    };
  }
  sendFormula = () => {
    var body = 'formula=' + encodeURIComponent(this.state.formula) +
        '&subject=' + encodeURIComponent(this.state.subject);
    const Http = new XMLHttpRequest();
    const url = `https://radiant-mesa-41191.herokuapp.com/register`;
    Http.open('POST',url);
    Http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    Http.send(body);
    this.setState({
      formula:'',
      subject:''
    });
  
  }
  render() {
    return <MainPageView scope={this}/>
  }
}
