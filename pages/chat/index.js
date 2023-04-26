import React, {Component} from 'react';
import {Dimensions, Keyboard,AsyncStorage, } from "react-native";
import {MainPageView}  from '../../containers/chat';
import io from "socket.io-client";

//import AsyncStorage from '@react-native-community/async-storage';

export class ChatScreen extends Component {

  constructor(props) {
    super(props);
    this._retrieveData = this._retrieveData.bind(this);
    this.sendMassage = this.sendMassage.bind(this);
    this.deleteMassage = this.deleteMassage.bind(this);
    this.getMassages = this.getMassages.bind(this);
    this.enterEditor = this.enterEditor.bind(this);
    this.editMassage = this.editMassage.bind(this);
    this.state = { 
      height: Dimensions.get('window').height,
      author: 'anon',
      massage: '',
      time: '',
      data:[],
      loading: false,
      page: 1,
      seed: 1,
      error: null,
      status:'',
      editorMode:false,
      visibleHeight:0,
      first: true,
    };
  }
  /*
  async Listener (){
    let response = await fetch('http://radiant-mesa-41191.herokuapp.com/massage');
    //let response = await fetch('46.175.250.105:5000/massage');
    let data = await response.json();
    console.log(data);
    if (data.length != this.state.data.length) this.setState({data:data})

    this.Listener();
  }*/

  componentDidMount(){
    this.getMassages();
    this._retrieveData();
    this.Listener();
   
  }
  componentWillMount(){
  	this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
	this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

	_keyboardDidShow(e) {
    	this.props.navigation.setParams({
        	keyboardHeight: e.endCoordinates.height,
        	normalHeight: Dimensions.get('window').height, 
        	shortHeight: Dimensions.get('window').height - e.endCoordinates.height, 
    	}); 
	}

  getMassages () {
    const { page, seed } = this.state;
    const url = `http://radiant-mesa-41191.herokuapp.com/massage`;
    //const url = `46.175.250.105:5000/massage`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res,
          error: res.error || null,
          loading: false,
          refreshing: false
    console.log("123");
    this._retrieveData();
    //this.socket = io("http://46.175.250.105:5000");
    this.socket = io("http://radiant-mesa-41191.herokuapp.com/");
    this.socket.emit('req',"");
    this.socket.on('first', msg =>{
      if(this.state.first){
      this.setState({
        data: msg,
      });
        this.setState({first: false});
        this.forceUpdate();
      }
    });
    this.socket.on("massage", msg =>{
      console.log("1");
      console.log(msg);
      this.state.data.push(msg);
      console.log(this.state.data);
      
        this.forceUpdate();
    });
    this.socket.on('edit', msg =>{
      console.log("edit");
      var json = this.state.data;
      json.forEach(element=>{
        Object.keys(element).forEach(function(key){
          if(element[key]==msg.old){
            var pos = json.indexOf(element);
            json.splice(pos, 1, msg);
          }
        });
      });
      this.setState({
          data: json,
      });
        this.forceUpdate();
    });
    this.socket.on('delete for all', msg =>{
      console.log('delete for all');

      var json = this.state.data;
        json.forEach(element => {
          Object.keys(element).forEach(function(key){
          if(element[key]==msg.massage){
            var pos = json.indexOf(element);
            json.splice(pos, 1);
          }
        });
        });
          this.setState({
          data: json,
      });
      this.forceUpdate();
      
    });
    //this.Listener();
   
  }

  massageH = () =>{
    

  }
	_retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('author');
            if (value !== null) {
                // Our data is fetched successfully
                this.setState({author:value});
            }
        } catch (error) {
            // Error retrieving data
        }
    }

  deleteMassage = (massage) =>{
  	var body = 'id=' + encodeURIComponent(massage);
    const Http = new XMLHttpRequest();
    const url = `http://radiant-mesa-41191.herokuapp.com/delete`;
    //const url = `46.175.250.105:5000/delete`;
    Http.open('POST',url);
    Http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    Http.send(body);

  }
  sendMassage = () => {
    var body = 'massage=' + encodeURIComponent(this.state.massage) +
        '&author=' + encodeURIComponent(this.state.author);
    const Http = new XMLHttpRequest();
    const url = `http://radiant-mesa-41191.herokuapp.com/massage`;
    //const url = `46.175.250.105:5000/massage`;
    Http.open('POST',url);
    Http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   componentWillMount () {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this))
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this))
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove()
    this.keyboardDidHideListener.remove()
  }

   keyboardDidShow (e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({
      visibleHeight: newSize,
    })
  }
  
  keyboardDidHide (e) {
    this.setState({
      visibleHeight: Dimensions.get('window').height,
    })
  }  
	_retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('author');
            if (value !== null) {
                // Our data is fetched successfully
                this.setState({author:value});
            }
        } catch (error) {
            // Error retrieving data
        }
    }

  deleteMassage = (massage) =>{
  	var body = {"massage":massage};
    this.socket.emit("delete for all", body);
    if (this.state.data.length == 1){
      this.setState({
        editorMode:false,
      });
    }

  }
  editMassage = (item) =>{
    item.massage = this.state.massage;
    item.old = item.massage
    this.socket.emit('edit', item);
    this.setState({
      massage: '',
    });
  }
  
  enterEditor = () =>{
  	this.setState({editorMode:true});
  }
  exitEditor = () =>{
  	this.setState({editorMode:false});
  }

  sendMassage = () => {
    var body = {"massage":this.state.massage,"author":this.state.author};
    this.socket.emit("massage", body);
    this.setState({
      massage: '',
    });
  
  }
  render() {
    return <MainPageView scope={this}/>
  }
}
