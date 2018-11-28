import * as actionTypes from "./actionTypes";
import axios from 'axios';

export const changeTopicList = (value) => ({
  type: actionTypes.CHANGE_TOPIC_LIST,
  value
});

export const changeArticleList = (value) => ({
  type: actionTypes.CHANGE_ARTICLE_LIST,
  value
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
    axios.get('/api/getHomeArticleList.json').then((res) => {
      dispatch(changeArticleList(res.data.data))
    }).then(() => {
      console.log('error in getArticleList');
    })
  }
}