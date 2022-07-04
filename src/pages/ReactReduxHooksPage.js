/*
 * @Author: shimingxia
 * @Date: 2022-06-06 19:07:02
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-04 19:15:38
 * @Description: 
 */
import React, {useCallback} from "react";
import {useSelector, useDispatch} from "../myReactRedux";

export default function ReactReduxHooksPage(props) {
  // 获取state
  const count = useSelector(({count}) => count);

  // 获取dispatch
  const dispatch = useDispatch();

  const add = useCallback(() => {
    dispatch({type: "ADD"});
  }, []);

  return (
    <div>
      <h3>ReactReduxHooksPage</h3>
      <button onClick={add}>{count}</button>
    </div>
  );
}