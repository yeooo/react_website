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

export const changeRecommendList = (value,page) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  value: fromJS(value), //将接收到的data js对象 转换为 immutable对象
  page
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

export const getRecommendList = (page) => {
  return (dispatch) => {
    axios.get('/api/getHomeRecommendList.json?page=' + page)
      .then((res) => {
        dispatch(changeRecommendList(res.data.data, page + 1));
      })
      .catch(() => {
        console.log('error in getRecommendList');
      })
  }
}