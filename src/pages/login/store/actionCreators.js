import axios from 'axios';
import * as constants from './constants';

export const changeLoginStatus = (loginStatus) => ({
  type: constants.CHANGELOGINSTATUS,
  loginStatus
});

export const changeLoginInfo = (userName, passWord) => ({
  type: constants.CHANGELOGININFO,
  userName,
  passWord
})

export const login = (userName, passWord) => {
  return (dispatch) => {
    axios.get('/api/login.json?userName=' + userName + '&passWord=' + passWord).then((res) => {
      dispatch(changeLoginStatus(res.data.data));
      dispatch(changeLoginInfo(userName, passWord));
    }).catch(() => {

    })
  }

}