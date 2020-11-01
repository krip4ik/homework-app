import { Route, Switch } from 'react-router-dom';
import Users from './components/Users/Users';
import UserForm from './components/UserForm/UserForm';

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/newuser" component={UserForm} />
        </Switch>
    </>
  );
}

export default App;
