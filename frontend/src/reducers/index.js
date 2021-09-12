import {combineReducers} from 'redux';
import changeAuthState from './auth';
import changeSocketState from './socket';
import changeRoomState from './room';

const rootReducers =  combineReducers({
  changeAuthState, changeSocketState, changeRoomState
})

export default rootReducers