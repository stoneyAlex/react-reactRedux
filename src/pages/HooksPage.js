/*
 * @Author: shimingxia
 * @Date: 2022-06-06 19:00:27
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-04 19:25:12
 * @Description: 
 */
import React from "react";
import {countReducer} from "../store";

const initArg = init => init - 0

// reducer是干嘛的
// 定义修改规则
export default function HooksPage(props) {
  const [state, dispatch] = React.useReducer(countReducer, '0', initArg)

  React.useEffect(() => {
    console.log("useeffects")
    return () => {
      console.log("will unmount")
    }
  }, [state])

  React.useLayoutEffect(() => {
    console.log("useLayoutEffect")
    return () => {
      console.log("will unmount")
    }
  }, [state])

  return(
    <div>
      <h3>HooksPage</h3>
      <button onClick={() => dispatch({type: 'ADD'})} type="button">{state}</button>
    </div>
  )
}