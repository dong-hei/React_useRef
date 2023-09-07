import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Sub from './Sub';
import { height } from './Sub';

function App() {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    //다운로드 받고 (통신을 통해)
    let downloadData = 5; //가정
    setData(downloadData);
  };

  // useEffect 실행시점 : (1) App()이 최초로 그림이 그려질 때
  //(2) 상태 변수가 변경될 때 (그게 dependecyList에 등록되어 있어야한다.)
  //(3) 의존리스트 관리를 할 수 있다.

  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]);
  // 맨끝에 []배열이 의존성을 부여한다. 검색버튼을 누를때
  //search가 없으면 아무리 클릭을해도 의존성 부여없이는 작동하지 않는다.
  //즉 search 의존성을 주입해주면 donwload() 가 실행된다.

  // let num = 1; 상태값 아님
  const [num, setNum] = useState(1); // React안에 hooks 라이브러리의 상태값이 됨.

  const add = () => {
    setNum(num + 1); // 리액트한테 num 변경할것이라고 요청한다.
    console.log('addNum', num);
  };

  //랜더링 시점 = 상태값 변경
  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <div>데이터 : {data}</div>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        add Data
      </button>
      <div>
        <h1>추천: {num}</h1>
        <button onClick={add}>❤</button>
        <Sub />
      </div>
    </div>
  );
}

export default App;
