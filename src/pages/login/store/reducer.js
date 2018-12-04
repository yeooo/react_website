import {
  fromJS
} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  loginStatus: false,
  userName: '',
  passWord: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGELOGINSTATUS:
      return state.set('loginStatus', action.loginStatus);
    case constants.CHANGELOGININFO:
      return state.merge({
        userName: action.userName,
        passWord: action.passWord
      })
    default:
      return state;
  }
}