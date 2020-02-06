import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Homepage, ShopPage, SignInAndSignUpPage } from "./pages";
import { Header } from "./components";
import { auth, createUserProfileDocument } from "./firebase";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        //get user from firebase and set to current user
        const userRef = await createUserProfileDocument(userAuth);

        console.log(userRef, "userRef");

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: { id: snapshot.id, ...snapshot.data() }
          });
          console.log(this.state.currentUser);
        });
      } else {
        //set currentuser to null when logged user
        this.setState({ currentUser: userAuth });
        console.log(this.state.currentUser);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
