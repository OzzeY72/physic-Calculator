import React, {Component} from 'react';
import {MainPageView}  from '../../containers/formulas';

export class FormulasScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `http://192.168.0.106:8080/json/formulas.json`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  /*getText(){
    setState({str: 'aaaaaaa'});
  }*/
  render() {
    return <MainPageView scope={this}/>
  }
}
