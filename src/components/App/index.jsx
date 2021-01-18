import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext'
import useAuthentication from '../../hooks/useAuthentication'
import GlobalStyle from './index.styled'
import TopMenu from '../layouts/TopMenu'
import AppRoutes from './Routes'

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
