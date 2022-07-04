/*
 * @Author: shimingxia
 * @Date: 2022-06-06 16:31:40
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-04 19:15:10
 * @Description: 
 */
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store/";
import {Provider} from "./myReactRedux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
