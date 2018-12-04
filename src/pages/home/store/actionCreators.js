import * as constant from "./constant";
import axios from 'axios';
import {
  fromJS
} from 'immutable';

export const changeTopicList = (value) => ({
  type: constant.CHANGE_TOPIC_LIST,
  value: fromJS(value) //将接收到的data js对象 转换为 immutable对象
});

export const changeArticleList = (value, page) => ({
  type: constant.CHANGE_ARTICLE_LIST,
  value: fromJS(value), //将接收到的data js对象 转换为 immutable对象
  page: fromJS(page)
});

export const changeRecommendList = (value) => ({
  type: constant.CHANGE_RECOMMEND_LIST,
  value: fromJS(value) //将接收到的data js对象 转换为 immutable对象

});

export const changeScrollShow = (show)=>({
  type:constant.CHANGE_SCROLL_SHOW,
  show
});

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

export const getArticleList = (page = 0) => {
  return (dispatch) => {
    axios.get('/api/getHomeArticleList.json?page=' + page)
      .then((res) => {
        dispatch(changeArticleList(res.data.data, page + 1));
      })
      .catch(() => {
        console.log('error in getHomeArticleList');
      })
  }
}


export const getRecommendList = () => {
  return (dispatch) => {
    axios.get('/api/getHomeRecommendList.json')
      .then((res) => {
        dispatch(changeRecommendList(res.data.data));
      })
      .catch(() => {
        console.log('error in getRecommendList');
      })
  }
}