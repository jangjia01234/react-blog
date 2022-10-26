import React, { useState } from 'react';
import './App.css';
import styled from 'styled-components';

function App () {

  let[isTitle, changeTitle] = useState(['남자 코트 추천', '카카오 해커톤 후기', '리액트 초보 꿀팁']);
  let[isNumber, changeNum] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>개발 blog</h4>
      </div>
      <div className="list">
        <h4>{ isTitle[0] } 
		  <span onClick={ () => { changeNum( isNumber+1 ) } }>👍</span> { isNumber } 
		  <span onClick={ () => { 
				let copy = [...isTitle];
				copy[0] = '여자 코트 추천';
				changeTitle(copy);
			} }>🛍</span>
		  </h4>
        <p>2월 17일 발행</p>
      </div>
	    <div className="list">
        <h4>{ isTitle[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
	    <div className="list">
        <h4>{ isTitle[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
  
}

export default App;