/*
 * @Author: shimingxia
 * @Date: 2022-06-06 10:48:08
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-04 19:15:20
 * @Description: 
 */

import {createStore, combineReducers} from "redux";

// 定义修改规则
export const countReducer = (state = 0, {type, payload = 1}) => {
  switch (type) {
    case "ADD":
      return state + payload;
    case "MINUS":
      return state - payload;
    default:
      return state;
  }
};

const store = createStore(combineReducers({count: countReducer}));

export default store;