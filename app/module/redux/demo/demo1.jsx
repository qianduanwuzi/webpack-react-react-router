import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import {demoOneReducer} from '../reducer/demoOneReducer.js'
import {demoOne} from '../action/index.js'

@connect(
  (state) => {
    return {
      demoOneReducer: state.demoOneReducer,
    };
  },
)

export default class Demoone extends React.Component {
  static propTypes = {
    // value: PropTypes.number.isRequired,
  }
  componentDidMount(){

  }
  handclick(){
    const { dispatch } = this.props;
    dispatch(demoOne({count:2}))
  }
  render() {
    const { demoOneReducer } = this.props
    let count = demoOneReducer.newcount;

    console.log(this.props.demoOneReducer.newcount)
    return (
      <div>
            <p>this is reduxdemo1</p>
            <span onClick={()=>this.handclick.call(this)}>+</span>
            <span>{count}</span>
      </div>
    )
  }
}
