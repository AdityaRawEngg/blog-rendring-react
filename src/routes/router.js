import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import Navigation from "../components/Navigation";
function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" exact component={BlogDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
