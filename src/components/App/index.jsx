import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import useAuthentication from '../../hooks/useAuthentication'
import { AUTHENTICATION } from '../../constants'
import GlobalStyle from './index.styled'
import TopMenu from '../layouts/TopMenu'
import Login from '../pages/Login'
import Devices from '../pages/Devices'
import CreateDevice from '../pages/CreateDevice'

const AppRoutes = () => {
  const { authState } = useContext(AuthContext)

  return (
    <>
      {authState === AUTHENTICATION.authenticated ? (
        <>
          <Route path="/createDevice">
            <CreateDevice />
          </Route>
          <Route path="/devices">
            <Devices />
          </Route>
        </>
      ) : null}
      {authState === AUTHENTICATION.unauthenticated ? (
        <Route exact path="/">
          <Login />
        </Route>
      ) : null}
      {authState !== AUTHENTICATION.authenticating ? (
        <Route path="/*">
          <Redirect
            to={authState === AUTHENTICATION.authenticated ? '/devices' : '/'}
          />
        </Route>
      ) : null}
    </>
  )
}

const App = () => {
  const context = useAuthentication()

  return (
    <>
      <GlobalStyle />
      <AuthContext.Provider value={context}>
        <Router>
          <TopMenu />
          <Switch>
            <AppRoutes />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  )
}

export default App
