import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query'

import { Home, Panel, SignIn } from './pages'
import { ColorTheme, AccountGroup } from './components'
import { useStore } from './store'

const App = () => {
  const stateToken = useStore(state => state.token)
  const queryClient = new QueryClient()
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ColorTheme />
          <AccountGroup />
          <Switch>
            {stateToken === '' ? (
              <>
                <Route exact path="/" component={Home} />
                <Route path="/sign-in" component={SignIn} />
                <Redirect to="/" />
              </>
            ) : (
                <>
                  <Route path="/panel" component={Panel} />
                  <Redirect to="/panel" />
                </>
              )}
          </Switch>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
