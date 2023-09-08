import { createRef, useRef, useState } from 'react';
import './App.css';

//useRef(디자인)
//dom을 변경할 때 사용
function App() {
  const myRef = useRef(null);
  const [list, setList] = useState([
    { id: 1, name: '이대호' },
    { id: 2, name: '최대성' },
  ]);

  //myRef가 배열로 만들어진다. createRef만큼!
  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          console.log(myRef);
          console.log(myRef.current);
          // myRef.current.style.backgroundColor = 'gray'; box 색깔 변경

          // myRefs[0].current.style.backgroundColor = 'red'; 이대호 색깔 변경
          myRefs[1].current.style.backgroundColor = 'blue'; // 최대성 색깔 변경
        }}
      >
        색변경
      </button>
      <div ref={myRefs}>box</div>
      <div>
        롯데자이언츠 선수 :{' '}
        {list.map((user, index) => (
          <h1 ref={myRefs[index]}>{user.name}</h1>
        ))}
        {/* 근데 myRef를 붙이면 최대성 하나밖에 적용이안된다 */}
        {/* myRefs는 user에 index를 부여해 응답해준다. 그래서 동적으로 실행되게 만들어준다. */}
      </div>
    </div>
  );
}

export default App;
