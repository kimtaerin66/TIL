import React from "react";
import { useRecoilState } from "recoil";
import { MinuteState, HourSelctor } from "./atoms";

function App() {
  //state를 가져와서 변형할거니 value말고 state
  const [minutes, setMinutes] = useRecoilState(MinuteState);
  const [hours, setHours] = useRecoilState(HourSelctor);
  //값이 바뀌는것을 감지 -> onChange
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
    //number를 받아오는데 string으로 인식하니 앞에 +를 붙인다
  };
  const onChange2 = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <>
      <input
        value={minutes}
        onChange={onChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hours} onChange={onChange2} type="number" placeholder="Hours" />
    </>
  );
}

export default App;
