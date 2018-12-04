import {
  fromJS
} from 'immutable';
import axios from 'axios';
import * as constants from './constants';

export const changeDetail = (title, content) => ({
  type: constants.CHANGE_DETAIL,
  title: fromJS(title),
  content: fromJS(content)
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get('/api/getDetail.json?id='+id)
      .then((res) => {
        dispatch(changeDetail(res.data.data.title, res.data.data.content));
      }).catch(() => {

      });
  }
}