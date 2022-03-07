import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

import { auth } from './firebase/firebase.utils';

// Subscription: before we fetched data in the componentDidMount method, we fired a fetch to the backend in that method. We don't want to remount our app, we just want to always know when firebase has realized that the auth state has changed.


class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

// open subscription - open messaging system between firebase app and our app. Whenever changes occur on Firebase from any source related to this app, firebase sends out a message that the auth state has changed; user has updated. We also have to close the subscription when the component unmounts

  unsubscribeFromAuth = null;


  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;