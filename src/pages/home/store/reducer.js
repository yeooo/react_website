import {
  fromJS
} from 'immutable';
import * as constant from "./constant";

const defaultSate = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  page: 1,
  showScroll: false
});

const changeTopicList = (state, action) => {
  return state.set('topicList', action.value);
}

const changeArticleList = (state, action) => {
  return state.merge({
    'articleList': state.get('articleList').concat(action.value),
    'page': action.page
  })
}

const changeRecommendList = (state, action) => {
  return state.set('recommendList', action.value);
}

const changeScrollShow = (state, action) => {
  return state.set('showScroll', action.show);
}

export default (state = defaultSate, action) => {
  switch (action.type) {
    case constant.CHANGE_TOPIC_LIST:
      return changeTopicList(state, action);
    case constant.CHANGE_ARTICLE_LIST:
      return changeArticleList(state, action)
    case constant.CHANGE_RECOMMEND_LIST:
      return changeRecommendList(state, action);
    case constant.CHANGE_SCROLL_SHOW:
      return changeScrollShow(state, action);
    default:
      return state;
  }

}