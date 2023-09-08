import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum 함수 실행', sum);
    return sum;
  };

  //리스트 값이 추가 됐을때는 sum 함수 실행이 되는것이 당연하다
  //그러나 문자가 변경됐을때도 sum 함수가 실행이 되어서는 안된다
  //이럴때 useMemo를 사용하여 list가 변경되었을때만 sum함수가 실행되도록 한다.
  //나는 getAddResult()라는 함수를 기억할게 [list]가 변경 됐을때
  const addResult = useMemo(() => getAddResult(), [list]);

  return (
    <div>
      <button
        onClick={() => {
          setStr('바뀐 합계');
        }}
      >
        문자 변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }} // 리스트의 값이 바뀔때 다시 리턴이 되어서
      >
        리스트 값 추가
      </button>
      <div>
        {list.map((i) => (
          <h1>{i}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
      {/* 얘의 값변화에도 영항을 준다. */}
    </div>
  );
}

export default App;
