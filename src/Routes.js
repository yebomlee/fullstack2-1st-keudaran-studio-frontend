import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import Main from './pages/Main/Main';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import SignIn from './pages/Sign/SignIn/SignIn';
import SignUp from './pages/Sign/SignUp/SignUp';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  constructor() {
    super();
    this.state = { isLogin: false };
  }

  changeLoginState = () => {
    if (new Cookies().get('user')) {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <>
            <Nav
              isLogin={this.state.isLogin}
              changeLoginState={this.changeLoginState}
            />
            <Route exact path="/" component={Main} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route
              exact
              path="/signin"
              render={() => <SignIn changeLoginState={this.changeLoginState} />}
            />
            <Route exact path="/signup" component={SignUp} />
            <Footer />
          </>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
