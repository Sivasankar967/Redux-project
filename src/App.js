import Header from './Container/Header'
import {BrowserRouter as Router,Switch ,Route} from 'react-router-dom'
import ProductListing from './Container/ProductListing';
import ProductDetails from './Container/ProductDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route path='/' exact component ={ProductListing}/>
      <Route path='/Product/:ProductId' exact component ={ProductDetails}/>
      <Route>404 NotFound !</Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
