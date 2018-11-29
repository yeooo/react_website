import * as actionTypes from "./actionTypes";
import axios from 'axios';
import {
  fromJS
} from 'immutable';

export const changeTopicList = (value) => ({
  type: actionTypes.CHANGE_TOPIC_LIST,
  value: fromJS(value) //将接收到的data js对象 转换为 immutable对象
});

export const changeArticleList = (value) => ({
  type: actionTypes.CHANGE_ARTICLE_LIST,
  value: fromJS(value) //将接收到的data js对象 转换为 immutable对象
});

export const changeRecommendList = (value) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  value: fromJS(value) //将接收到的data js对象 转换为 immutable对象
})

export const getTopicList = () => {
  return (dispatch) => {
    axios.get('/api/getHomeTopicList.json')
      .then((res) => {
        dispatch(changeTopicList(res.data.data));
      })
      .catch(() => {
        console.log('error in getTopicList');
      })
  }
}

export const getArticleList = () => {
  return (dispatch) => {
    axios.get('/api/getHomeArticleList.json')
      .then((res) => {
        dispatch(changeArticleList(res.data.data));
      })
      .catch(() => {
        console.log('error in getHomeArticleList');
      })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    console.log(1)
    axios.get('/api/getHomeRecommendList..json')
      .then((res) => {
        dispatch(changeRecommendList(res.data.data));
      })
      .catch(() => {
        console.log('error in getRecommendList');
      })
  }
}