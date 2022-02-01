import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//pages
import Home from './pages/Home';
import SearchBook from './pages/SearchBook';

// styles
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/search'>
          <SearchBook />
        </Route>
      </Router>
    </div>
  );
}

export default App;
