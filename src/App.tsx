import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react"
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Login from './pages/Login';
import useToast from "Alerts";
import User from "pages/User";
import Landing from "pages/Landing";
import Register from "pages/Register";
import Transactions from "pages/Transactions";
import Credit from "pages/Credit";
import Debit from "pages/Debit";
import "./App.css"
import { createBrowserHistory, createHashHistory } from 'history';
import { isElectron } from "utils/isElectron";

export const ToastContext = React.createContext<any>(null)
function App() {
const { showAlert, Toast } = useToast();
const UserRoutes = ({location}) => (
  <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
            </Switch>
)
const AdminRoutes = ({location}) => (
  <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/transactions" component={Transactions} />
              <Route exact path="/credit-transactions" component={Credit} />
              <Route exact path="/debit-transactions" component={Debit} />
              <Route exact path="/user" component={User} />
            </Switch>
)
const history = isElectron()
  ? createHashHistory()
  : createBrowserHistory();
  return (
    <>
          <ToastContext.Provider value={showAlert}>
      <AnimateSharedLayout>
        <BrowserRouter>
        <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
          <Toast />
            {/* {
              localStorage?.ET_token && localStorage?.ET_token!==undefined ? <AdminRoutes location={location} /> : <UserRoutes location={location} />
            } */}
            <AdminRoutes location={location} />
          </AnimatePresence>
        )}
         />
        </BrowserRouter>
      </AnimateSharedLayout>
          </ToastContext.Provider>
    </>
  );
}

export default App;
