import { Fragment } from "react";
import { connect } from "react-redux";
import Nav from "./components/Nav";
import RoutersPage from "./components/RoutersPage";

const App = ({ authedUser }) => {
  return (
    <Fragment>
      {!authedUser ? null : (
        <Nav />
      )}
      <div className="container">
        <RoutersPage />
      </div>
    </Fragment>
  );
};

const mapStateToProps = ({ authedUser }) => ({ authedUser });

export default connect(mapStateToProps)(App);
