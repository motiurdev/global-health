import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Home from './components/HomePage/Home/Home';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Footer from './components/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <PrivateRoute exact path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute exact path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
