/*
 * @Author: shimingxia
 * @Date: 2022-06-06 16:45:32
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-07-04 19:21:40
 * @Description: 
 */
import {Component} from "react";
import {connect} from "../myReactRedux";
import {bindActionCreators} from "../myReactRedux";

// connect原理 高阶组件（hoc）
@connect(
  // mapStateToProps 把state映射到props
  ({count}) => ({count}),
  // mapDispatchToProps object| function
  // {add: () => ({type: "ADD"}), minus: () => ({type: "MINUS"})}

  dispatch => {
    let creators = {
      add: () => ({type: "ADD"}),
      minus: () => ({type: "MINUS"})
    };

    creators = bindActionCreators(creators, dispatch);

    return {dispatch, ...creators};
  }
)
class ReactReduxPage extends Component {
  render() {
    console.log("props", this.props); //sy-log
    const {count, dispatch, add, minus} = this.props;
    return (
      <div>
        <h3>ReactReduxPage</h3>
        <p>{count}</p>
        <button onClick={() => dispatch({type: "ADD", payload: 100})}>
          dispatch add
        </button>
        <button onClick={add}> add</button>
        <button onClick={minus}>minus </button>
      </div>
    );
  }
}
export default ReactReduxPage;