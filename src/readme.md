JSX 문법 1. class 넣을 땐 className
JSX 문법 2. 변수 넣을 땐 { }
JSX 문법 3. style 넣을 땐 style={{스타일명: '값'}} *camelCase로 작성

중요한 데이터는 변수 말고 state에 담기
-> 쉽게 말해: 자주 바뀌는 부분은 state로 만들어놓기!
   1. import {useState} 2. useState(보관할 자료) 3. let [작명, 작명]
   ->   let [글제목, b] = useState('여자 코트 추천');
글제목(==a) 자리에 state에 보관한 자료가 들어있음 -> a(글제목)를 사용하면 '여자 코트 추천' 이 나옴

onClick = { } 안에는 함수 이름을 넣어야 함!
  Ex: onClick = { () => { changeNum } }

state 변경하는 법:   state변경함수(새로운state)
  Ex: changeNum( isNumber+1 )

array 의 state 변경은 아래와 같이 한다
전: onClick={ () => { changeTitle( ['여자 코트 추천', '카카오 해커톤 후기', '리액트 초보 꿀팁'] ) } }
후: onClick={ () => { isTitle[0] = '여자 코트 추천' } }

참고로 array / object 다룰 때는 원본을 보존하는 게 좋음
위 방법을 쓸 경우 영구적으로 내용이 수정되므로 되돌리기가 어렵다. 따라서 카피본을 따로 만들어서 수정하는 것 추천.