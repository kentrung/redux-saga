import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/page/LoginPage';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
