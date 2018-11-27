import * as actionTypes from "./actionTypes";
import {
  fromJS
} from 'immutable';
import axios from 'axios';

const changeList = (value) => ({
  type: actionTypes.CHANGE_HEADER_LIST,
  value: fromJS(value), //将接收到的data js对象 转换为 immutable对象
  totalPage: Math.ceil(value.length / 10)
});

export const searchFocus = (value) => ({
  type: actionTypes.CHANGE_HEADER_FOCCUS,
  value
});

export const changeMouseState = (value) => ({
  type: actionTypes.CHANGE_HEADER_MOUSE,
  value
});

export const changePage = (value) => ({
  type: actionTypes.CHANGE_HEADER_PAGE,
  value
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/getHeaderList.json').then((res) => {
      const data = res.data.data;
      dispatch(changeList(data))
    }).catch(() => {
      console.log('getHeaderList 数据异常');
    });
  }
};