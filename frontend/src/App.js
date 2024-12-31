import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Settings from './pages/Settings';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#ffe5f0',
      100: '#fbb8d3',
      200: '#f68ab5',
      300: '#f15c98',
      400: '#ec2e7b',
      500: '#d31462',
      600: '#a50e4c',
      700: '#770937',
      800: '#490321',
      900: '#1d000c',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/leaderboard" component={Leaderboard} />
            <Route path="/settings" component={Settings} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;

