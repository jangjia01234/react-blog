import React, { useState } from 'react';
import './App.css';

// 미리보기 창 띄우기는 npm start

// JSX 문법 1. class 넣을 땐 className
// JSX 문법 2. 변수 넣을 땐 { }
// JSX 문법 3. style 넣을 땐 style={{스타일명: '값'}} *camelCase로 작성

// return() 안에는 병렬로 태그 2개 이상 기입 X

// 중요한 데이터는 변수 말고 state에 담기
// -> 내용 변경 시 자동으로 html 에 반영되게 만들고 싶으면 state 사용함 (변수는 이거 안됨)
// -> 쉽게 말해: 자주 변경될 것 같은 부분은 state 로 만들어놓기!
// 사용 순서: 
//    1. import {useState} 2. useState(보관할 자료) 3. let [작명, 작명]
//    ->   let [글제목, b] = useState('여자 코트 추천');
// 글제목(==a) 자리에 state에 보관한 자료가 들어있음 -> a(글제목)를 사용하면 '여자 코트 추천' 이 나옴
// b 는 state 변경을 도와주는 함수 (추후에 공부할 예정)

function App () {

  let post = '강남 우동 맛집';
  let[a, b] = useState('남자 코트 추천');
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>개발 blog</h4>
      </div>
      <div className="list">
        <h4>{ post }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  )
}

export default App;