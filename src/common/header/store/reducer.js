import * as actionTypes from "./actionTypes";
import {
  fromJS
} from 'immutable';

// fromJS将js对象转化为immutable对象
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {

    case actionTypes.CHANGE_HEADER_FOCCUS:
      // immutable对象的set方法,会结合之前immutable对象的值
      // 和设置的值,返回一个全新的对象
      return state.set('focused', action.value);

    case actionTypes.CHANGE_HEADER_LIST:
      // return state.set('list', action.value).set('totalPage', action.totalPage);
      // merge方法更高 只需执行一次
      return state.merge({
        list: action.value,
        totalPage: action.totalPage
      })

    case actionTypes.CHANGE_HEADER_MOUSE:
      return state.set('mouseIn', action.value);

    case actionTypes.CHANGE_HEADER_PAGE:
      return state.set('page', action.value);

    default:
      return state;
  }
}