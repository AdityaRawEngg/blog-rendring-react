import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogDetails from "../pages/BlogDetails";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" exact component={BlogDetails} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
