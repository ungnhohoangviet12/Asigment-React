import { Link, Route, BrowserRouter as Vit, Switch } from 'react-router-dom';
import './App.css';
import Sibar from './components/sibar/Sibar';
import Lanphuong from './Lanphuong';

function App() {
  return (
    <Vit>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/vietoccho">vietoccho</Link>
          </li>
          <li>
            <Link to="/lanphuong">lanphuong</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/vietoccho">
            <Sibar />
          </Route>
          <Route path="/lanphuong">
            <Lanphuong />
          </Route>
        </Switch>
      </div>
    </Vit>
  );
}


export default App;

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
