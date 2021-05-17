
import './App.css';
import {Switch , Route, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/Contact'


function App() {
  return (
    <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/Project" component={Project} />
      <Route exact path="/Contact" component={Contact} />
      <Redirect to="/" />
         
    </Switch>
  );
}

export default App;
