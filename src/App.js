/*
 * @Author: shimingxia
 * @Date: 2022-05-25 15:05:47
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-04 19:17:36
 * @Description: 
 */
import ReactReduxPage from "./pages/ReactReduxPage";
import HooksPage from "./pages/HooksPage";
import ReactReduxHooksPage from "./pages/ReactReduxHooksPage";
import './App.css'

export default function App(props) {
  return (
    <div>
      <ReactReduxPage />
      <HooksPage />
      <ReactReduxHooksPage />
    </div>
  );
}
