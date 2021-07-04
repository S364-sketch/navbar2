import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home'
import Product from './pages/Product'
import Reports from './pages/Reports'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route  exact path='/' component={Home}/>
          <Route   path='/product' component={Product}/>
          <Route   path='/report' component={Reports}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
