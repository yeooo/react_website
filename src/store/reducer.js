//引入 imuutable将全局state转变成immutable对象
import {
  combineReducers
} from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer
});

export default reducer;