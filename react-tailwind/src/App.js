import "./App.css";
import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Contact from "./pages/Contact";
import MealDetail from "./pages/MealDetail";
import Login from "./pages/Login";
import AuthProvider from "./store/AuthProvider";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Layout>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/meals" exact>
            <Meals />
          </Route>
          <Route path="/meals/:mealId">
            <MealDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Layout>
      </Switch>
    </AuthProvider>
  );
}

export default App;
