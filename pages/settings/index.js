import React, {Component} from 'react';
import {MainPageView}  from '../../containers/settings';
import {AsyncStorage } from "react-native";
//import AsyncStorage from '@react-native-community/async-storage';

export class SettingsScreen extends Component {

  constructor(props) {
    super(props);

    this._storeData = this._storeData.bind(this);
    this.state = { 
      acceskey: 'Y789',
      author: 'anon',
    };
  }
  _storeData = async () => {
        try {
            await AsyncStorage.setItem('author', this.state.author);
        } catch (error) {
            // Error saving data
        }
  }

  /*storeData = async () => {
    try {
      await AsyncStorage.setItem('name', this.state.author)
    } catch (e) {
      // saving error
    }
  }*/

  render() {
    return <MainPageView scope={this}/>
  }
}
