import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect} from "react-router-dom";
import Auth from './pages/Auth'
import Navbar from './components/Navbar';
import ChatRoom from './pages/ChatRoom';
import CreateRoom from './pages/CreateRoom';
import MyRooms from './pages/MyRooms';
import Logout from './pages/Logout';
import "./style/base.css";
import "./style/pages.css";
import { useSelector, useDispatch } from 'react-redux';
import PublicRoute from './routes/Public'
import PrivateRoute from './routes/Private'
import io from "socket.io-client";
import {Config} from "./utils/Config"
import {SOCKET_CONNECTION_SUCCESS} from './actions/index'

const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector(state => state.changeAuthState)
  const socketState = useSelector(state => state.changeSocketState)
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(myState.accessToken != null){
      connectSocket()
      setIsAuth(true)
    }else{
      setIsAuth(false)
    }
  }, [myState.accessToken])

  const connectSocket = () => {
    if(socketState.socket == null){
      let socket = io((Config.base_url).replace("http://", ""), {
          withCredentials: true
      });
      dispatch({ type: SOCKET_CONNECTION_SUCCESS, payload:socket })
    }
  }

  const Main = withRouter(({location}) => {
    return (
      <>
      {
        location.pathname != '/auth' && location.pathname != '/logout' && <Navbar />
      }
      <PublicRoute restricted={true} isAuth={isAuth} exact path="/auth" component={Auth} />
      <PrivateRoute isAuth={isAuth} exact path="/logout" component={Logout} /> 
      <PrivateRoute isAuth={isAuth} exact path="/" component={ChatRoom} />
      <PrivateRoute isAuth={isAuth} exact path="/create-room" component={CreateRoom} />
      <PrivateRoute isAuth={isAuth} exact path="/my-rooms" component={MyRooms} />
      </>
    )
  })
  return (
    <Router>
      <Switch>
        <Main />
      </Switch>
    </Router>
  )
}

export default App
