import { Switch, Route } from 'react-router-dom';
import Auth from './views/Auth/Auth';
import Dashboard from './views/Dashboard/Dashboard';
import { UserProvider } from './context/UserContext';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  return (
    <UserProvider>
      <Switch >
        <Route path='/login'>
          <Auth />
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </UserProvider>
  );
}
