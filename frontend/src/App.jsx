import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"

import { Home, Panel, SignIn } from './pages'
import { ColorTheme, AccountGroup } from './components'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <ColorTheme />
        <AccountGroup />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/panel" component={Panel} />
        </Switch>
      </Router>
    </ChakraProvider>
  )
}

export default App
