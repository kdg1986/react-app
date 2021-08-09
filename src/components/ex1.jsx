import React, { Component } from 'react';
import '@STYLE/style.scss';

class ex1 extends Component {
    
    state = {
        num : 0
    }

    static defaultProps = {
        onIncrement: () => console.log(this.state),
        object: {},
        array: []
      }

    //mount 1
    constructor(props){
        super(props);
        console.log('constructor')
    }

    //mount 2
    static getDerivedStateFromProps(props, state){
        console.log( 'getDerivedStateFromProps==>' ,props, state );           
        return { num : props.name };
    }

    event1 = () => {
        console.log(this)
    }

    //mount 3
    render() {
        //return null;
        const { onIncrement } = this.props;
      return (
        <div>
          <b>ex1</b><br/>
          <button onClick={this.event1}>{this.state.num}</button>          
          <button onClick={onIncrement}>aa</button>
        </div>
      );
    }

    //mount 4
    componentDidMount(){
        console.log('componentDidMount')
    }

  }

  export default ex1;