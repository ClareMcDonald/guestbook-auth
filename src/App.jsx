import { Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Dashboard/Dashboard';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <Switch >
      <Route path='/login'>
        <Auth />
      </Route>
      <PrivateRoute path='/dashboard'>
        <Dashboard />
      </PrivateRoute>
    </Switch>
  );
}
