import React from "react";

import  {BrowserRouter, Switch, Route, Link} from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/movies.id"> {this.props.title} </Link>
      </div>
    );
  }
}
export default Homepage;
