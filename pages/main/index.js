import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import { buttons } from './buttons'
import { MainPageView } from "../../containers/main";

export class MainScreen extends Component {
  static calculateString(string) { return `${eval(string)}`; }
  static getLast(string) { return string.substr(-1, 1) }
  static getWithoutLast(string) { return string.substr(0, string.length - 1) }
  static isOperator (value) { return '+-*/'.includes(value); }
  static removeChar(falsy, condition = null, truth = '') {
    return isEmpty(condition || falsy) ? truth : falsy.substr(0, falsy.length - 1)
  }

  constructor(props) {
    super(props);
    this.state = { calculation: '', current_num: '', result: '', highlight: false, clear_calc: '', border: false};
  }
  //isTemples(value) {return '()'.includes(value) ? true : false}
  onTap(value) {this.setValues(value) }
  onPlus() {  this.setOperatorValue('+')}
  onMinus() {  this.setOperatorValue('-') }
  onClear() { this.setState({ calculation: '', current_num: '', result: '', clear_calc: '', highlight: false, border: false}) }
  onDivide() {
    if (!isEmpty(this.state.calculation)) {
       this.setOperatorValue('/')
    }
  }

  onMultiply() {
    if (!isEmpty(this.state.calculation)) {
      this.setOperatorValue('*')
    }
  }

  onDelete() {
    const { removeChar, isOperator, calculateString, getWithoutLast, getLast } = MainScreen;
    const { calculation, current_num, clear_calc } = this.state;
    const num = calculation.split('')[calculation.length-1];
    const calc = removeChar(calculation);
    const clear = removeChar(clear_calc, current_num, clear_calc);
    let result_value = isEmpty(calc) && isOperator(getLast(calc)) ? '' : calc;
    let sign = '';

    if( !isEmpty(result_value) && isOperator(getLast(result_value))) {
      sign = getLast(result_value);
      result_value = getWithoutLast(result_value)
    }

    const result = isEmpty(result_value) ? '' : calculateString(result_value);

    this.setState({ current_num: num, clear_calc: clear, calculation: calc, result: result + sign,border: calculation.length >= 13 ? true : false})
  }

  onResult() {
  	const { calculation, current_num} = this.state;
    try {const calc = MainScreen.isOperator(current_num) ? MainScreen.calculateString(calculation.slice(0, -1)) : MainScreen.calculateString(calculation);
      this.setState({ result: calc, clear_calc: calc, current_num: '', highlight: true})} catch (error) {this.setState({ calculation: '', current_num: '', result: '', clear_calc: '', highlight: false, border: false})};
  }
  onComa() {
    if (!this.state.current_num.includes('.') && this.state.result) {
      this.setValues('.')
    }
  }
  onRoot(){
    const res = this.state.result;
    const root = Math.sqrt(res).toString(); 

    this.setState({
      result: root,
      calculation: root,
      current_num: '',
      clear_calc: root,
      highlight: true,
      border: root.length >= 13 ? true : false,
    })
  }
  onPower(){
    const res = this.state.result;
    const pow = Math.pow(res,2).toString();

    this.setState({
      result: pow,
      calculation: pow,
      current_num: '',
      clear_calc: pow,
      highlight: true,
      border: pow.length >= 13 ? true : false
    })
  }
  setValues(value, round) {
    const { current_num, clear_calc, highlight, deleted} = this.state;
    const num =  current_num;
    const calc = clear_calc;
    const calculation = this.state.calculation + value;

    this.setState({
      highlight: false,
      clear_calc: calc,
      current_num: num + value,
      result: MainScreen.calculateString(calculation),
      calculation: highlight ? clear_calc : calculation,
      border: calculation.length >= 13 ? true : false,
    })
  }

  setOperatorValue(value) {
    const operators = '+-*/';
    const { clear_calc, current_num, highlight } = this.state;
    const num = operators.includes(current_num) ? '' : current_num;
    const calc = operators.includes(current_num) ? clear_calc : clear_calc + current_num;

    this.setState({
      clear_calc: calc,
      current_num: value,
      highlight: false,
      result: MainScreen.calculateString(calc),
      calculation: highlight ? MainScreen.calculateString(clear_calc) : clear_calc + num + value,
      border: calc.length >= 13 ? true : false,
    })
  }

  render() {
    this.bindMethods.call(this);
    return <MainPageView scope={this} buttons={buttons}/>
  }

  bindMethods() {
    this.onTap = this.onTap.bind(this);
    this.onPlus = this.onPlus.bind(this);
    this.onComa = this.onComa.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onDivide = this.onDivide.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onResult = this.onResult.bind(this);
    this.setValues = this.setValues.bind(this);
    this.onMultiply = this.onMultiply.bind(this);
    this.setOperatorValue = this.setOperatorValue.bind(this);
  }
}
