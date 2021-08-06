import React, { Fragment,Component } from 'react';

//함수형 컴포넌트
class Temp1 extends Component {
  static defaultProps = {
      name: '기본이름1'
  }
  render() {
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

//클래스형 컴포넌트
const Temp2 = props => {      
  return (
    <div>
      안녕하세요! 제 이름은 <b>{props.name}</b> 입니다.
    </div>
  )
}

Temp2.defaultProps = {
  name: '기본이름2'
};

export {
  Temp1,Temp2
}