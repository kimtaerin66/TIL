import { atom, selector } from "recoil";

export const MinuteState = atom({
  key: "minutes",
  default: 0,
});

//분의 값가져와서 시간 만들기
//selector가 unknown으로 뜨기에 number타입 적어줌
export const HourSelctor = selector<number>({
  key: "hours",
  get: ({ get }) => {
    const m = get(MinuteState); //분 가져옴
    return m / 60;
  },
  set: ({ set }, newValue) => {
    const m = Number(newValue) * 60;
    set(MinuteState, m);
  },
});
