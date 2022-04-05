import React from 'react';
import { atom } from 'recoil';


export interface IToDo {
    text : string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE"; 
  }

export const toDoState = atom<IToDo[]>({
    key:"toDo", //key
    default: [], //기본값
 })


 