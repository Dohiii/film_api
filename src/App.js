import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/UI/Header/Header";
import MainNav from "./components/UI/MainNav/MainNav";
import { Container } from "@material-ui/core";
import Trending from "./components/pages/Trending";
import Movies from "./components/pages/Movies";
import Series from "./components/pages/Series";
import Search from "./components/pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
          </Switch>
          <Switch>
            <Route exact path="/movies" component={Movies} />
          </Switch>
          <Switch>
            <Route path="/series" component={Series} />
          </Switch>
          <Switch>
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
