import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header></Header>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
        <Route path="/courses">
            <Courses></Courses>
          </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/signIn">
        <SignIn></SignIn>
        </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
     </BrowserRouter>
    </div>
  );
}

export default App;
