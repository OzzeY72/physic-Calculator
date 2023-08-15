import React, {Component} from 'react';
import {MainPageView}  from '../../containers/formulas';

export class FormulasScreen extends Component {

  constructor(props) {
    super(props);
    this.makeRemoteRequest = this.makeRemoteRequest.bind(this);
    this.state = { 
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      switchValue: false,
    };
  }

  toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `http://radiant-mesa-41191.herokuapp.com/json/formulas.json`;
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


  render() {
    return <MainPageView scope={this}/>
  }
}
